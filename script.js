
function exibir_menu(){
    // document.getElementById("menu_as").style.display = "block"
    document.getElementById("menu_as").style.top = "0"
    var voltar = document.getElementById("menu_as").style.position = "fixed"

   
}
function voltar_menu(){
    var voltar = document.getElementById("menu_as").style.top = "-350px";
    voltar.style.transition = "0.1s"
}
