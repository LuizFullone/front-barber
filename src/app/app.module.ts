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
import { routing } from './app.routing';
import { HomeComponent } from './paginas/home/home.component';
import { GrowlModule } from 'primeng/growl';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule } from '@coreui/angular';
import { TreeModule } from 'angular-tree-component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServicosComponent,
    ClienteComponent,
    ReservaComponent,
    ProfissionalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    GrowlModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    TabsModule.forRoot(),
    TreeModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }