import {FrameworkConfiguration, PLATFORM} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/code-block/code-block'),

    // UX Components in development
    PLATFORM.moduleName('./elements/ux-card/ux-card'),
    PLATFORM.moduleName('./elements/ux-drawer/ux-drawer'),
    PLATFORM.moduleName('./elements/toolbar/ux-toolbar'),
    PLATFORM.moduleName('./elements/tabs/ux-tabs')
  ]);
}
