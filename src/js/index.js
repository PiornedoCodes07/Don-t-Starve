
console.log("mostrar o document", document);

console.log(document.querySelector(".botao-trailer"));



const botaoTrailer = document.querySelector(".botao-trailer");

botaoTrailer.addEventListener("click", () => {
modal.classList.add("aberto")
video.setAttribute("src","https://youtube.com/embed/fXP4_2qRHng?t=23")
});

const modal = document.querySelector(".modal");

const fechar = document.querySelector(".fechar-modal")

fechar.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src","")

    })

    const video = document.getElementById("video")
