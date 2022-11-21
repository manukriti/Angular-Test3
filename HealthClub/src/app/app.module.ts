import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewappointmentsComponent } from './viewappointments/viewappointments.component';
import { PlaceappointmentsComponent } from './placeappointments/placeappointments.component';
import { ContactusComponent } from './contactus/contactus.component';

const appRoutes: Routes =[	
  {path:'',redirectTo:"/Welcome",pathMatch:'full'},
  {path:'Welcome' , component:WelcomeComponent},
  {path:'ViewAppointment' , component:ViewappointmentsComponent},
  {path:'PlaceAppointment' , component:PlaceappointmentsComponent},
  {path:'ContactUs' , component:ContactusComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ViewappointmentsComponent,
    PlaceappointmentsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
