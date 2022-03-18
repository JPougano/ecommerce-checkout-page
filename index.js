// Js do menu móvel
const menuBtn = document.querySelector('.nav__menu');
const dragMenu = document.querySelector('.drag-menu__container');
const closeBtn = document.querySelector('.close__icon');

    menuBtn.addEventListener("click", function(){
        dragMenu.classList.add('active__menu');
    });

    closeBtn.addEventListener("click", function(){
        dragMenu.classList.remove('active__menu');
    });

// Js de mudança de thumbnail

    const thumbClick = document.querySelector('.showcase__thumbnail___list')
    const mainImageThumb = document.querySelector('.showcase__image');

    thumbClick.addEventListener("click", e =>{
         for(let i = 1; i < 5; i++){
            let tbn = document.querySelector(`.tbn${i}`);
            tbn.classList.remove('thumbnail__activated');

            e.target.classList.add('thumbnail__activated');

            const imgs = [
                "./images/image-product-1.jpg",
                "./images/image-product-2.jpg",
                "./images/image-product-3.jpg",
                "./images/image-product-4.jpg"
            ];

            const imageSrc = e.target.classList[0].substr(-1) -1;
            mainImageThumb.setAttribute("src",imgs[imageSrc]);
            }
     })

// Js de aumento / redução de carrinho

    const addItem = document.querySelector('.plus');
    const removeItem = document.querySelector('.minus');
    const itens = document.querySelector('.itens');
    const cartAmout = document.querySelector('.cart__amout');
    const submitCart = document.querySelector('.checkout__submit');


    let contador = 0;

     function addingItem(){
        contador += 1;
        itens.innerHTML = contador;
     };

     function removingItem(){

        if(itens.innerHTML == 0){
            return
        }else{
            contador -= 1;
            itens.innerHTML = contador;
        }  
     };

     submitCart.addEventListener("click",function settingCartAmout(){
         cartAmout.innerHTML = contador;
     });

// Js de criação do menu de checkout

    const sectionDropDownMenu = document.querySelector('.nav__checkout__dropdown');
    const emptyCart = document.querySelector('.empty__cart___div');
    const filledCart = document.querySelector('.filled__cart___div');

    submitCart.addEventListener("click",function(){

        var valorTotal = (contador * 125.00);
        const totalItems = document.querySelector('.dropdown__items');
        const valorTotalItems = document.querySelector('.dropdown__destaque');

        totalItems.innerHTML = contador + ' ';
        valorTotalItems.innerHTML = '$' + valorTotal + ',00';

        if(contador > 0){
            emptyCart.classList.add('hidden');
            filledCart.classList.remove('hidden');
    }else{
        cartAmout.innerHTML = null;
    }
    
});


// Faz o menu do carrinho abrir e fechar
    const cartIcon = document.querySelector('.cart__logo');
    cartIcon.addEventListener("click",function(){
        sectionDropDownMenu.classList.toggle('hidden')
    });
   
// Limpa o carrinho quando você clica na lixeira 
const trash = document.querySelector('.dropdown__menu___delete');

trash.addEventListener("click",function(){
    emptyCart.classList.toggle('hidden');
    filledCart.classList.toggle('hidden');
    cartAmout.innerHTML = null;
    contador = 0;
    itens.innerHTML = 0;
})
