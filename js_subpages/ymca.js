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

    const select = document.querySelector('select');
    const score = document.querySelector('.score').children[1];
    const button = document.querySelector('button');
    const waistValue = formElement.querySelector('input[type="text"].waist').value;
    const weightValue = formElement.querySelector('input[type="text"].weight').value;
    
    // hide score
    button.addEventListener('click', function() {
        score.className -= "show";
    });

    // animate show score
    function showScore() {
        score.className = "show";
    }
    setTimeout(showScore, 400);
    
    const modelWoman = ((1.634 * waistValue - 0.1804 * weightValue - 76.76) / (2.2 * weightValue) * 100).toFixed(1);
    const modelMan = ((1.634 * waistValue - 0.1804 * weightValue - 98.42) / (2.2 * weightValue) * 100).toFixed(1);

    if(select.selectedIndex == 0){
        score.textContent = modelMan + " %";
    } else {
        score.textContent = modelWoman + " %";
    }
});