const SERVER_API = 'http://10.67.184.89:8080/';

class Api {
    getUrlValues(url) {
        let body = new FormData();
        body.append('url', url);
        return new Promise((resolve, reject) => {
            fetch(SERVER_API, {
                body,
                method: 'POST'
            })
                .then(data => data.text())
                .then(data => resolve(JSON.parse(data)))
                .catch(data => reject(data));
        });
    }
}

export default new Api();