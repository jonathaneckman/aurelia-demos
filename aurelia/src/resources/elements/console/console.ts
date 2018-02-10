import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class Console {

  @bindable
  logs: string[] = [];

  constructor(){}

}
