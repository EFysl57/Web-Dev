import { Injectable } from "@angular/core";
import { Product } from "../../models/product.model";
import { Category } from "../../models/category.model";



@Injectable({ providedIn: 'root'})
export class ProductService {
    categories: Category[] = [
        {id: 1, name: 'Phones'},
        {id: 2, name: 'Laptops'},
        {id: 3, name: 'Graphic cards'},
        {id: 4, name: 'Tablets'}
        
    ];
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
            categoryId: 1,
            likes: 0,
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
            categoryId: 3,
            likes: 0,
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
            categoryId: 1,
            likes: 0
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
            categoryId: 1,
            likes: 0
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
            categoryId: 2,
            likes: 0
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
            categoryId: 2,
            likes: 0
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
            categoryId: 2,
            likes: 0
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
            categoryId: 2,
            likes: 0
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
            categoryId: 3,
            likes: 0,
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
            categoryId: 3,
            likes: 0,
        },



        {
            id: 11,
            name: 'Palit RTX 5060 Ti INFINITY 3 16GB (NE7506T019T1-GB2061S) 16 GB',
            description: 'he Palit GeForce RTX 5060 Ti Infinity 3 is a compact, triple-fan graphics card based on the Blackwell architecture (GB206) with 16GB of GDDR7 memory and a 128-bit bus. Released in April 2025, it is designed for 1080p/1440p gaming and SFF (Small Form Factor) builds. It features a 2407 MHz base clock, 2572 MHz boost clock, 180W TDP, and uses a single 8-pin connector.',
            price: 335900,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pf2/p0b/37066117.jpg?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/palit-rtx-5060-ti-infinity-3-16gb-ne7506t019t1-gb2061s-16-gb-138216471/?c=750000000',
            categoryId: 3,
            likes: 0,
        },
        {
            id: 12,
            name: 'MSI RTX 5070 Ti 16G SHADOW 3X OC 16GB',
            description: 'The MSI RTX 5070 Ti 16G SHADOW 3X OC is an enthusiast-level graphics card based on the NVIDIA Blackwell architecture, featuring 16GB GDDR7 memory, 28 Gbps speed, and a 256-bit bus. It utilizes a triple-fan "Shadow" design with TORX Fan 5.0 and a nickel-plated baseplate, measuring 303mm in length. It offers 2482 MHz (Boost) to 2497 MHz (Extreme) speeds, PCIe 5.0, and requires a 16-pin connector.',
            price: 593547,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/p26/34378357.png?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/msi-rtx-5070-ti-16g-shadow-3x-oc-16-gb-137472756/?c=750000000',
            categoryId: 3,
            likes: 0,
        },
        {
            id: 13,
            name: 'ASUS Vivobook 15 15.6" / 24 GB / SSD 1000 GB / Win 11 Pro / X1504ZA-BQ1105ZW / 90NB1022-MZW1M0',
            description: 'The ASUS Vivobook 15 (2024/2025 models, such as X1504/X1502) is a 15.6-inch laptop often configured with 24GB DDR4/DDR5 RAM and a 1TB PCIe NVMe SSD, optimized for heavy multitasking and fast storage. It typically features an Intel Core i7-1355U or i5-1235U/120U processor, a 15.6" Full HD (1920x1080) IPS-level display (sometimes touchscreen), Intel Iris Xe graphics, Wi-Fi 6, and Windows 11.',
            price: 398997,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h98/85775243247646.jpg?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-24-gb-ssd-1000-gb-win-11-pro-x1504za-bq1105zw-90nb1022-mzw1m0-118395132/?c=750000000',
            categoryId: 2,
            likes: 0,
        },
        {
            id: 14,
            name: 'Apple iPhone 13 128Gb',
            description: 'The Apple iPhone 13 (128GB) is a 2021 flagship device featuring a 6.1-inch Super Retina XDR OLED display, A15 Bionic chip, and a dual 12MP camera system (Wide/Ultra Wide) with Sensor-Shift stabilization. It supports 5G, Ceramic Shield front cover, IP68 water resistance, and MagSafe charging.',
            price: 365000,
            rating: 4.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
            categoryId: 1,
            likes: 0,
        },
        {
            id: 15,
            name: 'Xiaomi Redmi Note 14 Pro 8 ГБ/256 GB',
            description: 'Купить xiaomi redmi note 14 pro 8/256gb ночной черный в ...The Xiaomi Redmi Note 14 Pro (often featuring 8GB RAM and 256GB storage) is a 2025 mid-range smartphone highlighting a 200MP OIS camera, MediaTek Dimensity 7300 Ultra chipset, and a 5500mAh battery with 45W charging. It features a 6.67" 1.5K 120Hz AMOLED display, IP68 water resistance, and Gorilla Glass Victus 2, focusing on durability and AI-enhanced photography',
            price: 159498,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000',
            categoryId: 1,
            likes: 0,
        },

        {
            id: 16,
            name: 'Apple iPad A16 11 2025 Wi-Fi 6 GB/128 GB',
            description: 'The 2025 11-inch iPad (11th gen/A16) features an A16 Bionic chip, Liquid Retina display (2360x1640), and 128GB base storage. Released in March 2025, it includes a 12MP landscape camera, USB-C, Wi-Fi 6, and supports Apple Pencil (USB-C/1st gen). Designed for education and productivity, it offers all-day battery life, 6GB RAM, and runs iPadOS 18.',
            price: 203033,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
            categoryId: 4,
            likes: 0,
        },

        {
            id: 17,
            name: 'Xiaomi Redmi Pad 2 8 GB/256 GB',
            description: 'The Xiaomi Redmi Pad 2 is a budget-friendly 11-inch tablet (released June 2025) featuring a 2.5K 90Hz display, MediaTek Helio G100-Ultra chipset, and a 9000mAh battery. It offers a metal unibody design, quad speakers with Dolby Atmos, and supports Active Pen input. It runs on Android 15 with HyperOS 2.',
            price: 107372,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p63/p41/46204511.png?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000',
            categoryId: 4,
            likes: 0,
        },
        {
            id: 18,
            name: 'Huawei MatePad 11,5 S 2026 Papermatte',
            description: 'The 2026 Huawei MatePad 11.5 S PaperMatte Edition is a premium 11.5-inch tablet featuring an advanced 2.8K 144Hz FullView display with 99% light interference reduction for a, paper-like, glare-free, and eye-friendly experience. It boasts 12GB RAM, 8800 mAh battery, 40W charging.',
            price: 259890,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p9a/p34/96173123.jpg?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-s-2026-papermatte-podarok-11-5-djuim-12-gb-256-gb-zelenyi-154784583/?c=750000000',
            categoryId: 4,
            likes: 0,
        },
        {
            id: 19,
            name: 'Samsung Galaxy Tab A9 LTE 4 GB/64 GB',
            description: 'The Samsung Galaxy Tab A9 LTE (released Oct 2023) is a compact 8.7-inch budget tablet (800 x 1340 LCD) with 4G cellular connectivity, featuring a sleek, metal-body design, 5100 mAh battery, and Dual Speakers with Dolby Atmos. It is powered by a MediaTek Helio G99 chipset with 4GB/8GB RAM and 64GB/128GB storage.',
            price: 113590,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/84176279076894.jpg?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-sinii-113806822/?c=750000000',
            categoryId: 4,
            likes: 0,
        },


        {
            id: 20,
            name: 'Apple iPad Air 11 2025 Wi-Fi 8 GB/128 GB',
            description: 'The 11-inch iPad Air (2024/2025 M3 model) is a powerful, portable tablet featuring a 10.86-inch Liquid Retina display, the Apple M3 chip, and support for Apple Pencil Pro. Designed for Apple Intelligence, it offers 8GB RAM, 12MP cameras, Wi-Fi 6E, and Touch ID in a 6.1mm thin, 462g aluminum body.',
            price: 322681,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=gallery-medium',
            images: [],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-fioletovyi-138202498/?c=750000000',
            categoryId: 4,
            likes: 0,
        }
    ];

    getCategories(): Category[] {
        return this.categories;
    }

    getProductsByCategory(categoryId: number): Product[] {
        return this.products.filter(p => p.categoryId === categoryId)
    }

};

