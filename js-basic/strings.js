// indice começa com 0(zero) 0123456...

let umaString = "O rato roeu a roupa do rei de roma";

//console.log(umaString.charAt(3));
console.log(umaString.concat(" Um belo dia"));
console.log(umaString.indexOf("texto"));
console.log(umaString.indexOf("o", 3));
console.log(umaString.lastIndexOf("m", 3));
console.log(umaString.match(/[a-z]/g)); //expressão regular
console.log(umaString.search("x"));
console.log(umaString.replace(/r/g, "#"));
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-5));
console.log(umaString.substring(umaString.length - 5));
console.log(umaString.split(" "));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
