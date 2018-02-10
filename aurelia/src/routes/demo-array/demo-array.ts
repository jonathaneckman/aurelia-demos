import { autoinject } from 'aurelia-framework';

@autoinject
export class DemoArray {

  logs: string[] = [];
  filePaths: string[] = [
    '/aurelia/src/routes/demo-array/demo-array-code/demo-array-code.ts',
    '/aurelia/src/routes/demo-array/demo-array-code/demo-array-code.html'
  ];

  constructor() { }
}
