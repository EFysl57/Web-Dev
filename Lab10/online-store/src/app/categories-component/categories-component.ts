import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../components/services/product.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './categories-component.html',
  styleUrl: './categories-component.css',
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private api: ProductService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.api.getCategories().subscribe(data => {
      this.categories = data;
      this.cd.detectChanges();
    });
  }


}
