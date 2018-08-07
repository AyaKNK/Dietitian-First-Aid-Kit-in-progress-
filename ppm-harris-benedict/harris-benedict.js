const formElement = document.forms['calc'];
const allValueFields = document.getElementsByTagName('input');
const validationText = document.querySelector('.validation-text');

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    function validation() {
        for(v=0; v < allValueFields.length; v++){
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

    if(allValueFields[0].value && allValueFields[1].value && allValueFields[2].value !== "") {
        validationText.style.opacity= "0";

        const growthValue = formElement.querySelector('input[type="number"].growth').value;
        const weightValue = formElement.querySelector('input[type="number"].weight').value;
        const ageValue = formElement.querySelector('input[type="number"].age').value;
        const select = document.querySelector('select');
        const score = document.querySelector('.score').children[1];
        const button = document.querySelector('button');
        
        // HIDE SCORE
        button.addEventListener('click', function() {
            score.className -= "show";
        });
    
        // SHOW SCORE
        function showScore() {
            score.className = "show";
        }
        setTimeout(showScore, 400);
    
    
        if(select.selectedIndex == 0){
            score.textContent = "PPM = " + Math.round((66.5 + (5.003*growthValue) + (13.75*weightValue) - (6.775*ageValue))) + " kcal";
        } else {
            score.textContent = "PPM = " + Math.round((655.1 + (1.85*growthValue) + (9.563*weightValue) - (4.676*ageValue))) + " kcal";
        }
    }
});
