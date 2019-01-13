import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './Components/gallary/gallary.component';

const routes: Routes = [
  { path: 'gallary', component: GallaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
