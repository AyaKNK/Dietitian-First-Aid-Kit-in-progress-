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