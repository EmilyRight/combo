class ShopModel {
  #apiService;

  #devicesList;

  /**
   * @param {ApiService} apiService
   */
  constructor(apiService) {
    this.#apiService = apiService;
  }

  /**
   * @return {Promise<void>}
   */
  async loadData() {
    try {
      const devices = await this.#apiService.getSubscriptionList();
      this.#devicesList = devices.data;
    } catch (error) {
      console.log('Error', error);
    }
  }

  getSubscriptions() {
    return this.#devicesList;
  }
}

export default ShopModel;
