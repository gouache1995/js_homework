let obj = {
    name: "Andriy",
    age: 28,
    city: "Kiev",

    getInfo: function() {
        for (let infa in this) {
            if (typeof this[infa] !== 'function') {
                console.log(this[infa]);
            }
        }
    }
};

obj.getInfo();

obj.newProperty = "Nove dodane";

obj.getInfo();
