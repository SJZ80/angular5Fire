import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public estadoLogin: AuthService) { }

  ngOnInit() {
    
    this.estadoLogin.getUserState().subscribe((estado)=>{
      
      if (estado) return console.log("Usuario SingIn", estado);
      return console.log("Usuario no logueado");
    })
  }

}
