import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GallaryComponent } from './Components/gallary/gallary.component';
import { ShopModule } from './Modules/shop/shop.module';
import { HomePageComponent } from './Components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GallaryComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
