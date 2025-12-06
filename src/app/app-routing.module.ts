import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IphoneComponent } from './navigatingcomponent/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponent/android/android.component';
import { CompanyComponent } from './navigatingcomponent/company/company.component';
import { HelpComponent } from './navigatingcomponent/help/help.component';
import { SigninComponent } from './navigatingcomponent/signin/signin.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'iphone',component:IphoneComponent},
  {path:'android',component:AndroidComponent},
  {path:'company',component:CompanyComponent},
  {path:'help',component:HelpComponent},
  {path:'sigin',component:SigninComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
