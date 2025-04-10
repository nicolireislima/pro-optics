
(function () {

    "use strict";
    /*O modo estrito ("use strict") é ativado para ajudar a detectar erros e comportamentos problemáticos no código. */

    /* Função de seleção */

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function 
     * Função de Adição de Eventos (on)
     * Função espera que um evento ocorra e depois responde a ele  */


    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    // Ativar Botao Menu no modo Mobile
    
    on('click', '.mobile-nav-toggle', function() {
        select('body').classList.toggle('mobile-nav-active')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    // Efeito de digitação 
    const typed = select ('.typed');

    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')

        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100, //velocidade de digitação 
            backSpeed: 50, //velocidade em apagar 
            backDelay: 2000, //tempo de espera 
        });

    }


    


})()