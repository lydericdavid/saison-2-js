describe("Verifier la séparation", function() {
    var strs = [
        { value: "orpheenve@hotmail", separator: "@", resutl: true },
        { value: "@hotmail", separator: "@", resutl: false },
        { value: "orpheenve.ez", separator: ".", resutl: true },
        { value: "orpheenvehotmail", separator: "@", resutl: false },
    ];
  
    strs.forEach(str => {
        it("Test " + str.value, function() {
            expect(hasOnMiddle(str.value, str.separator)).toBe(str.resutl);
        });
    });
  });