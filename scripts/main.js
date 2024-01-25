window.addEventListener("load", (Event) =>{
    init();
});

function init(){
    const colors = ["red","blue","yellow","green", "black", "white"];
    const AmountColors = 4;
    let getSequence = PickSequence(colors, AmountColors);
    FillSelections(document.getElementsByClassName("colorPicker"), colors);
    document.getElementById("checkColor").addEventListener("click", (Event) =>{
        ShowInContainer(document.getElementsByClassName("colorPicker"),document.getElementById("PreviousOptions"), "Colors",getSequence);
    });
}

function ShowInContainer(selectFields, showContainer, subContainerClass, sequence){
    
    let subContainer = document.createElement("div");
    let colorDecider = GetFoundState(sequence, DocumentsFormValuesToString(selectFields));
    subContainer.setAttribute("class", subContainerClass);
    for(let i = 0; i<selectFields.length; i++){
        let colorShow = document.createElement("p");
        colorShow.innerHTML = selectFields[i].value;
        subContainer.appendChild(colorShow);
    }
    showContainer.appendChild(subContainer);
}

function TranslateToClass(value){
    const MissAnswer = -1, ExistsAnswer = 0, WrongAnswer=1;
    const MissClass = "MissColor",ExistsClass = "ExistsColor", RightClass = "RightColor";
    if(value==MissAnswer){
        return MissClass;
    }else if (value==ExistsAnswer){
        return ExistsClass;
    }else if(value==WrongAnswer){
        return WrongAnswer;
    }
    return "";
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
