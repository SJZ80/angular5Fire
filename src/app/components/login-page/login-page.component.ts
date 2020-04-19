import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public mensaje: string;

  constructor(
    public serviceAtuth: AuthService,
    public ruta: Router
    ) { }

  ngOnInit() {
  
  }

    onLoginWithMail(email,pass)
    {
      console.log(email,pass);
      this.serviceAtuth.loginEmail(email,pass)
                        .then((userCredential)=>{
                            console.log("Email veiricado?",this.serviceAtuth.IsemailVerified);
                            
                            if (!this.serviceAtuth.IsemailVerified(userCredential)){

                              this.mensaje = "Favor de Verificar su correo, ver su casilla de email"
                              this.serviceAtuth.logout()
                              return
                            } 
                            console.log("Usuario Loguedo ", userCredential);
                            this.ruta.navigate(['privado'])
                          })
                          .catch(err=>{console.log("Error de Login",err)})
                          
    }
                      
    onLoginProvider(event: any){
         
      this.serviceAtuth.loginProvider(event.target.value)
                        .then((userCredential)=>{
                          
                          console.log("Usuario Loguedo ", userCredential);
                          this.ruta.navigate(['privado'])
                          
                        })
                        .catch(err=>{console.log("Error de Login",err)})
    }

}
