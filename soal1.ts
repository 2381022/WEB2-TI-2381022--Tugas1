function countNumOfValley(steps : number, path : string){
    let countValley = 0;
    let temp : string = "";
    for(let i = 0; i < steps; i++){

        if(path[i] == "D"){
            temp += "D";
        }else{
            temp = "";
        }

        if(temp == "DD"){
            countValley++;
            temp = "";
        }

    }
    return countValley;
}

let numOfValley = countNumOfValley(8,"UDDDUDUU");

console.log(numOfValley);