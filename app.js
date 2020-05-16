
alert("Donnez une adresse Email: ");
const email = prompt("Email: ");
const result = verifierEmail(email);
if(result){
    alert("L' email est correct");
} else {
    alert("L'email est incorrecte");
}

/**
 * Verifie si l'adresse email passé en paramettre est correcte
 * @param {String} email
 * @returns {Boolean} 
 */
function verifierEmail(email) {
    if(hashArobaseOnMiddle(email)){
        if(hashPointOnMiddle(email.split("@")[1])){
            if(hasNotSpace(email)){
                return true;
            } else {
                return false;
            }
        } 
    } 
    return false;
}

//un tableau js
// let a = [1, 2, 3, 45]
// let test = a[0] --- test = 1

function hashArobaseOnMiddle(str){
    return hasOnMiddle(str, "@");
}

function hashPointOnMiddle(str){
    return hasOnMiddle(str, ".");
}

function hasOnMiddle(str, separator){
    const results = str.split(separator);
    if(results.length !== 2){
        return false;
    }
    if(results[0] == "" || results[1] == ""){
        return false;
    }
    return true;
}

/**
 * 
 * @param {String} str
 * @returns {Boolean} 
 */
function hasNotSpace(str){
    return str.replace(" ", "") == str;
}
