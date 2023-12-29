import devices from '../../constants/devices';
import ShopItemView from './shopItemView';

class ShopView {
  renderShop() {
    const shopList = document.querySelector('.shop-list');
    const lastItem = document.querySelector('.shop-item_last');
    devices.data.forEach((item) => {
      console.log(item);
      if (item.pickupAvailable === true && item.price.amount) {
        const shopItem = new ShopItemView(item).createElement();
        shopList.insertBefore(shopItem, lastItem);
        const price = shopItem.querySelector('.price__new');
        price.classList.add('wow');
      }
    });
  }
}

export default ShopView;
