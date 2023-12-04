import imagePaths from '../constants/imagePaths';

class ShopItemView {
/**
 * @param {ShopItem} itemObject
 */
  constructor(itemObject) {
    this.itemObject = itemObject;
    this.imagesPaths = imagePaths;
    this.htmlComponent = document.createDocumentFragment();
    this.htmlComponent.append(this.createElement());
  }

  stringifyPrice(price) {
    const priceArray = price.toString().split('');
    priceArray.splice(-3, 0, ' ');
    return `${priceArray.join('')}&nbsp;₽`;
  }

  createElement() {
    const wrapper = document.createElement('li');
    wrapper.classList.add('shop-list__item');
    wrapper.classList.add('shop-item');
    wrapper.setAttribute('id', `${this.itemObject.htmlId}`);
    console.log(this.id, imagePaths[`${this.itemObject.id}@2x`]);
    wrapper.innerHTML = `
    <div class="shop-item__label">Скидка&nbsp;${this.itemObject.discount}%</div>
    <div class="shop-item__image">
      <picture>
        <source
          media="(min-width: 1600px), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)"
          type="image/webp"
          srcset=${imagePaths[`${this.itemObject.id}@2x`]}
        />
        <img src=${imagePaths[`${this.itemObject.id}`]} alt="" />
      </picture>
    </div>
    <div class="shop-item__name">${this.itemObject.name}</div>
    <div class="shop-item__price price">
      <div
        class="price__new wow scalePrice"
        data-wow-delay="${this.itemObject.id * 0.5}s"
      >${this.stringifyPrice(this.itemObject.newPrice)}</div>
      <div class="price__old">${this.stringifyPrice(this.itemObject.oldPrice)}</div>
    </div>
    <div class="shop-item__footer item-footer">
      <div class="item-footer__conditions">
        при покупке комплекта 3&nbsp;в 1
      </div>
      <a
        class="item-footer__button btn-primary js-gtm-event"
        href=${this.itemObject.link}
        target="_blank"
        title="Подробнее"
        data-event=${this.itemObject.dataEvent}
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
