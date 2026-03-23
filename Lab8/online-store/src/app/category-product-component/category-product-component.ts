import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../components/services/product.service';

@Component({
  selector: 'app-category-product-component',
  imports: [],
  templateUrl: './category-product-component.html',
  styleUrl: './category-product-component.css',
})
export class CategoryProductComponent implements OnInit {
  
  products: any[] = [];

  constructor(private route: ActivatedRoute, private api: ProductService) {}



  
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getCategoryProducts(Number(id)).subscribe(data => {
      this.products = data;
    })


  }
}
