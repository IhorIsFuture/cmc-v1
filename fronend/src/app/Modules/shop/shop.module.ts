import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [
    { path: 'shop', component: ShopComponent},
    { path: 'shop/product', component: ProductComponent},
];

@NgModule({
  declarations: [ShopComponent, ProductComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ShopModule { }

