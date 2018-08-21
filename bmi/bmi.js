const formElement = document.forms['calc'];
const allValueFields = document.getElementsByTagName('input');
const validationText = document.querySelector('.validation-text');

// characters blocker

formElement.addEventListener('keypress', function(e){
    var unicode = e.charCode? e.charCode : e.keyCode;

    if (unicode != 8 && unicode != 44){
        if (unicode < 48 || unicode > 57) {
            e.preventDefault();
            return false;
        }
    }
});

// changing commas to dots

let commaChange = document.getElementsByClassName('input__comma-change');

formElement.addEventListener('keyup', function(){
    for(v=0; v < allValueFields.length; v++) {
        commaChange[v].value = commaChange[v].value.replace(/,/g, '.')
        while (commaChange[v].value && (commaChange[v].value.match(/[.]/g)||[]).length >= 2) {
            commaChange[v].value = commaChange[v].value.replace(/.$/g, "");
        }
    }
});

// block first dot or number 0

formElement.addEventListener('input', function(){
    for(v=0; v < allValueFields.length; v++) {
        if (/^0/.test(commaChange[v].value)) {
            commaChange[v].value = commaChange[v].value.replace(/^0/, "")
        } else if (/^,/g.test(commaChange[v].value)){
            commaChange[v].value = commaChange[v].value.replace(/^,/g, "")
        }
    }
});

//count with validation

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    function validation() {
        for(v=0; v < allValueFields.length; v++) {
            if(allValueFields[v].value == ""){

                allValueFields[v].style.border = "2px red solid";
                validationText.style.opacity= "1";

            } else if(allValueFields[v].value !== "") {

                allValueFields[v].style.border = 'none';
                allValueFields[v].style.borderBottom = '2px solid white';

            }
        }
    }
    validation();

    if(allValueFields[0].value && allValueFields[1].value !== "") {
        validationText.style.opacity= "0";

        const score = document.querySelector('.score').children[1];
        const scoreSecond = document.querySelector('.score').children[2];
        const button = document.querySelector('button');

        const growthValue = formElement.querySelector('input[type="text"].growth').value;
        const weightValue = formElement.querySelector('input[type="text"].weight').value;
        
        // hide score
        button.addEventListener('click', function() {
            score.className -= "show";
            scoreSecond.className -= "show";
        });
    
        // animate show score
        function showScore() {
            score.className = "show";
            scoreSecond.className = "show";
        }
        setTimeout(showScore, 400);
        
        const model = (weightValue / Math.pow((growthValue / 100), 2)).toFixed(2);

        score.textContent = "BMI = " + model;
        const secondScore = function() {
            if (model <= 18.5) {
                scoreSecond.textContent = "Niedowaga";
                scoreSecond.style.color = "yellow";
              } else if (model > 18.5 && model < 25 ) {
                scoreSecond.textContent = "Norma";
                scoreSecond.style.color = "green";
              } else if (model > 25 && model < 30 ) {
                scoreSecond.textContent = "Nadwaga";
                scoreSecond.style.color = "orange";
              } else {
                scoreSecond.textContent = "Otyłość";
                scoreSecond.style.color = "red";
              }
        }
        secondScore();
    }
});