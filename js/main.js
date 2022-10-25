// Efeito de página ativa
const pagina = document.querySelector('title').textContent;
const links = document.querySelectorAll('.menu-item');

links.forEach(link => {
    if(link.textContent == pagina) {
        console.log(pagina);
        link.classList.toggle('item-ativo');
    }
});
// 

