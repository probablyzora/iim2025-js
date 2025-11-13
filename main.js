// // console.log("Hello, World!");

// // var myname = "Oliwier";
// // var myage = 21;
// // let rndmnumber = 69
// // console.log("Je m'appelle " + myname + " et I have " + myage + " years of experience in living.");
// // console.log(`Je m'appelle ${myname} et I have ${myage} years of experience in living `);
// // console.log(rndmnumber * 3)

// // var doorOpen = true

// // if (doorOpen) {
// //     console.log(`Porte ouverte`)
// // } else {
// //     console.log(`Porte fermée`)
// // }

// // let yourname = prompt(`Your name?`)
// // console.log(`your name is ${yourname}`)

// // var code = 6969

// // let codeAttempt = prompt(`enter the code`)
// // if (codeAttempt == code) {
// //     console.log("🎉");
// // } else {
// //     console.log(`🙁`)
// // }

// function helloWorld(){
//     console.log(`Hello World`)
//     return;
// }

// helloWorld()

// function helloPrenom(prenom){
//     console.log(`hello ${prenom}`)
//     return
// }
// helloPrenom("hi")

// function addition(a,b,c){
//     if (c){
//     console.log(a+b)
//     }
//     else {
//         console.log(a-b)
//     }
// }
// addition(10,10,true)
// addition(10,10,false)

// function compte(){
//     mot = prompt(`mot`)
//     for (let index = 1; index < 6; index++) {
//         console.log(mot);
        
//     }
// }

// function promptAndPrint()
// {
//     let number = prompt(`Choissisez un nombre`)
//     number = parseInt(number)

//     if (isNaN(number) || number <=0)
//     {
//         console.log(`Veuillez choisir un nombre positif`)
//         return;
//     }
//     for (let i = 1; i < number+14; i++) {
//         console.log(i)
//     }
// }
// promptAndPrint()

// // Exercice 6 

function boutique(name, startingMoney, productNumber, productPrice)
{
    let currentMoney = startingMoney
    let productLeft = productNumber
    let purchasedProduct = 0
    let soldOut = false

    while (currentMoney >= productPrice && productLeft > 0)
    {
        currentMoney -= productPrice
        productLeft -= 1
        purchasedProduct += 1
    }

    if (productLeft === 0){
        soldOut = true
    }

    console.log(`${name} a pu acheter ${purchasedProduct} produits et il lui reste ${currentMoney} euros`)
    if (soldOut === true)
    {
        console.log(`Le produit est en rupture de stock, il reste ${productLeft} produits`)
    }
    else
    {
        console.log(`Le produit est toujours disponible, il reste ${productLeft}`)
    }
}
boutique("Remi",200,10,19.99)


let fruits = [`pomme`, `poire`,`banane`]
console.log(fruits[0])
fruits.forEach(function (fruit) {
    console.log(fruit)
})
fruits.forEach(fruit => console.log(fruit))

let student ={
    name: "Oli",
    age: 21,
    city: "Feuch",
}
console.log(student.name,student.age,student.city)

// Exercice 4

let alice = {
  nom: "Alice",
  age: 23,
  sentMsg: false
}

// Exercice 5

let jean = {
  nom: "Jean",
  age: 45,
  sentMsg: false
}

let heddi = {
  nom: "Heddi",
  age: 25,
  sentMsg: false
}

let manon = {
  nom: "Manon",
  age: 20,
  sentMsg: false
}

let lucas = {
  nom: "Lucas",
  age: 17,
  sentMsg: false
}

let personnes = [jean, heddi, manon, lucas]

// Exercice 6

function estMajeur(age) {
  return age >= 18;
}

for (let i = 0; i < personnes.length; i++) {
  const personne = personnes[i]
  if (estMajeur(personne.age)) {
    personne.sentMsg = true
  }
}

for (const personne of personnes) {
  if (estMajeur(personne.age)) {
    personne.sentMsg = true
  }
}

console.log(`
  Toutes les invitations ont été envoyées, sauf aux personnes mineures : 
  ${personnes.filter(personne => personne.age < 18).map(personne => personne.nom).join(', ')}
`);
