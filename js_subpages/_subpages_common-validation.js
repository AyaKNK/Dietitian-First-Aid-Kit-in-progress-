const formElement = document.forms['calc'];
const allValueFields = document.getElementsByTagName('input');

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
// checking, if all input fields is filled and removing red validation from borders and text

let inputField = document.getElementsByClassName('input-field');

formElement.addEventListener('keyup', function(){
    for(v=0; v < allValueFields.length; v++) {
        inputField[v].value = inputField[v].value.replace(/,/g, '.')
        while (inputField[v].value && (inputField[v].value.match(/[.]/g)||[]).length >= 2) {
            inputField[v].value = inputField[v].value.replace(/.$/g, "");
        }
        if ((allValueFields[v].value.match(/[0-9]/g)||[]).length >= 1) {
            allValueFields[v].style.border = 'none';
            allValueFields[v].style.borderBottom = '2px solid white';
        }
    }
    for(x=0; x < allValueFields.length; x++) {
        if (allValueFields[x].value == "") {
            return false;
        }
    }
    validationText.style.opacity = "0";
});

// block first dot or number 0     POKOMBINOWAC ZEBY BLOKOWALO DRUGIE ZERO NA POCZATKU

// formElement.addEventListener('input', function(){
//     for(v=0; v < allValueFields.length; v++) {
//         if (/^0/.test(inputField[v].value).length >= 2) {
//             inputField[v].value = inputField[v].value.replace(/^0/, "")
//         } else if (/^,/g.test(inputField[v].value)){
//             inputField[v].value = inputField[v].value.replace(/^,/g, "")
//         }
//     }
// }); 
formElement.addEventListener('keyup', function(){
    for(v=0; v < allValueFields.length; v++) {
        while (inputField[v].value && (inputField[v].value.match(/^0/g)||[]).length >= 2) {
            inputField[v].value = inputField[v].value.replace(/0$/g, "");
        }
    }
});

formElement.addEventListener('input', function(){
    for(v=0; v < allValueFields.length; v++) {
        if (/^,/g.test(inputField[v].value)){
            inputField[v].value = inputField[v].value.replace(/^,/g, "")
        }
    }
});