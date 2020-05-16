describe("Verifier l'espace", function() {
    var strings = [
        { value: "", resutl: true },
        { value: "azdskd", resutl: true},
        { value: "bonjour tous", resutl: false},
    ];
  
    strings.forEach(str => {
        it("Test " + str.value, function() {
            expect(hasNotSpace(str.value)).toBe(str.resutl);
        });
    });
  });