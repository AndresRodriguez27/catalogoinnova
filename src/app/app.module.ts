import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { routing } from './app.routing';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';
import { SocialComponent } from './emprendimientos/social/social.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HablemosFundacionComponent } from './emprendimientos/social/hablemos-fundacion/hablemos-fundacion.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyFooterComponent,
    EmprendimientosComponent,
    SocialComponent,
    ActualidadComponent,
    ServiciosComponent,
    HablemosFundacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
