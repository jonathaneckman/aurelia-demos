import { bindable } from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {BindingEngine, ISetObserverSplice} from 'aurelia-binding';

@autoinject
export class DemoSetCode {

  @bindable
  logs: string[] = [];
  myCollection: Set<number> = new Set<number>();

  constructor(private bindingEngine: BindingEngine) {

    let subscription = this.bindingEngine.collectionObserver(this.myCollection)
      .subscribe(this.collectionChanged.bind(this));
  }

  addItems() {
    var nextKey = this.myCollection.size;
    nextKey++;
    this.myCollection.add(nextKey);
  }

  removeItems() {
    var lastKey = this.myCollection.size;
    this.myCollection.delete(lastKey);
  }

  collectionChanged(splices: Array<ISetObserverSplice<number>>) {
    for (var i = 0; i < splices.length; i++) {
      var splice: ISetObserverSplice<number> = splices[i];

      if(splice.type == "add"){
        // Tell us what values were added.
        this.logs.push(`'${splice.value}' was added to the set`);
      }

      if(splice.type == "delete"){
        // Tell us what values were removed.
        this.logs.push(`'${splice.value}' was removed from the set`);
      }
     
    }
  }
}
