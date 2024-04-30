import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { HotelComponent } from './hotel/hotel.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  //ruta default
  { path: '', component: RegistroComponent },
  //ruta hoteles
  { path: 'hoteles', component: HotelComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LandingPageComponent,
    CuestionarioComponent
    HotelComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
