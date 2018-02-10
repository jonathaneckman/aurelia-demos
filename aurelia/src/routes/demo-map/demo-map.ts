import { autoinject } from 'aurelia-framework';

@autoinject
export class DemoMap {

  logs: string[] = [];
  filePaths: string[] = [
    '/aurelia/src/routes/demo-map/demo-map-code/demo-map-code.ts',
    '/aurelia/src/routes/demo-map/demo-map-code/demo-map-code.html'
  ];

  constructor() { }
}
