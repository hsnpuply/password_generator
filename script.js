const passwordbox = document.getElementById('password')
const valueofpasswordbox=passwordbox.value;
const myAlert = document.querySelector('.alert');
const lenghOfPassword = 10;

const myInputRange = document.getElementById('range');
var rangeValue = document.getElementById('rangeValue');

rangeValue.innerHTML=myInputRange.value;

myInputRange.addEventListener('input',()=>{
    rangeValue.innerHTML=myInputRange.value;
})

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ='abcdefghijklmnopqrstuvwxyz';
const number = "0123456789"
const symbol ="!@#$%^&*()_+|{}[]<?>/-=♥♣◘•▬ƒ₧¥ûá¢ÜÖ☺°±°¯²³´µ¶·¸"

const allChars = upperCase + lowerCase + number + symbol;
function createPassword(){
    let password='';

    password +=upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password +=number[Math.floor(Math.random() * number.length)];
    password +=symbol[Math.floor(Math.random() * symbol.length)];
    while(myInputRange.value > password.length){
        password +=allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordbox.value=password;



}

function copyPassword(){
    if(passwordbox.value === ""){
        myAlert.style.opacity=1;
         myAlert.innerHTML='You Didnt Generate'
         setTimeout(function() {
            myAlert.style.opacity=0;

            }, 2400);
}else{
    navigator.clipboard.writeText(passwordbox.value);

         myAlert.innerHTML='Copied !'

    myAlert.style.opacity=1;
    setTimeout(function() {
    myAlert.style.opacity=0;

    }, 2400);
}

}
