const validationText = document.querySelector('.validation-text');
// _subpages_common-validation.js includes formElement variable
// _subpages_common-validation.js includes allValueFields variable


// count with validation

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    
    // added validation focus
    for(v=0; v < allValueFields.length; v++) {
        if(allValueFields[v].value == ""){
            allValueFields[v].style.border = "2px red solid";
            validationText.style.opacity= "1";
        } else {
            allValueFields[v].style.border = 'none';
            allValueFields[v].style.borderBottom = '2px solid white';
        }
    }

    // validation check
    for(x=0; x < allValueFields.length; x++) {
        if (allValueFields[x].value == "") {
            return false;
        }
    }

    // CALCULATE:
    validationText.style.opacity = "0";

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
});