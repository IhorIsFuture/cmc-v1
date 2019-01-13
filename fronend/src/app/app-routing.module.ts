import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './Components/gallary/gallary.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'gallary', component: GallaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
