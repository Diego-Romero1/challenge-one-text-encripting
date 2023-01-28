function demoVisibility() {
    document.querySelector("img#muneco").style.display = "none";
    document.querySelector("h6#h6").style.display = "none";
}

function encriptText(){
    demoVisibility();
    let encript = document.querySelector("textarea#text-area").value;
    let result = encript.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    document.querySelector("textarea#text-area2").innerHTML = result;

}

function descencriptText(){
    let descencript = document.querySelector("textarea#text-area2").value;
    let result = descencript.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    document.querySelector("textarea#text-area2").innerHTML = result;


}

function copyText(){
    let textarea = document.querySelector("textarea#text-area2");
    textarea.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("texto copiado!");
}

