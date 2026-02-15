import { Component, signal } from '@angular/core';
import { Product } from './product.model';
import { NgFor, DecimalPipe } from '@angular/common';
@Component ({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product.list.component.html',
    styleUrls: ['./product.list.component.css'],
    imports: [NgFor, DecimalPipe]
})

export class ProductListComponent {
    products: Product[] = [
        {
            id: 1,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        },
        {
            id: 2,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        },
        {
            id: 3,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        },
        {
            id: 4,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        },
        {
            id: 5,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        },
        {
            id: 6,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        },
        {
            id: 7,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        },
        {
            id: 8,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        },
        {
            id: 9,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        },
        {
            id: 10,
            name: 'IPhone 17 Pro 256Gb',
            description: 'The iPhone 17 (released Sept 2025) features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, powered by the A19 chip and 8GB RAM for enhanced Apple Intelligence. It boasts a 48MP Dual Fusion camera system, a 24MP front camera, 256GB base storage, and Wi-Fi 7',
            price: 819990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
        }
    ];
    activeImageIndex: Record<number, number> = {};


    constructor() {
        this.products.forEach(p => {
            this.activeImageIndex[p.id] = 0;
        })
    }
    setActiveImage(productId: number, index: number) {
        this.activeImageIndex[productId] = index;
    }

    getWhatsAppLink(product: Product) {
        const text = `Check out this product: ${product.link}`;
        return `https://wa.me/?text=${encodeURIComponent(text)}`;
    }

    getTelegramLink(product: Product) {
        return `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    }
}
