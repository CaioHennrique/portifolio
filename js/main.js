(function () {
    `use strict`


    const nome = document.querySelector("#nome");
    const msg = document.querySelector("#mensagem");
    const btn = document.querySelector("#btnAcao");

    btn.addEventListener("click", () => {
        const numero = "5512988462376";
        const texto = `Olá meu nome é ${nome.value},  ${msg.value}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank"); // Abre o WhatsApp em nova aba

    })




    const menuIcon = document.querySelector(".iconBurguer");
    const navbarInteracao = document.querySelector(".navbarInteracao");

    menuIcon.addEventListener("click", () => {
        navbarInteracao.classList.toggle("active");
    });

})()