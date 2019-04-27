class Api {
    getUrlValues(url) {
        return {
            pictures: [
                'https://s3.eu-central-1.amazonaws.com/shopier1/pictures_large/Rullywear_97c945da006e56800840079aadbc6179.jpeg',
                'https://s3.eu-central-1.amazonaws.com/shopier1/pictures_large/Rullywear_97c945da006e56800840079aadbc6179.jpeg'
            ],
            title: 'T-shirt',
            price: '40,00 TL'
        }
    }
}

export default new Api();