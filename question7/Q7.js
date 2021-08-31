const Input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const OutputDiv = document.querySelector('.output');

var url = 'https://api.funtranslations.com/translate/minion.json'

function geturl(text){
    return url +'?'+'text='+text
}

btn.addEventListener('click' , () => {
    var Text = Input.value ;
    fetch(geturl(Text))
    .then(reponse => reponse.json())
    .then(json=>{
        var translatedtext = json.contents.translated;
        OutputDiv.innerHTML = translatedtext;
    })
})