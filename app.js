'use-strict' // pour verifier la bonne pratique.
var email = "orpheenve@hotmail.com";
verifier_email ("toto;tutu;titi;")
verifier_email(email);


function verifier_email(email) {
    var parts = email.split('@');
    console.log (parts);

}

