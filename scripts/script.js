//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";
const SELECTED_CLASS = "selected";


//Declaración de variables globales.
let master = PickSequence(COLORS, MAX_COMBI_COLORES);
let userCombi = [];
var intento = 0;
var aciertos = 0;
let selected 
function init() {
    //1. Genera el código random del master
    document.getElementById("Result").innerHTML=ROW_RESULT;
    //2. Crea todas las filas según el número de intentos.
}

function AddSelectFunction(selections){
    for(let i = 0; i<selections.length; i++){
        selections[i].addEventListener("click", (Event) =>{
            if(Event.shiftKey){
                SelectedMultiple(selections[i]);
            }else{
                Selected(selections[i]);
            }
        });
    }
}
/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha
introducido el usuario.
Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar() {

}

/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
   let elements 
}

function Selected(docElement){
    let selected = document.querySelectorAll("."+SELECTED_CLASS);
    for(let element of selected){
        element.classList.remove(SELECTED_CLASS);
    }
    docElement.classList.add(SELECTED_CLASS);
}
function SelectedMultiple(docElement){
    docElement.classList.add(SELECTED_CLASS);
}
/** Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowResult w100 flex wrap">
<div class="rowUserCombi w75 flex wrap">
   <div class="w25">
       <div class="celUserCombi flex" onclick="selected(1)"></div>
   </div>
   <div class="w25">
       <div class="celUserCombi flex" onclick="selected(2)"></div>
   </div>
   <div class="w25">
       <div class="celUserCombi flex" onclick="selected(3)"></div>
   </div>
   <div class="w25">
       <div class="celUserCombi flex" onclick="selected(4)"></div>
   </div>
</div>
<div class="rowCercleResult w25 flex wrap center">
   <div class="w40 h40">
        <div class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div class="cercleResult flex"></div>
   </div>
<div>
</div>`;