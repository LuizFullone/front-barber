import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { ProfissionalComponent } from './paginas/profissional/profissional.component';
import { LoginComponent } from './paginas/login/login.component';
import { ReservaComponent } from './paginas/reserva/reserva.component'
import { HomeComponent } from './paginas/home/home.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: 'cliente', component: ClienteComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'profissional', component: ProfissionalComponent },
    { path: 'reserva', component: ReservaComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);