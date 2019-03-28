import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PrivateComponent } from './components/private/private.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

import { AuthGuard } from '../app/guards/auth.guard';
import { PipesComponent } from './components/pipes/pipes.component';
import { DomSecurityPipe } from './pipes/dom-security/dom-security.pipe';
import { AvanzadoAlexPipe } from './pipes/dom-security/avanzado-alex.pipe';
import { ExtraModule } from './extra/extra.module';
import { NoticiasLoadComponent } from './noticias-load/noticias-load.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NoticiasListComponent,
    NoticiasUpsertComponent,
    PrivateComponent,
    LoginComponent,
    AcercaDeComponent,
    PipesComponent,
    DomSecurityPipe,
    AvanzadoAlexPipe,
    NoticiasLoadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ExtraModule
    
  ],
  providers: [ DatePipe, AuthGuard, DomSecurityPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
