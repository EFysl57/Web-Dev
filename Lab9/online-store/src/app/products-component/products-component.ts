import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductService } from '../components/services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent {

  products: any[] = [];

  constructor(private api: ProductService, private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit() {

    this.route.params.subscribe(() => {
      this.loadData();
    })


  }

  loadData() {
      this.api.getProducts().subscribe(data => {
        this.products = data;
        this.cd.detectChanges();
    });
  }


}