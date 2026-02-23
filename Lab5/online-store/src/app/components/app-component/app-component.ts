import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent {
  categories : Category[] = [];
  selectedCategory: Category | null = null;
  products: Product[] = [];


  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    
  }


  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.products = this.productService.getProductsByCategory(category.id);
  }


  handleProductDeleted(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }


}
