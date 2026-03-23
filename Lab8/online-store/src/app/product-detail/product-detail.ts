import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../components/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
product: any;

  constructor(private route: ActivatedRoute, private api: ProductService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getProduct(Number(id)).subscribe(data => {
      this.product = data;
      this.cd.detectChanges();
    });
  }
}
