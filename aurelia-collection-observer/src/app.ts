import { autoinject } from "aurelia-framework";
import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

@autoinject
export class App {
  router: Router;

  constructor() { }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;

    config.options.pushState = true;
    config.title = 'Collection Observer Demo';
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('./routes/home/home'),
        title: 'Welcome'
      },
      {
        route: 'demo-map',
        name: 'demo-map',
        moduleId: PLATFORM.moduleName('./routes/demo-map/demo-map'),
        title: 'Map',
        nav: true
      },
      {
        route: 'demo-array',
        name: 'demo-array',
        moduleId: PLATFORM.moduleName('./routes/demo-array/demo-array'),
        title: 'Array',
        nav: true
      },
      {
        route: 'demo-set',
        name: 'demo-set',
        moduleId: PLATFORM.moduleName('./routes/demo-set/demo-set'),
        title: 'Set',
        nav: true
      }
    ]
    );
  }
}
