let nextDom = document.getElementById('next');
let PrevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list')
let thumDom = document.querySelector('.carousel .thumbnail')

nextDom.onclick = function(){
    showSlideer('next')
}
PrevDom.onclick = function(){
    showSlideer('prev')
}
let timeAutoNext = 7000;
let timeRunning = 3000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click()
},timeAutoNext)

function showSlideer(type) {  
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let ItemThumSlider = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumDom.appendChild(ItemThumSlider[0]);
        carouselDom.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length-1;
        listItemDom.prepend(itemSlider[positionLastItem])
        thumDom.prepend(ItemThumSlider[positionLastItem])
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    },timeRunning)
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click()
    },timeAutoNext)
};