
let imagens = document.querySelectorAll(".img");
let button = document.querySelectorAll('.btn');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let btnClose = document.querySelector('.btn-close');
let valorSrc = "";
let fotos = fotosJson;

for(let i =0; i < button.length; i++){
    button[i].addEventListener('click',function(){
        console.log('olá');
        
       /*  console.log(fotos[i]['src']); */
       
        valorSrc = fotos[i]['src'];/* .getAttribute('src') */;
        modalImg.setAttribute('src',valorSrc);
        modal.classList.toggle('modal_active');
    })
}
btnClose.addEventListener('click',function(){
    console.log('olá de novo');
    modal.classList.toggle('modal_active');
});

const loader = document.querySelector('.loader');
window.addEventListener('load',()=>{
    loader.style.display= 'none';
})




/* console.log(fotos[0].src);
 */

