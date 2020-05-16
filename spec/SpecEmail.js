describe("Verifier l'adresse Email", function() {
    var emails = [
        { value: "orpheenve@hotmail.com", resutl: true },
        { value: "a @a.com", resutl: false},
        { value: "b@", resutl: false},
        { value: "x.com", resutl: false}
    ];
  
    emails.forEach(email => {
        it("Test " + email.value, function() {
            expect(verifierEmail(email.value)).toBe(email.resutl);
        });
    });
  });