let person = {
    name: "Christian",
    email: "test@gmail.com", 
    age: 19,
    workExperience: [
        {name: "Integrado"},
        {name: "CrediCoamo"},
        {name: "Distribuidora"}
    ]
}//objeto

console.log(person.name)
console.log(person["name"])
console.log()   


let names = ["Christian", "Joao", "Pedro", "Kauan"]//é um objeto tambem
/*function teste(names) {
    for(let name of names/*Object.values(person)){
        console.log(name)
    }
}*/
const callback = ((name, idx, array) => {
    console.log(idx, name, array)
})

names.forEach(callback);

//callbacks
/*function callback(value){
    console.log(value);
}*/

const sum = (a, b, fn) => {
    const result = a + b;
    fn(result)
}

console.log()
sum(1, 2, (result) => {
    console.log(result)
})



/*function valorIgual10(num) {//cases
    switch(num) {
        case 10:
            return "Igual a 10"
        case 9:
            return "9"
        default: 
            return "Não é igual"
    }
}

console.log(valorIgual10(10))*/