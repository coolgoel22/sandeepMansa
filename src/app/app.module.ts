import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Firebase .....
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFirestore } from 'angularfire2/firestore';

// Components
import { AppComponent } from './app.component';
    
import { KorianIndiaComponent} from './components/korian-india/korian-india.component';
import { TermsCondComponent } from './components/terms-cond/terms-cond.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';

// Services .....
import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.serive';

// Firebase configuration object...
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: ""
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    KorianIndiaComponent,
    NavbarComponent,
    TermsCondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [ AuthService, AngularFireDatabase, ClientService  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

