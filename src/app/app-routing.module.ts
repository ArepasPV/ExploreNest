import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import {HotelComponent} from "./components/hotel/hotel.component";
const routes: Routes = [
  { path: 'register', component: RegistroComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'hotels', component: HotelComponent },
  { path: 'info', component: CuestionarioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
