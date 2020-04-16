import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PrivadoPageComponent } from './components/privado-page/privado-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';


const routes: Routes = [

  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'home', component: HomePageComponent},
  {path:'privado', component: PrivadoPageComponent},
  {path:'**', component: NotFoundPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
