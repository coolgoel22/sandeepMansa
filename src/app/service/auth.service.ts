import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { 
     AngularFirestore, 
     AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService{
     private user: Observable<any>;
     constructor(
          private afAuth: AngularFireAuth
     ){}

     login(email: string, password:string){
          return new Promise((resolve, reject)=>{
               this.afAuth.auth.signInWithEmailAndPassword(email, password).then(userData=> {
                    resolve(userData);
               }, err=>{
                    reject(err);
               })
          });
     }
     createUser(email: string, password: string){
          this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch((err)=>{
               console.log("Error is-> " + err);
          });
     }
     logout(){
          this.afAuth.auth.signOut();
     }
}