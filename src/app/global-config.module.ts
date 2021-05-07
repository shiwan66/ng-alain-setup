import { ModuleWithProviders, NgModule } from "@angular/core";
import { DelonMockModule } from "@delon/mock";
import { AlainThemeModule } from "@delon/theme";
import { AlainConfig, ALAIN_CONFIG } from "@delon/util";

// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config

import { DelonACLModule } from "@delon/acl";

const alainConfig: AlainConfig = {};

const alainModules = [
  AlainThemeModule.forRoot(),
  DelonACLModule.forRoot(),
  DelonMockModule.forRoot()
];
const alainProvides = [{ provide: ALAIN_CONFIG, useValue: alainConfig }];

// #region reuse-tab

import { RouteReuseStrategy } from "@angular/router";
import { ReuseTabService, ReuseTabStrategy } from "@delon/abc/reuse-tab";
alainProvides.push({
  provide: RouteReuseStrategy,
  useClass: ReuseTabStrategy,
  deps: [ReuseTabService]
} as any);

// #endregion

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, NZ_CONFIG } from "ng-zorro-antd/core/config";

const ngZorroConfig: NzConfig = {};

const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];

// #endregion

@NgModule({
  imports: [...alainModules]
})
export class GlobalConfigModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalConfigModule,
      providers: [...alainProvides, ...zorroProvides]
    };
  }
}
