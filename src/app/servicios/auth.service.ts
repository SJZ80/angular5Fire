import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(

    public afAuth: AngularFireAuth

  ) { }

  registerUser(email: string, pass: string): Promise<auth.UserCredential> {

    return this.afAuth.auth.createUserWithEmailAndPassword(email, email)
  
  }

  logout(): Promise<void> {

    return this.afAuth.auth.signOut()

  }

  loginEmail(email, pass) {
    
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass)

  }

  getUserState( ){

    return this.afAuth.authState
  
  }


}

