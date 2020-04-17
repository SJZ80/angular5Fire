import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(

    private authService: AuthService,
    private ruta : Router
    
  )
   { }

  ngOnInit() {

    this.authService.getUserState().subscribe((estado)=>{
      
      if (estado) return console.log("Usuario SingIn", estado);
      return console.log("Usuario no logueado");
    })
  }

  onSubmitAddUser(email:string,password:string){

    this.authService.registerUser(email,password)
                    .then((userCredential)=>{
                      console.log('Usuario Registrado',userCredential)
                      this.ruta.navigate(['privado'])                  
                    })
                    .catch((err)=>{console.log('Usuario No Registrado',err)})

  }




}
