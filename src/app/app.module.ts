import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectLocationComponent } from './toolbar/select-location/select-location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LandingComponent } from './landing/landing.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CardsListComponent } from './landing/cards-list/cards-list.component';
import { BreadcrumbComponent } from './landing/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectLocationComponent,
    ToolbarComponent,
    LandingComponent,
    BreadcrumbComponent,
    CardsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
