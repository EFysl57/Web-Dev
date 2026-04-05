import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../../products-component/products-component';
import { ProductDetail } from '../../product-detail/product-detail';
import { CategoriesComponent } from '../../categories-component/categories-component';
import { CategoryProductComponent } from '../../category-product-component/category-product-component';


export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetail },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: CategoryProductComponent },
];

