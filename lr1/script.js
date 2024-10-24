let buttons = document.getElementsByClassName('btn');

buttons[0].addEventListener('click', function() {
    alert('Hello, world!')
})

buttons[1].addEventListener('mouseover', function() {
    document.write('<p>Hello, world!</p>')
})

buttons[2].addEventListener('click', function() {
    let userConfirmed = confirm("Hello?");
    
    if (userConfirmed) {
        document.write("Hello, world!");
    }
})

buttons[3].addEventListener('click', function() {
    let userText = prompt('Write some text');
    if (userText != '' && userText != null) {
        alert(userText);
    }
})

buttons[4].addEventListener('mouseover', function() {
    let userText = prompt('Write some text');
    if (userText != '' && userText != null) {
        alert(userText);
    }
})

buttons[5].addEventListener('click', function() {
    let firstNum = Number(prompt('Write first number'));
    let secondNum = Number(prompt('Write second number'));
    if (firstNum != '' && secondNum != '') {
        alert(firstNum+secondNum);
    }
})

buttons[6].addEventListener('click', function() {
    let firstNum = Number(prompt('Write first number'));
    let secondNum = Number(prompt('Write second number'));
    if (firstNum != '' && secondNum != '') {
        if (firstNum > secondNum){
            alert(firstNum);
        } else if (secondNum > firstNum) {
            alert(secondNum);
        } else {
            alert('Числа рівні');
        }
    }
})

buttons[7].addEventListener('click', function() {
    let num = prompt('Введіть номер місяця');
    if (num != '' && num != '') {
        if(num > 12 || num < 1) {
            alert('Введено невірне число');
        } else if (num > 2 && num < 6) {
            alert('Весна');
        } else if(num > 5 && num < 9) {
            alert('Літо');
        } else if(num > 8 && num < 12) {
            alert('Осінь');
        } else {
            alert('Зима');
        }
    }
})

buttons[8].addEventListener('click', function() {
    let userConfirmed = confirm("Hello");
    
    if (userConfirmed) {
        alert("ОК");
    } else {
        alert("Скасувати");
    }
})

buttons[9].addEventListener('click', function() {
    let num = prompt('Введіть кількість студентів');
    let students = [];
    num++;
    if (num != '' && num != '') {
        for(let i=1; i<num; i++) {
            let student = prompt('Введіть прізвище студента');
            students.push(student)

            let p = document.createElement('p');
            p.textContent = student
            document.body.appendChild(p);
        }
    }
    document.getElementById("nav-menu").style.display = "none";
})