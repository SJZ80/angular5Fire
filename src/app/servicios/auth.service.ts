import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase'
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(

    public afAuth: AngularFireAuth,
    public ruta: Router

  ) { }

  registerUser(email: string, pass: string): Promise<auth.UserCredential> {

    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
  
  }

  logout() {

    console.log("En el logout");
    
    return this.afAuth.auth.signOut()

  }

  loginEmail(email, pass) {
    
    console.log('desde la funcion del servicio ',email,pass);
    
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass)

  }

  getUserState( ){

    return this.afAuth.authState
    
  }

  IsemailVerified(userCredential: auth.UserCredential): boolean{
   
    console.log('entro a la funcion IsemailVerified',userCredential.user.emailVerified);
    
    return userCredential.user.emailVerified

  }
 sendEmailVerified = (userCredential: auth.UserCredential)=>
  // sendEmailVerified(userCredential: auth.UserCredential)
  {

    console.log('entre ',userCredential.user.emailVerified);
    console.log('entre ',userCredential);
    const user = userCredential.user;
       
    if (this.IsemailVerified(userCredential)) return
    return new Promise((resolve,reject)=>{
    
            user.sendEmailVerification()
                .then(()=>{console.log('enviado')
          
                  resolve(true)

                })
                .catch(()=>{console.log('no enviado')
                
                  reject(false)
          
                })
    })
  }
  
  loginProvider(provider: string):Promise<auth.UserCredential>{

    console.log('ProviderService',provider);
    
    let instanciaprovider;

    switch (provider) {
      case 'face':
          instanciaprovider = new auth.FacebookAuthProvider()
          return this.afAuth.auth.signInWithPopup(instanciaprovider)
       
      case 'twit':
        instanciaprovider = new auth.TwitterAuthProvider()
        return this.afAuth.auth.signInWithPopup(instanciaprovider)
        
      case 'goog':
        instanciaprovider = new auth.GoogleAuthProvider()
        return this.afAuth.auth.signInWithPopup(instanciaprovider)
      default:
        return
        break;

    } 

  }

}


  