import imagePaths from '../../constants/imagePaths';

class ShopItemView {
/**
 * @param {ShopItem} itemObject
 */
  constructor(itemObject) {
    this.promoCampaignIds = [{ id: '1400002', discount: 50 }, { id: '2200001', discount: 55 }];
    this.itemObject = itemObject;
    this.imagesPaths = imagePaths;
    this.htmlComponent = document.createDocumentFragment();
    this.htmlComponent.append(this.createElement());
    this.discount = null;
  }

  stringifyPrice(price) {
    const priceArray = price.toString().split('');
    priceArray.splice(-3, 0, ' ');
    return `${priceArray.join('')}&nbsp;₽`;
  }

  getDiscount() {
    const promoList = this.itemObject.promoCampaigns;

    this.promoCampaignIds.forEach((promoCampaign) => {
      const promo = promoList.filter((campaign) => campaign.id === promoCampaign.id)[0];
      return promo?.discount;
    });

    promoList.forEach((promoCampaign) => {
      const promo = this.promoCampaignIds.filter((campaign) => campaign.id === promoCampaign.id);
      if (promo.length > 0) {
        this.discount = promo[0].discount;
      }
    });
  }

  getDiscountedPrice() {
    const discountValue = Math.ceil(this.itemObject.price.amount - (
      this.itemObject.price.amount * this.discount / 100
    ));
    return discountValue;
  }

  createElement() {
    const wrapper = document.createElement('li');
    wrapper.classList.add('shop-list__item');
    wrapper.classList.add('shop-item');
    wrapper.setAttribute('id', `${this.itemObject.article}`);
    this.getDiscount();

    wrapper.innerHTML = `
    <div class="shop-item__label">Скидка&nbsp;${this.discount}%</div>
    <div class="shop-item__image">
      <picture>
        <source
          media="(min-width: 1600px), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)"
          type="image/webp"
          srcset=https://tele2.ru${this.itemObject.images[0].url}
        />
        <img src=https://tele2.ru${this.itemObject.images[0].url} alt="" />
      </picture>
    </div>
    <div class="shop-item__name">${this.itemObject.frontName}</div>
    <div class="shop-item__price price">
      <div
        class="price__new"
      >${this.stringifyPrice(this.getDiscountedPrice())}</div>
      <div class="price__old">${this.stringifyPrice(this.itemObject.price.amount)}</div>
    </div>
    <div class="shop-item__footer item-footer">
      <div class="item-footer__conditions">
        при покупке комплекта 3&nbsp;в 1
      </div>
      <a
        class="item-footer__button btn-primary js-gtm-event"
        href=https://msk.tele2.ru/shop/product/${this.itemObject.categorySlug}/${this.itemObject.slug}/
        target="_blank"
        title="Подробнее"
        data-event=${this.itemObject.slug}
      >
        <span class="button__text"> Подробнее </span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <use xlink:href="#arrow-link"></use>
        </svg>
      </a>
    </div>
    `;
    return wrapper;
  }

  render() {
    return this.htmlComponent;
  }
}

export default ShopItemView;
