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

    const select = document.getElementsByTagName('select');

    const score = document.querySelector('.score').children[1];
    const button = document.querySelector('button');
    const ageValue = formElement.querySelector('input[type="text"].age').value;
    const growthValue = formElement.querySelector('input[type="text"].growth').value;
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

    select[2].children[0].value = 1.25;
    select[2].children[1].value = 1.4;
    select[2].children[2].value = 1.6;
    select[2].children[3].value = 1.75;
    select[2].children[4].value = 2;
    select[2].children[5].value = 2.3;
    
    const modelManHB = Math.round((66.5 + (5.003*growthValue) + (13.75*weightValue) - (6.775*ageValue)));
    const modelManMifflin = Math.round(((6.25*growthValue) + (10*weightValue) - (5*ageValue)) + 5);

    const modelWomanHB = Math.round((655.1 + (1.85*growthValue) + (9.563*weightValue) - (4.676*ageValue)));
    const modelWomanMifflin = Math.round(((6.25*growthValue) + (10*weightValue) - (5*ageValue)) - 161);

    if(select[0].selectedIndex == 0 && select[1].selectedIndex == 0){
        score.textContent = "CPM = " + Math.round(modelManHB * select[2].children[select[2].selectedIndex].value) + " kcal";
    } else if(select[0].selectedIndex == 0 && select[1].selectedIndex == 1) {
        score.textContent = "CPM = " + Math.round(modelWomanHB * select[2].children[select[2].selectedIndex].value) + " kcal";
    } else if(select[0].selectedIndex == 1 && select[1].selectedIndex == 0) {
        score.textContent = "CPM = " + Math.round(modelManMifflin * select[2].children[select[2].selectedIndex].value) + " kcal";
    } else if(select[0].selectedIndex == 1 && select[1].selectedIndex == 1) {
        score.textContent = "CPM = " + Math.round(modelWomanMifflin * select[2].children[select[2].selectedIndex].value) + " kcal";
    }
});