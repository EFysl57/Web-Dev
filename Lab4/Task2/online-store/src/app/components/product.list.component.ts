import { Component, signal } from '@angular/core';
import { Product } from '../models/product.model';
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
            name: 'Palit GeForce RTX 5070 Infinity 3 (NE75070019K9-GB2050S) 12 GB',
            description: 'A new era of small form factor power: Infinity 3 series small form factor builds are gaining popularity for good reason. They save space, eliminate unnecessary components, and provide greater portability. The Palit GeForce RTX™ 5070 Infinity 3 series graphics cards are designed with this goal in mind—delivering the power of a high-performance GPU in a form factor suitable for compact PC cases.',
            price: 412950,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pd3/pe8/58359334.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7f/pe8/58359337.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p46/pe8/58359339.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5070-infinity-3-ne75070019k9-gb2050s-12-gb-144023378/?c=750000000',
        },
        {
            id: 3,
            name: 'Samsung Galaxy Z Fold6 5G 12 GB/256 GB blue',
            description: 'The Samsung Galaxy Z Fold6 5G is a lighter, slimmer foldable featuring a 7.6-inch main screen and a 6.3-inch cover display, both with 120Hz refresh rates and 2,600 nits peak brightness. Powered by the Snapdragon 8 Gen 3 for Galaxy, it boasts 12GB of RAM, up to 1TB storage, and integrates AI features for productivity. Key specs include a 50MP triple camera system and a 4,400mAh battery. ',
            price: 849190,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/hcc/86559721193502.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p34/p47/1336656.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p50/p47/1336657.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p47/1336658.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold6-5g-12-gb-256-gb-sinii-121551740/?c=750000000',
        },
        {
            id: 4,
            name: 'Samsung Galaxy S25 Ultra 5G 12 GB/1024 GB grey',
            description: 'The Samsung Galaxy S25 Ultra (12GB RAM/1TB Storage) is a flagship 5G smartphone launched in Feb 2025, featuring a 6.9-inch 120Hz AMOLED 2X display with Gorilla Glass Armor 2. Driven by the Snapdragon 8 Elite processor, it includes a 200MP main camera, 50MP ultra-wide/telephoto lenses, a 5000mAh battery, S Pen support, and integrated Galaxy AI features. ',
            price: 848532,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pd8/pc8/20118459.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p44/pcb/20118460.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7c/pcb/20118462.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-1024-gb-seryi-133434808/?c=750000000',
        },
        {
            id: 5,
            name: 'Apple MacBook Air 13 2020 13.3" / 8 GB / SSD 256 GB',
            description: 'The first chip designed specifically for the Mac, the Apple M1 system-on-a-chip packs an astonishing 16 billion transistors and integrates the CPU, GPU, Neural Engine, I/O controllers, and numerous other components. The Apple M1 chip enables unique technologies in the Mac and delivers incredible performance with industry-leading power efficiency.',
            price: 419900,
            rating: 4.3,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
        },
        {
            id: 6,
            name: 'Lenovo IdeaPad 3 15.6" / 8 GB / SSD 256 GB / DOS / 15IGL05 / 81WQ00ERRK',
            description: 'The IdeaPad 3 laptop operates quieter and cooler thanks to an optimized mechanical airflow system and intelligent ventilation that prevents the mixing of cold and warm air. Cooling is managed by Q Control, which offers three fan speed modes based on performance requirements.',
            price: 166990,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he0/he8/64231929446430.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
        },
        {
            id: 7,
            name: 'Huawei MateBook D16 16" / 16 GB / SSD 512 GB / Win 11 Home / MitchellF-W5651',
            description: "The HUAWEI MateBook D16 laptop is equipped with a six-core Intel Core i5-12450H processor with a maximum clock speed of 4.4 GHz. 16 GB of LPDDR4X RAM ensures the device's performance. This is sufficient for simple games, work, and school. A 512 GB solid-state drive ensures fast loading of the operating system, applications, and storage.",
            price: 388975,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hb7/84935102955550.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h01/h0b/84935103021086.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h20/ha3/84935103086622.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h8b/84935103348766.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/huawei-matebook-d16-16-16-gb-ssd-512-gb-win-11-home-mitchellf-w5651-115943515/?c=750000000',
        },
        {
            id: 8,
            name: 'Apple MacBook Air 13 2022 13.6" / 16 GB / SSD 256 GB',
            description: "Introducing the Apple MacBook Air 13 (2022)—an Ultrabook that combines high performance, sleek design, and durability. Featuring an Apple M2 processor and 16GB of RAM, it's ideal for work and play.",
            price: 458990,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p98/p35/16711031.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7c/p35/16711032.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p60/p35/16711033.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000',
        },
        {
            id: 9,
            name: 'ZOTAC GAMING GeForce RTX 5060 Twin Edge ZT-B50600E-10M 8 GB',
            description: 'The ZOTAC GAMING GeForce RTX 5060 Twin Edge is a compact graphics card based on the cutting-edge NVIDIA Blackwell architecture, with DLSS4 support and 8GB of GDDR7 memory. With a robust cooling system, the Twin Edge is ready to handle the latest games, delivering smooth frame rates and high performance.',
            price: 208000,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pee/pf7/54408622.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p42/pf8/54408625.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7b/pf8/54408627.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb3/pf8/54408629.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/zotac-gaming-geforce-rtx-5060-twin-edge-zt-b50600e-10m-8-gb-142896191/?c=750000000',
        },
        {
            id: 10,
            name: 'ASUS RTX 5070 TUF Gaming OC Edition TUF-RTX5070-O12G-GAMING 12 GB',
            description: 'The ASUS TUF Gaming GeForce RTX 5070 OC Edition (TUF-RTX5070-O12G-GAMING) is a high-performance graphics card featuring NVIDIA’s Blackwell architecture, 12GB of fast GDDR7 memory, and 5th-gen Tensor Cores for enhanced AI performance. It features a robust 3.125-slot cooler with Axial-tech fans, military-grade components, and a vented backplate for superior durability and cooling.',
            price: 495212,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p5e/pf0/32579076.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p7a/pf0/32579077.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p96/pf0/32579078.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p1f/pf3/32579080.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/asus-rtx-5070-tuf-gaming-oc-edition-tuf-rtx5070-o12g-gaming-12-gb-137012034/?c=750000000',
        }
    ];
    activeImage: Record<number, string> = {};

    constructor() {
        this.products.forEach((p) => {
            this.activeImage[p.id] = p.image;
        })
    }
    setActiveImage(productId: number, imgURL: string) {
        this.activeImage[productId] = imgURL;
    }

    getWhatsAppLink(product: Product) {
        const text = `Check out this product: ${product.link}`;
        return `https://wa.me/?text=${encodeURIComponent(text)}`;
    }

    getTelegramLink(product: Product) {
        return `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    }
}
