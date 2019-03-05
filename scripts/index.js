// console.log("helloo");

logger.init()
function transl33t(originalString){
    const leetDictionary = {
        A: 4,
        E: 3,
        G: 6,
        I: 1,
        O: 0,
        S: 5,
        T: 7,
    };
    let result = '';
    for (let i = 0; i < originalString.length;i++){
        let theLetter = originalString[i].toUpperCase();
        if (leetDictionary[theLetter] !== undefined){
            result += leetDictionary[theLetter];
        }
        else{
            result += theLetter
        }
    }
    return result;

}
// console.log(transl33t("cats love fast vacuums"))

const adressBook = {
    DigitalCrafts:{
        phone: "404-123-1234",
        address: "3423 Piedmont",
        city: "Atlanta",
    },
    "Chris yeah":{
        phone: "303-234-5964",
        address:"3421 Piedmont",
        city: "Atlanta",
    },
};

console.log(adressBook["Chris yeah"].address)
