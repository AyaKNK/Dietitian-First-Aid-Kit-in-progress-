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
    const scoreSecond = document.querySelector('.score').children[2];
    const button = document.querySelector('button');
    const hipsValue = formElement.querySelector('input[type="text"].hips').value;
    const waistValue = formElement.querySelector('input[type="text"].waist').value;
    
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
    
    const model = (waistValue / hipsValue).toFixed(4);

    score.textContent = model;

    scoreSecond.style.fontSize = "16px";
    scoreSecond.style.lineHeight = "21px";

    if(select.selectedIndex == 0){
        if(model >= 1 || waistValue > 102) {
            scoreSecond.style.color = "red";
            scoreSecond.innerHTML = "Otyłość brzuszna" + "<br>" + "(typu jabłko)";
        } else {
            scoreSecond.style.color = "orange";
            scoreSecond.innerHTML = "Otyłość pośladkowo – udowa" + "<br>" + "(typu gruszka)";
        }
    } else {
        if(model >= 0.85 || waistValue > 88) {
            scoreSecond.style.color = "red";
            scoreSecond.innerHTML = "Otyłość brzuszna" + "<br>" + "(typu jabłko)";
        } else {
            scoreSecond.style.color = "orange";
            scoreSecond.innerHTML = "Otyłość pośladkowo – udowa" + "<br>" + "(typu gruszka)";
        }
    }
});