//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const GREYANSWER = -1;
const WHITE = "white";
const WHITEANSWER = 0;
const BLACK = "black";
const BLACKANSWER = 1;
const ROWRESULTID = "Result";
const SELECTED_CLASS = "selected";
const USERCHOICESELECTOR = ".rowResult:first-child .rowUserCombi>div>div";
const CIRCLERESULTSELECTOR = ".rowResult:first-child .rowCercleResult .cercleResult";



//Declaración de variables globales.
let master = PickSequence(COLORS, MAX_COMBI_COLORES);
let userCombi = [];
var intento = 0;
var aciertos = 0;
let selected 
function init() {
    console.log(master);
    //1. Genera el código random del master
    AddNewRowResult(document.getElementById(ROWRESULTID));
    AddSelectFunction(document.querySelectorAll(USERCHOICESELECTOR));
    //2. Crea todas las filas según el número de intentos.
}
function AddNewRowResult(element){
    let html = element.innerHTML;
    element.innerHTML = ROW_RESULT+html;
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
function RemoveSelectFunction(selections){
    let clone;
    for(let i = 0; i<selections.length; i++){
        selections[i].classList.remove(SELECTED_CLASS);
        clone = selections[i].cloneNode(true);
        selections[i].parentNode.replaceChild(clone, selections[i]);
    }
}
/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha
introducido el usuario.
Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar() {
    userCombi = [];
    console.log(userCombi);
    let createNewBox;
    let result;
    let userChoiceBoxes = document.querySelectorAll(USERCHOICESELECTOR);
    let resultShowBoxes = document.querySelectorAll(CIRCLERESULTSELECTOR);
    RemoveSelectFunction(userChoiceBoxes);
    userCombi = GetUserCombi(userChoiceBoxes);
    result = GetFoundState(master, userCombi);
    console.log(result);
    console.log(userCombi);
    createNewBox = !AreAllCorrect(result);
    result = TranslateGroupResultToColor(result);
    ShowAnswer(resultShowBoxes,result);
    if(createNewBox){
        AddNewRowResult(document.getElementById(ROWRESULTID));
        AddSelectFunction(document.querySelectorAll(USERCHOICESELECTOR));
    }
    
}
function GetUserCombi(boxes){
    let combi = [];
    for(let element of boxes){
        combi.push(SearchColorClass(element));
    }
    return combi;
}
function SearchColorClass(searchTarget){
    for(let element of COLORS){
        if(searchTarget.classList.contains(element)){
            return element;
        }
    }
    return null;
}
function TranslateGroupResultToColor(answers){
    let translatedResult = Array(answers.length);
    for(let i in answers){
        translatedResult[i]=TranslateResultToColor(answers[i]);
    }
    return translatedResult;
}
function TranslateResultToColor(answer){
    switch(answer){
        case GREYANSWER:
            return GREY;
        case WHITEANSWER:
            return WHITE;
        case BLACKANSWER:
            return BLACK;
        default:
            return null;
    }
}
function ShowAnswer(elements, sequence){
    for(let i in sequence){
        elements[i].style.backgroundColor = sequence[i];
    }
}
/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
    let elements = document.querySelectorAll("."+SELECTED_CLASS);
    DeleteAllColors();
    for(let element of elements){
       element.classList.add(color);
    }
}
function DeleteAllColors(){
    for(let element of COLORS){
        DeleteColors(element);
    }
    DeleteColors(GREY);
}
function DeleteColors(color){
    let elements = document.querySelectorAll("."+SELECTED_CLASS);
    for(let element of elements){
        element.classList.remove(color);
    }
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
       <div class="celUserCombi flex grey"></div>
   </div>
   <div class="w25">
       <div class="celUserCombi flex grey"></div>
   </div>
   <div class="w25">
       <div class="celUserCombi flex grey"></div>
   </div>
   <div class="w25">
       <div class="celUserCombi flex grey"></div>
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
</div>
</div>`;