let huidigetijd = new Date(); // dit zoekt de tijd en datum van dit moment op.
console.log(huidigetijd.getHours());


if (huidigetijd.getHours() <9 ) 
{
    console.log("Je hoeft nog niet naar school!");
}
else if (huidigetijd.getHours() > 9){
    console.log("SCHOOL TIJD!");
}else if (huidigetijd.getHours() > 16){
    console.log("VRIJE TIJD!!");
}