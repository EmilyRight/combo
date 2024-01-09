class ShopPresenter {
  /**
   * @param {ShopView} view
   * @param {ShopModel} model
   */
  constructor(view, model) {
    this.view = view;
    this.model = model;

    window.queueMicrotask(() => this.updateView());
  }

  handleWindowPopState() {
    this.updateView();
  }

  createViewState() {
    const items = this.model.getSubscriptions();
    return items;
  }

  updateView() {
    this.view.state = this.createViewState();
    this.view.renderShop();
  }
}

export default ShopPresenter;
