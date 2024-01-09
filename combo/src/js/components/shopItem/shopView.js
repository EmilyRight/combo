// import devices from '../../constants/devices';
import ShopItemView from './shopItemView';

class ShopView {
  constructor() {
    this.state = null;
  }

  renderShop() {
    const devices = this.state;
    const shopList = document.querySelector('.shop-list');
    const lastItem = document.querySelector('.shop-item_last');
    devices.forEach((item) => {
      if (item.pickupAvailable === true && item.price.amount) {
        const shopItem = new ShopItemView(item).createElement();
        shopList.insertBefore(shopItem, lastItem);
      }
    });
  }
}

export default ShopView;
