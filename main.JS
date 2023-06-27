const formDiv = document.querySelector('div.formDiv');
const memeForm = document.querySelector('form.memeInputForm');
const imageURLInput = document.querySelector('input.input.URLinput');
const textOnTopInput = document.querySelector('input.input.textTop');
const textOnBottomInput = document.querySelector('input.input.textBottom');
const addMemeButton = document.querySelector('input.addMeme');
const memePageDiv = document.querySelector('div.memePage');

let imageURL = null // use to capture imageURLinput.value later 
let textTop = null //textTop Val default : null;
let textBottom = null //textBottom val default: null;

formDiv.addEventListener('click', function (event){
    event.preventDefault();
    // console.log(event.target);
    
    imageURL = imageURLInput.value; // use to capture imageURLinput.value later 
    textTop = textOnTopInput.value; //textTop Val default : null;
    textBottom = textOnBottomInput.value; //textBottom val default: null;

    if (event.target.tagName === 'INPUT') {
        if (event.target.className === 'addMeme'){ //if clicks add meme button
            if (!imageURL || !textTop || !textBottom) {
                alert ('Not all fields have been filled out!');
                clearForms();
            }
            memePageDiv.append(createNewMeme(imageURL, textTop, textBottom));
            clearForms();
        }
    }
})

//clear all text inputs and forms
const clearForms = () => {
    // for (let input of [imageURLInput, textOnTopInput, textOnBottomInput]){
    //     // input.reset();
    //     input.value = ''
    // } 
    memeForm.reset();
}


//create meme with user input vals
const createNewMeme = (imageURL, textTop, textBottom) => {
    //create URL background
    let newMeme = document.createElement('div');
    newMeme.classList.add('meme');
    newMeme.style.backgroundImage = "url(" + imageURL + ")"; //set newMeme bg to imageURL.value
    
    //create new top caption
    let newTopCaption = document.createElement('h1');
    newTopCaption.innerText = textTop;
    newTopCaption.classList.add('textTop')
    newTopCaption.classList.add('memeText')
    newMeme.append(newTopCaption);
    
    //create bottom caption
    let newBottomCaption = document.createElement('h1')
    newBottomCaption.innerText = textBottom;
    newBottomCaption.classList.add('textBottom')
    newBottomCaption.classList.add('memeText')
    newMeme.append(newBottomCaption);

    // return (newMeme)
    return newMeme
}

memePageDiv.addEventListener('click', function (event){
    if (event.target.tagName === 'DIV')
        if (event.target.className === 'meme') {
            memePageDiv.removeChild(event.target) // remove meme
        }
}) //this is removing meme Page for some reason