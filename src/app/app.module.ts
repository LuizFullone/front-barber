import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { ReservaComponent } from './paginas/reserva/reserva.component';
import { ProfissionalComponent } from './paginas/profissional/profissional.component';
import { LoginComponent } from './paginas/login/login.component';
import { BarberService } from './services/barber.service';
import { DialogsModule } from './dialogs/dialogs.module';
import { AuthService } from './auth/auth.service';

import { routing } from './app.routing';
import { HomeComponent } from './paginas/home/home.component';
import { GrowlModule } from 'primeng/growl';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {TableModule} from 'primeng/table';
import { AuthGuarda } from './guarda/auth-guarda';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServicosComponent,
    ClienteComponent,
    ReservaComponent,
    ProfissionalComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    routing,
    GrowlModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    TableModule,
    DialogsModule
  ],
  providers: [BarberService, AuthService, AuthGuarda],
  bootstrap: [AppComponent]
})
export class AppModule { }
