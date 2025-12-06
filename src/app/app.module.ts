import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdProject1Component } from './cd-project1/cd-project1.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './commoncomponent/navbar/navbar.component';
import { FooterComponent } from './commoncomponent/footer/footer.component';
import { IphoneComponent } from './navigatingcomponent/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponent/android/android.component';
import { CompanyComponent } from './navigatingcomponent/company/company.component';
import { SigninComponent } from './navigatingcomponent/signin/signin.component';
import { HelpComponent } from './navigatingcomponent/help/help.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { AndroiduserComponent } from './welcome/androiduser/androiduser.component';
import { MobilesecurityComponent } from './welcome/mobilesecurity/mobilesecurity.component';
import { SpywareComponent } from './welcome/spyware/spyware.component';
import { HelpcenterComponent } from './welcome/helpcenter/helpcenter.component';
import { SpyingComponent } from './welcome/spying/spying.component';
import { LatestinsightsComponent } from './welcome/latestinsights/latestinsights.component';

@NgModule({
  declarations: [
    AppComponent,
    CdProject1Component,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FooterComponent,
    IphoneComponent,
    AndroidComponent,
    CompanyComponent,
    SigninComponent,
    HelpComponent,
    BannerComponent,
    AndroiduserComponent,
    MobilesecurityComponent,
    SpywareComponent,
    HelpcenterComponent,
    SpyingComponent,
    LatestinsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
