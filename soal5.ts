function angryProfessor(k: number, a:number[]){
    let onTimeStudents = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] <= 0){
            onTimeStudents++;
        }
    }

    if(onTimeStudents >= k) return "YES"
    
    return "NO";
}

console.log(angryProfessor(3,[-2,-1,0,1,2]));