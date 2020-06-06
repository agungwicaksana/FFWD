class KategoriMeals {
    static getKMeals(kategori) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${kategori}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`Terjadi kesalahan`);
                }
            })
    }
}

export default KategoriMeals;