import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Firebase .....
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

// Components
import { AppComponent } from './app.component';
    
import { KorianIndiaComponent} from './components/korian-india/korian-india.component';
import { TermsCondComponent } from './components/terms-cond/terms-cond.component';
import { LoginComponent } from './components/login/login.component';

// Services .....
import { AuthService } from './service/auth.service';


// Firebase configuration object...
const firebaseConfig = {
  apiKey: "AIzaSyBJfxho9M9zt5ptusPffZkhf32FZP8LTJk",
  authDomain: "korianindia.firebaseapp.com",
  databaseURL: "https://korianindia.firebaseio.com",
  projectId: "korianindia"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KorianIndiaComponent,
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
  providers: [ AuthService, AngularFirestore  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

