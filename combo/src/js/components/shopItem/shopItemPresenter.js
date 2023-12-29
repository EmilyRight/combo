class shopItemPresenter {
  /**
   * @param {ShopView} view
   * @param {ShopItemModel} model
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

    return {
      items,
    };
  }

  updateView() {
    this.view.state = this.createViewState();
    this.view.render();
  }
}

export default shopItemPresenter;
