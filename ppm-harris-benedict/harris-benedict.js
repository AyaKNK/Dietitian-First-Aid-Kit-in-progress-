const formElement = document.forms['calc'];

formElement.addEventListener('submit', function(e){
    e.preventDefault();

    const growthValue = formElement.querySelector('input[type="text"].growth').value;
    const weightValue = formElement.querySelector('input[type="text"].weight').value;
    const ageValue = formElement.querySelector('input[type="text"].age').value;
    const score = document.querySelector('.score').children[1];
    const select = document.querySelector('select');
    if(select.selectedIndex == 0){
        score.textContent = "PPM = " + Math.round((66.5 + (5.003*growthValue) + (13.75*weightValue) - (6.775*ageValue))) + " kcal";
    } else {
        score.textContent = "PPM = " + Math.round((655.1 + (1.85*growthValue) + (9.563*weightValue) - (4.676*ageValue))) + " kcal";
    }
});
