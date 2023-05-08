let person = {
    name: "Christian",
    email: "test@mail.com",
    age: 19,
    workExperience: [
        {name: "Integrado"},
        {name: "Coamo"}
    ]
}

console.log(person.name);
console.log(person["name"]);
console.log()

function isGreaterThan10(num){
    if (num > 10){
        return true;
    }else if (num === 10){
        return "É igual a 10";
    }else{
        return "Menor que 10";
    }
}

console.log(isGreaterThan10(10));
console.log()

function isGreaterThan101(num2){
    switch(num2){
        case 10:
            return "10";
        case 9:
            return "9";
        default :
            return "Não conheço";
    }
}
console.log(isGreaterThan101(10));
console.log()

let names = ["Igor", "Pedro", "João", "Maria"]
/*function teste(names){
    for (let name of names/*Object.values(person)*){
        console.log(name);
    }
}*/
names.forEach((name, idx, arr) => {
    console.log(idx, name, arr)
})
console.log()



const sum = (a, b, fn) => {
    const result = a+b;
    fn(result);
}
sum(1, 2, (result) => {
    console.log(result)
});
console.log()


