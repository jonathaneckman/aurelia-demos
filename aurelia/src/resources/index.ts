import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/code-block/code-block'),
    PLATFORM.moduleName('./elements/code-file-host/code-file-host'),
    PLATFORM.moduleName('./elements/console/console'),
    PLATFORM.moduleName('./elements/tabs/tab-headers'),
    PLATFORM.moduleName('./elements/tabs/tab.html'),

    // UX Components in development
    PLATFORM.moduleName('./elements/ux-card/ux-card'),
    PLATFORM.moduleName('./elements/ux-drawer/ux-drawer'),
    PLATFORM.moduleName('./elements/toolbar/ux-toolbar')
  ]);
}
