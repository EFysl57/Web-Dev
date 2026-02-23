import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model'
import { DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();




  likeProduct() {
    this.product.likes++;
  }


  deleteProduct() {
    if(confirm(`Delete ${this.product.name}?`)) {
      this.delete.emit(this.product.id);
    }
  }




  getWhatsAppLink() {
        const text = `Check out this product: ${this.product.link}`;
        return `https://wa.me/?text=${encodeURIComponent(text)}`;
    }

  getTelegramLink() {
        return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    }
}
