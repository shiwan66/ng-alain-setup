import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { registerLocaleData } from "@angular/common";
import localeZh from "@angular/common/locales/zh";
registerLocaleData(localeZh);

import { AlainThemeModule, VERSION as VERSION_ALAIN } from "@delon/theme";
import { DelonFormModule } from "@delon/form";
import { DelonAuthModule } from "@delon/auth";
import { DelonACLModule } from "@delon/acl";
import { DelonCacheModule } from "@delon/cache";
import { AlainConfigService } from "@delon/util";
import { DelonMockModule } from "@delon/mock";
import * as MOCKDATA from "../../_mock";
import { SHARED_DELON_MODULES } from "./shared-delon.module";
import { SHARED_ZORRO_MODULES } from "./shared-zorro.module";
import { GlobalConfigModule } from "./global-config.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AlainThemeModule.forRoot(),
    DelonACLModule,
    DelonCacheModule,
    DelonAuthModule,
    DelonFormModule.forRoot(),
    DelonMockModule.forRoot({ data: MOCKDATA }),
    GlobalConfigModule.forRoot(),
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES
  ],
  providers: [AlainConfigService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    setTimeout(() => {
      document.querySelector("#VERSION").innerHTML = `@delon version: ${
        VERSION_ALAIN.full
      }`;
    }, 1000);
  }
}
