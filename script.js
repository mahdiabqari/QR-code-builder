const input = document.getElementById('text');

const btn = document.getElementById('btn');

////

const conimg = document.getElementById('img');
const img = document.getElementById('image');


btn.addEventListener('click' , ()=>{
    let vinput = input.value;

    if(!vinput){
        return alert('Pleas first write Something')
    }
    btn.innerText = 'waiting...'
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${vinput}`

    img.addEventListener('load' , () => {

        conimg.style.display = 'flex';
        btn.innerText='that is up!';

        setInterval(()=> btn.innerText='Build its QR Code' , 1000);
    })
})