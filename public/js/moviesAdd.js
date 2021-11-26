window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', () => {
        titulo.style.color='white'
        titulo.style.backgroundColor  ='black'
    })

    titulo.addEventListener('mouseleave', () => {
        titulo.style.color='black'
        titulo.style.backgroundColor  ='#3255'
    })

    let secret = document.querySelector("#titulo");

    secret.addEventListener("keyup", (e) => {
        let estadoSecreto = 0;
        let k = e.k;

        switch (k) {
        case "s":
            estadoSecreto = 1;
            console.log(estadoSecreto);
            break;
        case "e":
            estadoSecreto = 2;
            console.log(estadoSecreto);
            break;
        case "c":
            estadoSecreto = 3;
            console.log(estadoSecreto);
            break;
        case "r":
            estadoSecreto = 4;
            console.log(estadoSecreto);
            break;
        case "e":
            estadoSecreto = 5;
            console.log(estadoSecreto);
            break;
        case "t":
            estadoSecreto = 6;
            console.log(estadoSecreto);
            break;
        case "o":
            estadoSecreto = 0;
            console.log(estadoSecreto);
            window.alert("SECRETO MAGICO".toUpperCase());
            break;
        default:
            estadoSecreto = 0;
            console.log(estadoSecreto);
            break;
        }
  });

}