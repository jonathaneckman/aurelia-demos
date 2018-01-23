interface IMapCollectionObserverSplice<K = any, V = any> extends IObjectCollectionObserverSplice<Map<K, V>> {
    key: K,
    oldValue: V
  }
  
  interface IObjectCollectionObserverSplice<T = any> {
    key: any;
    object: T;
    oldValue: any
    type: "add" | "delete" | "update"
  }
  
  interface ICollectionObserverSplice<T = any> {
  
    /**
     * Number of items added to the collection.
     */
    addedCount: number;
  
    /**
     * The position at which the items were added.
     */
    index: number;
  
    /**
     * A collection of items that were removed from the collection.
     */
    removed: Array<T>;
  }