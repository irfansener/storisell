class Api {
    getUrlValues(url) {
        return {
            pictures: [
                'https://s3.eu-central-1.amazonaws.com/shopier1/pictures_large/Camiseta1589_t-shirts1.jpg',
                'https://s3.eu-central-1.amazonaws.com/shopier1/pictures_large/Camiseta1356_purple-t-shirt.jpg'
            ],
            title: 'T-shirt',
            price: '40,00 TL'
        }
    }
}

export default new Api();