function age(){
    let year= new Date().getFullYear();
    let birth= 2003;
    let now= year - birth;
    
    console.log("het is nu " + year + ". Ik ben geboren in " + birth + ". Wat betekent dat ik nu" + now + " jaar oud ben.");
    return;
}

console.log(age());
