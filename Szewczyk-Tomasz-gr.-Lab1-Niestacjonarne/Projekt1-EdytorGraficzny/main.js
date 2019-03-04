let canvas = document.querySelector('#ps')
let ctx = canvas.getContext('2d')
const imgSrc = "https://picsum.photos/600/300/?random=1";
const brightnessSlider = document.querySelector('#brightnessValue');
const contrastSlider = document.querySelector('#contrastValue');

let img = new Image();


img.crossOrigin = "Anonymous";




img.src = imgSrc
img.addEventListener('load', () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
})

//Modyfikacja Jasności
brightnessSlider.addEventListener('change', brightnessChange);

function brightnessChange() {


    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)


    let factor = brightnessSlider.value
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] += 128 * (factor / 100);
        imageData.data[i + 1] += 128 * (factor / 100);
        imageData.data[i + 2] += 128 * (factor / 100);
    }
    ctx.putImageData(imageData, 0, 0)

}

//Modyfikacja KOntrastu

contrastSlider.addEventListener('change', contrastChange);

function contrastChange() {
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)


    let factor = contrastSlider.value
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] += 128 * (factor / 100);
        imageData.data[i + 1] += 128 * (factor / 100);
        imageData.data[i + 2] += 128 * (factor / 100);
    }
    ctx.putImageData(imageData, 0, 0)

}
console.log(contrastSlider.value)


// zmiana kontrastu jane piksele rozjaśnić
// ciemne przyciemnić
// coś takiego

// if(imageData.data[i]>127){
// imageData.data[i]=Math.flor(imageData.data[i]-factor) 



// suma rgb i pdzielone na 3

// nasycenie wartośc dominująca rgb powiększona najwięcej 
// reszta procętowo mniej

// sepia 

// rozmycie pixeli uśrednienie kilku pixeli