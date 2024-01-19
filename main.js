window.addEventListener("load", (Event) =>{
    init();
});

function init(){
    const colors = ["red","blue","yellow","green", "black", "white"];
    const AmountColors = 4;
    let getSequence = PickSequence(colors, AmountColors);
    console.log(GetAmountDiferentValues(getSequence));
    FillSelections(document.getElementsByClassName("colorPicker"), colors);
    document.getElementById("checkColor").addEventListener("click", (Event) =>{
        ShowInContainer(document.getElementsByClassName("colorPicker"),document.getElementById("PreviousOptions"), "Colors");
    })
}

function ShowInContainer(selectFields, showContainer, subContainerClass){
    let subContainer = document.createElement("div");
    subContainer.setAttribute("class", subContainerClass);
    for(let i = 0; i<selectFields.length; i++){
        let colorShow = document.createElement("p");
        colorShow.innerHTML = selectFields[i].value;
        subContainer.appendChild(colorShow);
    }
    showContainer.appendChild(subContainer);
}

function FillSelections(selectFields, options){
    for(let i = 0; i < selectFields.length; i++){
        FillSelection(selectFields[i],options);
    }
}
function FillSelection(selectField, options){
    
    for(let i = 0; i<options.length; i++){
        let option = document.createElement("option");
        option.setAttribute("value", options[i]);
        option.innerHTML=options[i];
        selectField.appendChild(option);
    }
}
function PickSequence(options, lengthSequence){
    let pick =new Array(lengthSequence);

    for(let i = 0; i<pick.length; i++){
        pick[i] = options[Math.floor(Math.random()*pick.length)];
    }

    return pick;
}
function FindIndex(array, value){
    for(let i = 0; i<array.length; i++){
        if(value==array[i]){
            return i;
        }
    }
    return -1
}
function GetAmountDiferentValues(array){
let foundValues = {
}
for(let i = 0; i<array.length; i++){
    if(foundValues[array[i]]==null){
        foundValues[array[i]] = 1 
    }else{
        foundValues[array[i]]++;
    }
    
}
return foundValues;
}