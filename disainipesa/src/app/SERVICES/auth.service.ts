import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/auth';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public fireAuth: AngularFireAuth){
    this.authStatusListener();
  }

  currentUser: any = ''
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();



  authStatusListener(){
    this.fireAuth.onAuthStateChanged((credential)=>{
      if(credential){
        // console.log(credential);
        this.authStatusSub.next(credential);
        console.log('User is logged in');

      }
      else{
        this.authStatusSub.next(null);
        console.log('User is logged out');
      }
    })
  }


  async signIn(email: string, password: string){

    try {
      const res = await this.fireAuth.signInWithEmailAndPassword(email, password);
      return console.log('Logged in');
    } catch (err) {
      return console.log(err);
    }


      }


  signOut(){
    return this.fireAuth.signOut();
  }
}
