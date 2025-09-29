/*Codigo pra mudar a class active no NAV*/

/*Usa queryselectos pra pegar a section e o a no nav*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/*Função onscroll para saber onde a página está (Y wise)*/
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        /*definindo offset*/
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        /*Pegando o atributo "id"*/
        let id = sec.getAttribute('id');
        /*Caso o topo da pagina visualizada esteja entre cada section, considerando o offset
        remove-se ou adiciona-se a tag active para cada section */
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        }
    });
}
