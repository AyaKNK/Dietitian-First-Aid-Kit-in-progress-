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
    const button = document.querySelector('button');
    const glycemicValue = formElement.querySelector('input[type="text"].glycemic-index').value;
    const carboValue = formElement.querySelector('input[type="text"].carbo').value;
    
    // hide score
    button.addEventListener('click', function() {
        score.className -= "show";
    });

    // animate show score
    function showScore() {
        score.className = "show";
    }
    setTimeout(showScore, 400);
    
    const model = ((glycemicValue * carboValue) / 100);

    score.textContent = "Ładunek = " + model;
});