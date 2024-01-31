function PickSequence(options, lengthSequence){
    let pick =new Array(lengthSequence);

    for(let i = 0; i<pick.length; i++){
        pick[i] = options[Math.floor(Math.random()*pick.length)];
    }

    return pick;
}
function FindIndex(array, value){
    for(let i in array){
        if(value==array[i]){
            return i;
        }
    }
    return -1
}
function GetAmountDiferentValues(array){
let foundValues = {
}
for(let element of array){
    if(foundValues[element]==null){
        foundValues[element] = 1 
    }else{
        foundValues[element]++;
    }
    
}
return foundValues;
}
function GetFoundState(colorSequence, compareSequence){
    const notExists = -1, missplace = 0, correctPlace = 1;
    let foundValuesList = GetAmountDiferentValues(colorSequence);
    let compareResult = Array(colorSequence.length);
    for(let i in compareSequence){
        let colorIndex = FindIndex(colorSequence, compareSequence[i]);
        if(colorIndex==notExists){
            compareResult[i]=notExists;
        }else if(colorIndex!=i){
            if(foundValuesList[compareSequence[i]]>0){
                compareResult[i]=missplace;
                foundValuesList[compareSequence[i]]--;
            }else{
                compareResult[i]=notExists;
            }
        }else{
            compareResult[i]=correctPlace;
            foundValuesList[compareSequence[i]]--;
        }
        compareSequence[i]=null;
    }
    return compareResult;
}
function AreAllCorrect(getFoundStateResults){
    for(let element of getFoundStateResults){
        if(element!=1) return false;
    }
    return true;
}