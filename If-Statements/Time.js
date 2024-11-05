let huidigetijd = new Date();
console.log(huidigetijd.getHours());



if (huidigetijd.getHours() < 9 && huidigetijd.getHours() > 16) {
    console.log("Je bent vrij!");
}else{
    console.log("Oh potverdikkie je moet op school zijn!");
}