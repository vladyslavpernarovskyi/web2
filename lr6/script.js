function runWithLoader() {
    const loader = document.getElementById('loader');
    const result = document.getElementById('result');

    loader.style.display = 'block';
    result.textContent = ''; 

    const simulatedPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Дані успішно завантажено!');
        }, 2000); 
    });

    simulatedPromise
        .then((data) => {
            result.textContent = data; 
        })
        .catch((error) => {
            result.textContent = error; 
        })
        .finally(() => {
            loader.style.display = 'none';
        });
}

function task1() {
    const loader = document.getElementById('loader');
    const result = document.getElementById('result');

    loader.style.display = 'block';
    result.textContent = ''; 

    const myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, World!');
        }, 2000);
    });

    myPromise
        .then((message) => {
            result.textContent = message; 
        })
        .catch((error) => {
            result.textContent = `Помилка: ${error}`; 
        })
        .finally(() => {
            loader.style.display = 'none';
        });
}

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve("Число більше 10");
            } else {
                reject("Число менше або дорівнює 10");
            }
        }, 2000); 
    });
}

function handleCheckNumber(num) {
    const loader = document.getElementById('loader');
    const result = document.getElementById('result');

    loader.style.display = 'block';
    result.textContent = ''; 

    checkNumber(num)
        .then((message) => {
            result.textContent = message; 
        })
        .catch((error) => {
            result.textContent = `Помилка: ${error}`; 
        })
        .finally(() => {
            loader.style.display = 'none';
        });
}

function randomNumber() {
    return new Promise((resolve) => {
        const randomTime = Math.floor(Math.random() * 2000) + 1000;

        const randomNum = Math.floor(Math.random() * 100) + 1;

        setTimeout(() => {
            resolve({ number: randomNum, time: randomTime });
        }, randomTime);
    });
}

function runRandomNumber() {
    const loader = document.getElementById('loader');
    const result = document.getElementById('result');

    loader.style.display = 'block';
    result.textContent = ''; 

    randomNumber()
        .then((data) => {
            result.textContent = `Випадкове число: ${data.number}, Час виконання: ${data.time} мс`;
        })
        .catch((error) => {
            result.textContent = `Помилка: ${error}`;
        })
        .finally(() => {
            loader.style.display = 'none';
        });
}
