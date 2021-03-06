import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Caio Mello',
            email: 'caio.mello@hotmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Adriano Ribeiro',
            email: 'adriano.ribeiro@hotmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Nootbook Dell Phonix 1TB',
            category: 'Eletronics',
            image: '/images/p1.jpg',
            price: 3949,
            countInStock: 10,
            brand: 'Dell',
            rating: 5,
            numReviews:13,
            description: 'Produto de qualidade que oferece a melhor tecnologia e segurança ao seu trabalho.',

        },
        {
            name: 'Iphone 12 Pro Max Apple 256GB',
            category: 'Eletronics',
            image: '/images/p2.jpg',
            price: 7500,
            countInStock: 14,
            brand: 'Apple',
            rating: 5,
            numReviews:10,
            description: 'Rápido que é uma beleza, suas olhos vão adorar suas mãos também.',

        },
        {
            name: 'Fone Airpods com Estojo Apple',
            category: 'Eletronics',
            image: '/images/p3.jpg',
            price: 1299,
            countInStock: 18,
            brand: 'Apple',
            rating: 4,
            numReviews:18,
            description: 'Som de qualidade que seus ouvidos irão te agradecer.',

        },
        {
            name: 'Caixa de Som JBL com Bluetooth',
            category: 'Eletronics',
            image: '/images/p4.jpg',
            price: 2289,
            countInStock: 12,
            brand: 'JBL',
            rating: 4.5,
            numReviews:11,
            description: 'Máxima potência e qualidade você só tem com as caixas de som da JBL.',

        },
        {
            name: 'Smartwatch Relógio Inteligente',
            category: 'Eletronics',
            image: '/images/p5.jpg',
            price: 259,
            countInStock: 13,
            brand: 'HAYLOU',
            rating: 4.5,
            numReviews:19,
            description: 'Tudo em um só relógio com tecnologia avançada.',

        },
        {
            name: 'Samsung Galaxy S20 128GB',
            category: 'Eletronics',
            image: '/images/p6.jpg',
            price: 3299,
            countInStock: 8,
            brand: 'Samsung',
            rating: 4,
            numReviews:17,
            description: 'Smartphone do seu jeito.',

        },
        {  
            name: 'MacBook Air Apple Intel Core i5',
            category: 'Eletronics',
            image: '/images/p7.jpg',
            price: 5799,
            countInStock: 0,
            brand: 'Apple',
            rating: 5,
            numReviews:12,
            description: 'MacBook tem design leve e resistente e, com a bateria que dura até 12 horas, você pode fazer coisas incríveis o dia todo.',

        },
        {
            name: 'Imac Apple Intel I5 256GB',
            category: 'Eletronics',
            image: '/images/p8.jpg',
            price: 9949,
            countInStock: 11,
            brand: 'Apple',
            rating: 5,
            numReviews:10,
            description: 'O Imac tem design leve e resistente e, com a bateria que dura até 12 horas, você pode fazer coisas incríveis o dia todo.',

        },
    ],
};

export default data;