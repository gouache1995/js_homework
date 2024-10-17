function lichilnik(count) {
    let parne = 0;
    let niparne = 0;

    for (let i = 0; i < count; i++) {
        // Генеруємо випадкове число від 100 до 1000 включно
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        // Перевіряємо, чи є число парним
        if (randomNumber % 2 === 0) {
            parne++; // Якщо парне, збільшуємо лічильник парних чисел
        } else {
            niparne++;  // Якщо непарне, збільшуємо лічильник непарних чисел
        }
    }

    // Обчислюємо відсоткове співвідношення
    let variant = (parne / count) * 100;
    let variant1 = (niparne / count) * 100;

    console.log("Відповідь: Кількість згенерованих чисел: " + count);
    console.log("Відповідь: Парних чисел: " + parne);
    console.log("Відповідь: Непарних чисел: " + niparne);
    console.log("Відповідь: Відсоток парних: " + variant.toFixed(2) + "%");
    console.log("Відповідь: Відсоток непарних: " + variant1.toFixed(2) + "%");
}

lichilnik(1000);
