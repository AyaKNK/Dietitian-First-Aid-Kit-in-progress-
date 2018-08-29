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
    const proteinValue = inputField[0].value;
    const phosphorusValue = inputField[1].value;
    const potassiumValue = inputField[2].value;
    const magnesiumValue = inputField[3].value;
    const calciumValue = inputField[4].value;
    
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
    
    const model = ((0.49 * proteinValue + 0.037 * phosphorusValue) - (0.021 * potassiumValue - 0.026 * magnesiumValue - 0.013 * calciumValue)).toFixed(3);

    scoreSecond.style.fontSize = "20px";
    scoreSecond.style.lineHeight = "37px";

    score.textContent = "PRAL = " + model;

    if (model > 0) {
        scoreSecond.style.color = "red";
        scoreSecond.textContent = "Produkt zakwaszający";
    } else {
        scoreSecond.style.color = "green";
        scoreSecond.textContent = "Produkt odkwaszający";
    }
});
