let canvas = document.querySelector('#ps')
let ctx = canvas.getContext('2d')
const imgSrc = "https://picsum.photos/600/300/?random=1";
const brightnessSlider = document.querySelector('#brightnessValue');

let img = new Image();


img.crossOrigin = "Anonymous";




img.src = imgSrc
img.addEventListener('load', () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
})
brightnessSlider.addEventListener('change', brightnessChange);

function brightnessChange() {
    // pobieranie pikseli z canvas
    console.log(brightnessSlider.value)
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    //nie bangla
    let factor = brightnessSlider.value
    for (let i = 0; i < imageData.data.length; i += 4) {
        // dodaje  zmienną 'factor' 30 do wartości pixela

        imageData.data[i] += factor
        imageData.data[i + 1] += factor
        imageData.data[i + 2] += factor

    }
    ctx.putImageData(imageData, 0, 0)


}









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