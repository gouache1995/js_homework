var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function() {
        let zagalna_sum = 0;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].includes('грн')) {
                zagalna_sum += parseInt(this[key]);
            }
        }
        return zagalna_sum + " грн";
    },

    minPrice: function() {
        let minimal = Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].includes('грн')) {
                let price = parseInt(this[key]);
                if (price < minimal) {
                    minimal = price;
                }
            }
        }
        return minimal + " грн";
    },

    maxPrice: function() {
        let maximum = 0;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].includes('грн')) {
                let price = parseInt(this[key]);
                if (price > maximum) {
                    maximum = price;
                }
            }
        }
        return maximum + " грн";
    }
};

services['Розбити скло'] = "200 грн";
services['Стрижка + гоління'] = "135 грн";
services['Повний пул послуг'] = "1000 грн";

console.log("Загальна вартість: " + services.price());
console.log("Мінімальна ціна: " + services.minPrice());
console.log("Максимальна ціна: " + services.maxPrice());

