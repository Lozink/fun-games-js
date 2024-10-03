let total = 0;
let number= 0;
let affiche = "0";
let last_operation = "";
let following_operation = true;

document.getElementById('total').innerHTML = affiche;

function press_number(number) {
    if (following_operation == true) {
        affiche=number
        following_operation = false
    }
    else {
        if (affiche.length < 10) {
        affiche=affiche+number;
        }
    }
    document.getElementById('total').innerHTML = affiche;
}

function press_symbol(symbol) {
    if (affiche == "") {
            //mettre qqch ici
    } else {
        following_operation=true
        if (last_operation == "") {
            total=parseFloat(affiche);
            affiche= "";
            last_operation = symbol;
        } else {
            if (last_operation == "division") {
                affiche = (total/parseFloat(affiche)).toString();
                total=parseFloat(affiche);
                last_operation=symbol;
            } else if (last_operation == "multiply") {
                affiche = (total*parseFloat(affiche)).toString();
                total=parseFloat(affiche);
                last_operation=symbol;
            } else if (last_operation == "minus") {
                affiche = (total-parseFloat(affiche)).toString();
                total=parseFloat(affiche);
                last_operation=symbol;
            } else if (last_operation == "plus") {
                affiche = (total+parseFloat(affiche)).toString();
                total=parseFloat(affiche);
                last_operation=symbol;
            }   
        }
    }
}

function press_equal() {
    if (last_operation == "division") {
        affiche = (total/parseFloat(affiche)).toString();
    } else if (last_operation == "multiply") {
        affiche = (total*parseFloat(affiche)).toString();
    } else if (last_operation == "minus") {
        affiche = (total-parseFloat(affiche)).toString();
    } else if (last_operation == "plus") {
        affiche = (total+parseFloat(affiche)).toString();
    }
    total=0;
    following_operation=true;
    last_operation="";
    
    document.getElementById('total').innerHTML = affiche;
}

document.getElementById('9').addEventListener("click", () => {
    number="9";
    press_number(number);
});
document.getElementById('8').addEventListener("click", () => {
    number="8";
    press_number(number);
});
document.getElementById('7').addEventListener("click",() => {
    number="7";
    press_number(number);
});
document.getElementById('6').addEventListener("click",() => {
    number="6";
    press_number(number);
});
document.getElementById('5').addEventListener("click",() => {
    number="5";
    press_number(number);
});
document.getElementById('4').addEventListener("click",() => {
    number="4";
    press_number(number);
});
document.getElementById('3').addEventListener("click",() => {
    number="3";
    press_number(number);
});
document.getElementById('2').addEventListener("click",() => {
    number="2";
    press_number(number);
});
document.getElementById('1').addEventListener("click",() => {
    number="1";
    press_number(number);
});
document.getElementById('0').addEventListener("click", () => {
    number="0";
    press_number(number);
});

document.getElementById('plus').addEventListener("click",() => {
    symbol="plus";
    press_symbol(symbol);
});
document.getElementById('minus').addEventListener("click",() => {
    symbol="minus";
    press_symbol(symbol);
});
document.getElementById('multiply').addEventListener("click",() => {
    symbol="multiply";
    press_symbol(symbol);
});
document.getElementById('division').addEventListener("click",() => {
    symbol="division";
    press_symbol(symbol);
});

document.getElementById('equal').addEventListener("click", press_equal);
