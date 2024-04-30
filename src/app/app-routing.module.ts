import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'cuestionario', component: CuestionarioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landing-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
