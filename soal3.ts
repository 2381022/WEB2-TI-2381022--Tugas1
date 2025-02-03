function countCamelCase(camelCaseText : string):number{
    let countWords : number = 1;

    for(let i = 0; i < camelCaseText.length; i++){
        let asciiVal = camelCaseText.charCodeAt(i);
        if(asciiVal >= 65 && asciiVal <= 90){
            countWords++;
        }
    }

    return countWords;
}

console.log(countCamelCase("saveChangesInTheEditor"));