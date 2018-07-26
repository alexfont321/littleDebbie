const cupcakes = {
    flavor: "chocolate",
    description: "Moist, delicious chocolate cupcake filled with creme and topped with a rich, chocolaty icing and a decorative swirl.",
    amount: 8, 
    filling: true
};

function saveDatabase (object, nametag) {
    const strigifiedObject = JSON.stringify(object);
    localStorage.setItem(nametag, strigifiedObject)
};

////////////////////////


const pecanSpinwheels = {
        flavor: "pecan",
        description: "A soft, fun pastry rolled with cinnamon spice and pecans.",
        amount: 8,
        filling: false
    };
    
const starCrunch = {
        flavor: "chocolate",
        description: "A soft, chewy cookie topped with caramel and crispy rice then covered in a layer of fudge.",
        amount: 12,
        filling: false,
    };
    
function objectCreator (flavor, description, amount, filling) {
        newObject = {
            flavor: flavor,
            description: description,
            amount: amount,
            filling: filling
        }
        return newObject
    };
const fudgeRound = objectCreator("chocolate", "Creamy light fudge between two rich chocolate cookies and topped with a wave of fudge icing.", 8, true);
    
const arrayForDebbie = [pecanSpinwheels, starCrunch, fudgeRound];
// console.log(arrayForDebbie);    



function popluateDatabase () {
    saveDatabase(cupcakes, "debbieCupcakes");
    saveDatabase(arrayForDebbie, "snacksAgain");
}