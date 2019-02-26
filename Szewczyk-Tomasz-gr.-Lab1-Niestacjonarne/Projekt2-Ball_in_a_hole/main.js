//rysowanie planszy
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d')

//dziury


// for (let i = 0; i <= 6; i++) {
//     let holeSize = Math.random() * 30 + 20;
//     let holePosWidth = Math.random() * (window.innerWidth - holeSize * 2) + holeSize;
//     let holePosHeight = Math.random() * (window.innerHeight - holeSize * 2) + holeSize;
//     ctx.beginPath();
//     ctx.arc(holePosWidth, holePosHeight, holeSize, 0, Math.PI * 2, false);
//     ctx.fillStyle = "green";
//     ctx.fill();
//     ctx.closePath();
// }

// animacja dziur

const holeAnimation = () => {
    let x = 300;
    let dx = 1;
    requestAnimationFrame(holeAnimation);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    ctx.arc(x, 200, 30, 0, Math.PI * 2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
holeAnimation();


window.addEventListener('load', () => {
    window.addEventListener('deviceorientation', (e) => {
        let start = e.alpha;
        console.log(start);

    })
})



window.addEventListener('deviceorientation', (e) => {
    let alpha = e.alpha;
    console.log(alpha);



})

// window.addEventListener('devicemotion', (e) => {
//     
//     console.log(alpha);
// })

// window.addEventListener('deviceorientation', moveMe)
// console.log(DeviceOrientationEvent.alpha)

// function moveMe(event) {



//     let left = event.alpha;

//     const div = document.querySelector('div');
//     div.style.left = `${left}px`;
//     console.log(event.alpha)



// event.alpha 0 - 360 stopni ,event.beta - 180 do 180, event.gamma od - 90 d0 90
//pierwsze ustawienie telefonu punk zerowy  
//biblioteka do debugowania
// chrome more tools sensors orientation
// git terminal clone adres z gita
// dodatek git lanes lk
// }



// <!-- divice motion obiekt window odpowiedzialne za poruszenie -->



// <!-- pochylenie telefonu obiekt window divice oririentation -->