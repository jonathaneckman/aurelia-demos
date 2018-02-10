import {autoinject} from 'aurelia-framework';

@autoinject
export class DemoSet {

  logs: string[] = [];
  filePaths: string[] = [
    '/aurelia/src/routes/demo-set/demo-set-code/demo-set-code.ts',
    '/aurelia/src/routes/demo-set/demo-set-code/demo-set-code.html'
  ];

  constructor() {}
}
