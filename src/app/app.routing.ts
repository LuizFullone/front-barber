import { Routes, RouterModule } from '@angular/router';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { ProfissionalComponent } from './paginas/profissional/profissional.component';
import { LoginComponent } from './paginas/login/login.component';
import { ReservaComponent } from './paginas/reserva/reserva.component'
import { HomeComponent } from './paginas/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuarda } from './guarda/auth-guarda';

const APP_ROUTES: Routes = [
    { path: 'cliente',
      component: ClienteComponent,
      canActivate: [AuthGuarda]
    },
    { path: 'servicos',
      component: ServicosComponent,
      canActivate: [AuthGuarda]
    },
    { path: 'profissional',
      component: ProfissionalComponent,
      canActivate: [AuthGuarda]
    },
    { path: 'reserva',
      component: ReservaComponent,
      canActivate: [AuthGuarda]
    },
    { path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuarda]
    },
    { path: '',
      component: LoginComponent
    },
    { path: 'login',
      component: LoginComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);