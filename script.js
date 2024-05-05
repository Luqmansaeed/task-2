function detailMarks(){

    let english = parseInt(document.querySelector("#english").value);
    let urdu = parseInt(document.querySelector("#urdu").value);
    let maths = parseInt(document.querySelector("#maths").value);
    let islamiyat = parseInt(document.querySelector("#islamiyat").value);
    let bio = parseInt(document.querySelector("#bio").value);
    let chemistry = parseInt(document.querySelector("#chemistry").value);
    let physics = parseInt(document.querySelector("#physics").value);
    let gernal = parseInt(document.querySelector("#gernal").value);
    let computer = parseInt(document.querySelector("#computer").value);
    let statistics = parseInt(document.querySelector("#statistics").value);
    
    let totals = parseInt(document.querySelector("#totals").value);
    
    let obtainmark = english + urdu + maths + bio + chemistry + physics + islamiyat + gernal + computer + statistics ;
    // let obtainmark = english + urdu + maths + bio + chemistry + physics + islamiyat + gernal + computer + statistics ;
    // let obtainmarks = `${english}${urdu}${maths}${bio}${chemistry}${physics}${islamiyat}${gernal}${computer}${statistics}`;
    let totalmarks = totals;
    let percentage = (obtainmark / totalmarks) * 100;
    
    if(percentage >= 80){
        document.querySelector("#obtainmarks").innerHTML = `Obtain Marks = ${obtainmark} `; 
        document.querySelector("#totals").innerHTML = `Totals marks = ${totalmarks} `; 
        document.querySelector("#percent").innerHTML = `Percentage = ${percentage}%  `; 
        document.querySelector("#grade").innerHTML = `Grade A1 `; 

    }else if(percentage >= 70){
        document.querySelector("#obtainmarks").innerHTML = `Obtain Marks = ${obtainmark}  `; 
        document.querySelector("#totals").innerHTML = `Totals marks = ${totalmarks}  `; 
        document.querySelector("#percent").innerHTML = `Percentage = ${percentage}% `; 
        document.querySelector("#grade").innerHTML = `Grade A `; 
    }else if(percentage >= 60){
        document.querySelector("#obtainmarks").innerHTML = `Obtain Marks = ${obtainmark} `; 
        document.querySelector("#totals").innerHTML = `Totals marks = ${totalmarks} `; 
        document.querySelector("#percent").innerHTML = `Percentage = ${percentage}% `; 
        document.querySelector("#grade").innerHTML = `You have Got Grade B `; 
    }else if(percentage >= 50){
        document.querySelector("#obtainmarks").innerHTML = `Obtain Marks = ${obtainmark} `; 
        document.querySelector("#totals").innerHTML = `Totals marks = ${totalmarks} `; 
        document.querySelector("#percent").innerHTML = `Percentage = ${percentage}% `; 
        document.querySelector("#grade").innerHTML = `You have Got Grade C `; 
    }else if(percentage >= 40){
        document.querySelector("#obtainmarks").innerHTML = `Obtain Marks = ${obtainmark} `; 
        document.querySelector("#totals").innerHTML = `Totals marks = ${totalmarks} `; 
        document.querySelector("#percent").innerHTML = `Percentage = ${percentage}% `; 
        document.querySelector("#grade").innerHTML = `You have Got Grade D `; 
    }else{
        document.querySelector("#obtainmarks").innerHTML = `Allah  `; 
        document.querySelector("#totals").innerHTML = `Allah `; 
        document.querySelector("#percent").innerHTML = `khair `;
        document.querySelector("#grade").innerHTML = `Code problem `; 
    }
}
