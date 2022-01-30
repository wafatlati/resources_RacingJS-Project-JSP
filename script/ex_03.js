window.addEventListener("DOMContentLoaded", (event) =>{
    document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0]
    document.getElementById("pop_pup").onclick = function() {
         var name = ""
        do {
            name = window.prompt("what's your name ?")
        }while (name=="")
        var confirmation = confirm("Are you sur "+name+" is your name ?")
        if (confirmation ){
            document.getElementById("pop_pup").innerText = name;
            alert(name);

        }

    }


})


