import { BindingEngine, computedFrom } from 'aurelia-binding';
import { bindable } from 'aurelia-templating';
import { autoinject } from 'aurelia-framework';

@autoinject
export class TabHeaders {

  @bindable
  tabs: any[] = [];

  constructor(private bindingEngine: BindingEngine) { }

  bind() {
    let subscription = this.bindingEngine.collectionObserver(this.tabs)
      .subscribe(this.tabsChanged.bind(this));
  }

  tabsChanged() {
    this.setDefaultActiveTab();
  }

  setDefaultActiveTab() {
    if (this.tabs.length <= 0) {
      return;
    }

    var activeTab = this.tabs.find((tab) => {
      return tab.active;
    });

    if (!activeTab) {
      this.tabs[0].active = true;
    }
  }

  changeTab(newActiveTab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    newActiveTab.active = true;
  }
}
