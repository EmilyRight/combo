import { promoCampaignIds } from '../constants/promoCampaignIds';

/**
 * @typedef ServiceOptions
 * @prop {string} baseUrl
 * @prop {number} minResponseTime
 * @prop {string} authorization
 */
class ApiService {
  constructor() {
    const siteId = this.getRegion() || 'siteMSK';
    const siteHash = this.getHash();
    const urlPrefix = siteId?.slice(4).toLowerCase() || 'msk';
    const promoCampaignId = promoCampaignIds.join('+');
    if (siteHash === '#test') {
      const tariffsPath = `t2.ru/api/shop/products/devices/bundles/?siteId=${siteId}&category=smartphones&promoCampaignId=${promoCampaignId}&bundleIndex=1&bundleSize=1000`;
      this.baseUrl = `https://${tariffsPath}`;
    } else {
      const tariffsPath = `.t2.ru/api/shop/products/devices/bundles/?siteId=${siteId}&category=smartphones&promoCampaignId=${promoCampaignId}&bundleIndex=1&bundleSize=1000`;
      this.baseUrl = `https://${urlPrefix}${tariffsPath}`;
    }
  }

  getRegion() {
    const siteIdString = window.location.search;
    const siteId = new URLSearchParams(siteIdString).get('region');
    return siteId;
  }

  getHash() {
    const { hash } = window.location;
    return hash;
  }

  async request() {
    const fetchOptions = { method: 'GET', headers: { Accept: 'application/json, text/plain' } };
    const responsePromise = await fetch(this.baseUrl, fetchOptions);

    return new Promise((resolve, reject) => {
      try {
        const response = responsePromise;
        if (!response.ok) {
          throw new Error(String(response.status));
        }
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getSubscriptionList() {
    const response = await this.request();
    return response.json();
  }
}

export default ApiService;
