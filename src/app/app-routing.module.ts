import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KorianIndiaComponent } from './components/korian-india/korian-india.component';
import { TermsCondComponent } from './components/terms-cond/terms-cond.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: KorianIndiaComponent},
  { path: 'tnc', component: TermsCondComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
