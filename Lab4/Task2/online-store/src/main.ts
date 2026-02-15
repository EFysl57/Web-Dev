import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ProductListComponent } from './app/product.list.component';

@Component({
  selector: 'app-root',
  template: '<app-product-list></app-product-list>',
  standalone: true,
  imports: [ProductListComponent]
})
export class AppComponent {}

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
