import {BindingEngine, autoinject} from 'aurelia-framework';
import {IMapObserverSplice} from 'aurelia-binding';

@autoinject
export class DemoMap {

  myCollection: Map<number, string> = new Map<number, string>();

  constructor(private bindingEngine: BindingEngine) {

    let subscription = this.bindingEngine.collectionObserver(this.myCollection)
      .subscribe(this.collectionChanged.bind(this));

  }

  addItems() {
    var nextKey = this.myCollection.size;
    nextKey++;
    this.myCollection.set(nextKey, `hello world #${nextKey}`);
  }

  changeItems() {
    var lastKey = this.myCollection.size;
    this.myCollection.set(lastKey, `world hello #${lastKey}`);
  }

  removeItems() {
    var lastKey = this.myCollection.size;
    this.myCollection.delete(lastKey);
  }

  collectionChanged(splices: Array<IMapObserverSplice<number, string>>) {
    for (var i = 0; i < splices.length; i++) {
      var splice: IMapObserverSplice<number, string> = splices[i];

      if(splice.type == "add"){
        // Tell us what values were added.
        var valuesAdded = this.myCollection.get(splice.key);
        console.log(`'${valuesAdded}' was added to position ${splice.key}`);
      }
      
      if(splice.type == "update"){
        var newValue = splice.object.get(splice.key);
        // Tell us what values that were updated.
        console.log(`Position ${splice.key} changed from '${splice.oldValue}' to '${newValue}'`);
      }

      if(splice.type == "delete"){
        // Tell us what values were removed.
        console.log(`'${splice.oldValue}' was deleted from position ${splice.key}`);
      }
     
    }
  }
}
