class CariMakanan {
    static getMeal(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject('Makanan tidak ditemukan');
                }
            })
    }
}

export default CariMakanan;