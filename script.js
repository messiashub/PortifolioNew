
let imagens = document.querySelectorAll(".img");
let button = document.querySelectorAll('.btn');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let btnClose = document.querySelector('.btn-close');
let valorSrc = "";
let fotos = fotosJson;

button.forEach(function(botao,indice){
    botao.addEventListener('click',function(){
    valorSrc = fotos[indice]["src"];
    modalImg.setAttribute('src',valorSrc);
    modal.classList.toggle('modal_active');
    console.log(indice);
    })
})
/* for(let i =0; i < button.length; i++){
    button[i].addEventListener('click',function(){
        console.log('olá');
       
        valorSrc = fotos[i]['src'];
        modalImg.setAttribute('src',valorSrc);
        modal.classList.toggle('modal_active');
    })
} */


/* .getAttribute('src') */;
 /*  console.log(fotos[i]['src']); */
btnClose.addEventListener('click',function(){
    modal.classList.toggle('modal_active');
});

const loader = document.querySelector('.loader');
window.addEventListener('load',()=>{
    loader.style.display= 'none';
})




/* console.log(fotos[0].src);
 */

