/**
 * Table de multiplication par 2
 * 2 x 1 = 2
 * 2 x 2 = 4
 * ...
 * 
 * Table de multiplication par 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ...
 * 
 * ...
 * ...
 * 
 * Table de multiplication par 10

 * 
 * 
 */

for (let i = 2; i <= 100; i++) {
    affichetableMultiplication(i);
    console.log("\n")
}





function affichetableMultiplication(numero) {
    console.log("table de multiplication par " + numero);
    for (let i = 1; i <= 10; i++) {
        let produit = i * numero;
        console.log(numero + " x " + i + " = " + produit);
    }

}



