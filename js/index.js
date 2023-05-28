

let loginPage = document.getElementsByClassName('login');
console.log(loginPage);  

for (let i = 0; i < loginPage.length; i++) { 
    loginPage[i].addEventListener('click', function () {
        window.location.href = 'login.html'; 
    });
};

// login action 

let pageChange = document.getElementById('login'); 
pageChange.addEventListener('click', function () {
    window.location.href = 'cart.html';
});

let loginButton = document.getElementById('login'); // 
let inputEmail = document.getElementById('inputEmail'); // email selected
let password = document.getElementById('inputPassword'); // password selected 
let cPassword = document.getElementById('inputPasswordConfirm'); // confirm password selected
let notMatch = document.getElementById('notMatch'); //error selected
notMatch.style.display = 'none'; // normally display none

password.addEventListener('click', function () { 
    if (inputEmail.value != 'admin@admin.com') {
        inputEmail.style.border = '2px solid rgb(250, 54, 54)';
        alert('Write your Email');
    } else {
        inputEmail.style.border = '1px solid #dee2e6';
    }
});
cPassword.addEventListener('click', function () { 
    if (password.value != 123456 || password.value != '123456') {
        password.style.border = '2px solid rgb(250, 54, 54)';
        alert('Put On your Correct Password');
    } else {
        password.style.border = '1px solid #dee2e6';
    }
})

cPassword.addEventListener('keyup', function () { 

    if (inputEmail.value == 'admin@admin.com' && (password.value == '123456' || password.value == 123456) && (password.value == cPassword.value)) {
        loginButton.removeAttribute('disabled');
        loginButton.classList.remove('disabled');
    } else {
        loginButton.setAttribute('disabled', true);
        loginButton.classList.add('disabled');
    }
    if ((cPassword.value == 123456 || cPassword.value == '123456') !== (password.value == 123456 || password.value == '123456')) {
        notMatch.style.display = 'block';
        cPassword.style.border = '2px solid rgb(250, 54, 54)';
    } else {
        cPassword.style.border = '1px solid #dee2e6';
        notMatch.style.display = 'none';
    }
});

// cart

function calculate(plus, minus, count, cart) { 
    plus.addEventListener('click', function () {
        let value1 = count.value;
        value1 = parseInt(value1);
        let result = Number(value1) + 1;
        count.value = result;
    });
    minus.addEventListener('click', function () {
        let value1 = count.value;
        value1 = parseInt(value1);
        let result = Number(value1) - 1;
        count.value = result;
        if (count.value < 1) {
            cart.style.display = 'none';
        }
    });

}

// cart 1

let plus1 = document.getElementById('plus1'); 
let minus1 = document.getElementById('minus1'); 
let count1 = document.getElementById('count1'); 
let cart1 = document.getElementById('cart1'); 

let plus2 = document.getElementById('plus2');
let minus2 = document.getElementById('minus2');
let count2 = document.getElementById('count2');
let cart2 = document.getElementById('cart2');

let plus3 = document.getElementById('plus3');
let minus3 = document.getElementById('minus3');
let count3 = document.getElementById('count3');
let cart3 = document.getElementById('cart3');

let plus4 = document.getElementById('plus4');
let minus4 = document.getElementById('minus4');
let count4 = document.getElementById('count4');
let cart4 = document.getElementById('cart4');

calculate(plus1, minus1, count1, cart1); 
calculate(plus2, minus2, count2, cart2);
calculate(plus3, minus3, count3, cart3);
calculate(plus4, minus4, count4, cart4);

// total

let price1 = document.getElementById('price1').innerText;
let price2 = document.getElementById('price2').innerText;
let price3 = document.getElementById('price3').innerText;
let price4 = document.getElementById('price4').innerText; 

let cal = document.getElementById('sum');
cal.innerText = Number(price1) + Number(price2) + Number(price3) + Number(price4); 

let taxTex = document.getElementById('grand'); 
let taxText = taxTex.innerText; 
taxText = Number(taxText);
console.log(taxText);

let tax = 15; // 15% tax eta

taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100)); 

let warning = document.getElementById('error'); /
let warning2 = document.getElementById('errorp');
warning.style.display = 'none';
warning2.style.display = 'none';
// minus

minus1.addEventListener('click', function () { 
    cal.innerText = Number(cal.innerText) - 1400;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }

}); // ekhane shesh 1 number
minus2.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1500;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 2 number
minus3.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1200;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        document.getElementById('error').style.display = 'block';
        document.getElementById('errorP').style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }

}); // 3 number
minus4.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1300;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 4number

// plus

plus1.addEventListener('click', function () { // eta plus er calculate
    cal.innerText = Number(cal.innerText) + 1400;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 1
plus2.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1500;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 2
plus3.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1200;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 3
plus4.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1300;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 4