const parag = document.querySelector(".animacao");
const text = "Programador Front-end";
const interval = 200;

function animacaoTexto(parag, text, interval){
    const texto = text.split("").reverse()

    const anima = setInterval(() => {

        if(!texto.length){
            return clearInterval(anima)
        }
        
        const exibir = texto.pop();

        parag.innerHTML += exibir;
        
    }, interval);

}

animacaoTexto(parag, text, interval);

