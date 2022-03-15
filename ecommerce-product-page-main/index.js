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
