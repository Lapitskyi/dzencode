export const orders = [
    {
        id: 1,
        title: 'Order 1',
        date: '2023-02-01 09:00:00',
        description: 'Monitors (2 items)',
        get products() {
            return products.filter(p => p.order === 1);
        }
    },
    {
        id: 2,
        title: 'Order 2',
        date: '2023-03-01 09:00:00',
        description: 'Laptops (2 items)',
        get products() {
            return products.filter(p => p.order === 2);
        }
    },
    {
        id: 3,
        title: 'Order 3',
        date: '2023-04-01 10:00:00',
        description: 'PC and Keyboard (2 items)',
        get products() {
            return products.filter(p => p.order === 3);
        }
    },
    {
        id: 4,
        title: 'Order 4',
        date: '2023-05-05 09:00:00',
        description: 'Mouse and Headphones (2 items)',
        get products() {
            return products.filter(p => p.order === 4);
        }
    },
    {
        id: 5,
        title: 'Order 5',
        date: '2023-07-01 10:00:00',
        description: 'Tablet and Smartphone (2 items)',
        get products() {
            return products.filter(p => p.order === 5);
        }
    }
]

export const products = [
    {
        id: 1,
        serialNumber: 1111,
        isNew: 1,
        photo: 'monitor1.jpg',
        title: 'Samsung 24" Monitor',
        type: 'Monitor',
        specification: 'Full HD, HDMI, 75Hz',
        guarantee: {start: '2023-01-01 10:00:00', end: '2025-01-01 10:00:00'},
        price: [
            {value: 180, symbol: 'USD', isDefault: 0},
            {value: 7200, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2023-02-01 09:00:00'
    },
    {
        id: 2,
        serialNumber: 1112,
        isNew: 0,
        photo: 'monitor2.jpg',
        title: 'LG UltraGear 27" Monitor',
        type: 'Monitor',
        specification: '2K, 144Hz, IPS',
        guarantee: {start: '2023-02-01 10:00:00', end: '2025-02-01 10:00:00'},
        price: [
            {value: 320, symbol: 'USD', isDefault: 0},
            {value: 12800, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2023-02-01 09:00:00'
    },
    {
        id: 3,
        serialNumber: 1113,
        isNew: 1,
        photo: 'laptop1.jpg',
        title: 'Lenovo IdeaPad 3 Laptop',
        type: 'Laptop',
        specification: 'Ryzen 5, 16GB RAM, 512GB SSD',
        guarantee: {start: '2023-03-01 09:00:00', end: '2025-03-01 09:00:00'},
        price: [
            {value: 750, symbol: 'USD', isDefault: 0},
            {value: 30000, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2023-03-01 09:00:00'
    },
    {
        id: 4,
        serialNumber: 1114,
        isNew: 1,
        photo: 'laptop2.jpg',
        title: 'HP Pavilion 15 Laptop',
        type: 'Laptop',
        specification: 'Intel i5, 8GB RAM, 512GB SSD',
        guarantee: {start: '2023-03-02 09:00:00', end: '2025-03-02 09:00:00'},
        price: [
            {value: 880, symbol: 'USD', isDefault: 0},
            {value: 35200, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2023-03-02 09:00:00'
    },
    {
        id: 5,
        serialNumber: 1115,
        isNew: 1,
        photo: 'pc1.jpg',
        title: 'ASUS ROG Strix Desktop PC',
        type: 'Desktop PC',
        specification: 'Intel i7, RTX 3070, 32GB RAM',
        guarantee: {start: '2023-04-01 10:00:00', end: '2025-04-01 10:00:00'},
        price: [
            {value: 1900, symbol: 'USD', isDefault: 0},
            {value: 76000, symbol: 'UAH', isDefault: 1}
        ],
        order: 3,
        date: '2023-04-01 10:00:00'
    },
    {
        id: 6,
        serialNumber: 1116,
        isNew: 0,
        photo: 'keyboard1.jpg',
        title: 'Logitech G213 Keyboard',
        type: 'Keyboard',
        specification: 'Membrane, RGB Backlight',
        guarantee: {start: '2023-05-01 11:00:00', end: '2025-05-01 11:00:00'},
        price: [
            {value: 70, symbol: 'USD', isDefault: 0},
            {value: 2800, symbol: 'UAH', isDefault: 1}
        ],
        order: 3,
        date: '2023-05-01 11:00:00'
    },
    {
        id: 7,
        serialNumber: 1117,
        isNew: 1,
        photo: 'mouse1.jpg',
        title: 'Razer DeathAdder V2 Mouse',
        type: 'Mouse',
        specification: '20K DPI, RGB',
        guarantee: {start: '2023-05-05 09:00:00', end: '2025-05-05 09:00:00'},
        price: [
            {value: 85, symbol: 'USD', isDefault: 0},
            {value: 3400, symbol: 'UAH', isDefault: 1}
        ],
        order: 4,
        date: '2023-05-05 09:00:00'
    },
    {
        id: 8,
        serialNumber: 1118,
        isNew: 0,
        photo: 'headphones1.jpg',
        title: 'Sony WH-1000XM5 Headphones',
        type: 'Headphones',
        specification: 'Bluetooth, Noise Cancelling',
        guarantee: {start: '2023-06-01 10:00:00', end: '2025-06-01 10:00:00'},
        price: [
            {value: 400, symbol: 'USD', isDefault: 0},
            {value: 16000, symbol: 'UAH', isDefault: 1}
        ],
        order: 4,
        date: '2023-06-01 10:00:00'
    },
    {
        id: 9,
        serialNumber: 1119,
        isNew: 1,
        photo: 'tablet1.jpg',
        title: 'Apple iPad 10.2" Tablet',
        type: 'Tablet',
        specification: 'A14 Bionic, Wi-Fi, 64GB',
        guarantee: {start: '2023-07-01 10:00:00', end: '2025-07-01 10:00:00'},
        price: [
            {value: 500, symbol: 'USD', isDefault: 0},
            {value: 20000, symbol: 'UAH', isDefault: 1}
        ],
        order: 5,
        date: '2023-07-01 10:00:00'
    },
    {
        id: 10,
        serialNumber: 1120,
        isNew: 1,
        photo: 'smartphone1.jpg',
        title: 'Samsung Galaxy S23 Smartphone',
        type: 'Smartphone',
        specification: '8GB RAM, 256GB, Snapdragon 8 Gen 2',
        guarantee: {start: '2023-08-01 10:00:00', end: '2025-08-01 10:00:00'},
        price: [
            {value: 1100, symbol: 'USD', isDefault: 0},
            {value: 44000, symbol: 'UAH', isDefault: 1}
        ],
        order: 5,
        date: '2023-08-01 10:00:00'
    }
]
