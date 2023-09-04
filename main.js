// Колбэк фунции
function showSuccessMessage(message){
    console.log(message)
}
function showErrorMessage(message){
  console.error(message)
}
const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
function checkTextOnErrorSymbol(text,errorSymbo,showSuccessMessage,showErrorMessage){
   for(let i=0; i<text.length;i++){
    if(text[i] === errorSymbo){
        showErrorMessage(`найден запрещенный символ ${errorSymbo} под индексом ${text[i]}`)
    } else {
       showSuccessMessage(`В данном тексте нету запрещенных символов`)
    }
   }
}
console.log(checkTextOnErrorSymbol(text,"!",showSuccessMessage,showErrorMessage))
// Колбэк через массивa
function showSuccessMessage(message) {
  console.log(message);
}
function showErrorMessage(message) {
  console.error(message);
}
const text = ['Привет!', 'Как дела!', 'Давно мы с тобой не виделись.'];

function checkTextOnErrorSymbol(text, errorSymbol, showSuccessMessage, showErrorMessage) {
  text.forEach((element, index) => {
    if (element.includes(errorSymbol)) {
      showErrorMessage(`Найден запрещенный символ ${errorSymbol} под индексом ${index}`);
    } else {
      showSuccessMessage('В данном тексте нет запрещенных символов');
    }
  });
}

checkTextOnErrorSymbol(text,'!', showSuccessMessage, showErrorMessage);