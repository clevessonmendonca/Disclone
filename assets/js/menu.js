var menu = document.querySelector('.menu-mobile-icon')
let menuList = document.querySelector('.menu-list')

menu.addEventListener('click', () => {
    document.querySelector('.barra-esquerda-mobile').classList.toggle('hidde')
})

menuList.addEventListener('click', () => {
    document.querySelector('.aside-direita').classList.toggle('hidde')
})