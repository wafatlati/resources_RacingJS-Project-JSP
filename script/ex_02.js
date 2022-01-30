window.addEventListener("DOMContentLoaded", (event) => {
    var madiv = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0]
    var compteur = 0
    madiv.onclick = (e) => {
        compteur++
       madiv.innerText=compteur
    }

});
