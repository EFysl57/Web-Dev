import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../../models/product.model'
import { NgFor, DecimalPipe, NgIf } from '@angular/common';
import { ProductItemComponent } from '../product-item.component/product-item.component';
@Component ({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    imports: [NgFor, NgIf, ProductItemComponent]
})

export class ProductListComponent {
    @Input() products: Product[] = [];
    @Output() productDeleted = new EventEmitter<number>();

    deleteProduct(productId: number) {
        this.productDeleted.emit(productId);
    }


}
