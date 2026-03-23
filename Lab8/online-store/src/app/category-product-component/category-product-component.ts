import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../components/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-product-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './category-product-component.html',
  styleUrl: './category-product-component.css',
})
export class CategoryProductComponent implements OnInit {
  
  products: any[] = [];

  constructor(private route: ActivatedRoute, private api: ProductService, private cd: ChangeDetectorRef) {}



  
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.api.getCategoryProducts(Number(id)).subscribe(data => {
      this.products = data;
      this.cd.detectChanges();
    })


  }
}
