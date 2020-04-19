import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean

  constructor(public estadoLogin: AuthService) {
   
   }

  ngOnInit() {

    this.estadoLogin.getUserState().subscribe((estado: firebase.User)=>{
      
      if (estado) {
        return this.isLogin = true;
      }
      return this.isLogin = false;
    })

  }

}
