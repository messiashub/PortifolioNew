
let imagens = document.querySelectorAll(".img");
let button = document.querySelectorAll('.btn');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let btnClose = document.querySelector('.btn-close');
let valorSrc = "";

for(let i =0; i < button.length; i++){
    button[i].addEventListener('click',function(){
        console.log('olá');
        valorSrc = imagens[i].getAttribute('src');
        modalImg.setAttribute('src',valorSrc);
        modal.classList.toggle('modal_active');
    })
}
btnClose.addEventListener('click',function(){
    console.log('olá de novo');
    modal.classList.toggle('modal_active');
})