// let number = 0;
// const input = document.querySelector(".input");
// const button = document.querySelector(".btn");
// const checked = document.querySelector("#checked");
// let div = document.querySelector(".color");


// let conecté = false;

// let isConected = conecté ? "vous êtes connecté" : "vous n'êtes pas connecté";
// console.log(isConected);

// // let divideByFife = number % 5 === 0 ? "il est divisible par 5" : "il n'est pas divisible par 5";
// // console.log(divideByFife);

// checked.addEventListener("change", () => {
//     divideByFife = checked.value === "oui" ? "vous este conevté" : "vous n'êtes pas connecté";
//     console.log(divideByFife);
// });

// checked.addEventListener("change", () => {
//     if (checked.value === "oui") {
//         div.classList.add("green");
//         div.classList.remove("red");
//     } else {
//         div.classList.add("red");
//         div.classList.remove("green");
//     };
// });

// let divideByFife = number > 0 ? "numbre negatif" : number == 0 ? "null" : "numbre positif";
// console.log(divideByFife);




// let age = prompt("quel age avez vous ?");
// console.log(age);
// let message = age >= 18 && age <= 50 ? "vous pouvais passer votre permis" : age < 18 ? "vous este trop jeune" : age > 50 ? "vous este trop vieux" : "tapez un age valide";

// alert(message);




// let mois = prompt("tapper un mois");

// switch (mois) {
//     case "mars":
//     case "avril":
//     case "mai":
//         console.log("Printemps");
//         break;
//     case "Juin":
//     case "Juillet":
//     case "Août":
//         console.log("Été");
//         break;
//     case "Septembre":
//     case "Octobre":
//     case "Novembre":
//         console.log("Automne");
//         break;
//     case "Décembre":
//     case "Janvier":
//     case "Février":
//         console.log("Hiver");
//         break;
//     default:
//         console.log("pas bien");
//         break;
// }



// let chiffre = parseInt(prompt("entrez un chiffre"));
// let chiffre2 = parseInt(prompt("entrez un autre chiffre"));
// let operator = prompt("entrez un operateur");

// switch (operator) {
//     case "+":
//         console.log(chiffre + chiffre2);
//         break;
//     case "-":
//         console.log(chiffre - chiffre2);
//         break;
//     case "/":
//         chiffre2 !== 0 ? console.log(chiffre / chiffre2) : console.log("on ne divise pas par 0");
//         break;
//     case "*":
//         console.log(chiffre * chiffre2);
//         break;
//     default:
//         console.log("Operateur non valide");
//         break;
// }



// i = parseInt(prompt("entrez un chiffre entre 0 et 10"));
// if (i > 10 || i < 0) {
//     console.log("pas bien!");

// } else {
//     while (i >= 0) {

//         console.log(i);
//         i--
//     }
// }



// let chifre = 8;
// let devine;
// while (devine != chifre) {
//     devine = parseInt(prompt("Devine chifrele: 0 a 20  "))
//     if (devine > chifre) {
//         devine = parseInt(prompt("votre chifre est plus grand, essayez encore: "));
//     } else if (devine < chifre) {
//         devine = parseInt(prompt("votre chifre est plus petit, essayez encore: "));
//     } else {
//         alert("bravooo!");
//     }

// }

// let chiffre = parseInt(prompt("tapper un chiffre entre 0 et 10"));
// if (chiffre > 10 || chiffre < 0) {
//     console.log("not good");

// } else {
//     for (let i = chiffre; i >= 0; i--) {
//         console.log(i);

//     }
// }
// let bravo = 8;
// let chiffre;


// for (let i = 0; chiffre != bravo; i++) {
//     chiffre = parseInt(prompt("tapper un chiffre entre 0 et 10"));
//     if (chiffre > 10 || chiffre < 0) {
//         alert("le chiffre doit être entre 0 et 10");
//     } else if (chiffre > bravo) {
//         alert("votre chiffre est trop grand, essayez encore: ");
//     } else if (chiffre < bravo) {
//         alert("votre chiffre est trop petit, essayez encore: ");
//     } else {
//         alert("bravo!");
//     }
// }


// let array = ["JS", "est", "super", "cool"];
// console.log(array.join(" "));

// let phrase = "Apprenez-javascript-avec-plaisir";
// console.log(phrase.split("-"));

// let user = prompt("tappe une color");
// let array = ["rouge", "vert", "vlanc", "orange"];
// let result = user.toLowerCase();
// if (array.includes(result)) {
//     alert("l'index de " + result + " et " + array.indexOf(result));
// } else {
//     alert("la color n'est pas dnas la liste")
// }


// function saluer(name) {
//     name = "Magib"
//     return alert("bonjour " + name)
// }

// saluer()

// function estPair(chiffre) {
//     return chiffre % 2 === 0;
// }

// console.log(estPair(8));

function blabla(note) {
    if (note >= 16) {
        return console.log("exellent");

    } else if (note >= 12 && note <= 15) {
        return console.log("bien");

    } else if (note >= 8 && note <= 11) {
        return console.log("possible");

    } else {
        return console.log("Insuffisant");

    }

}

blabla(18);
