// wraping case in new block statementRule 

let a = 1;

switch (x){
    case 1:{
        let foo;
        break;
    }
    case 2:{
        let foo;
        break;
    }
}

// Scooping rule 

function varTest(){
    var x=1;
    {
        var x=2; // same variable
        console.log(x);
    }
    {
        console.log(x);
    }
}

function letTest(){
    let x = 1;
    {
        let x=2; //different variable
        console.log(x);
    }
    {
        console.log(x);
    }
}

function test(){
    var foo=33;
    if(foo){
        let foo = foo + '33'; //ReferenceError
    }
}

function testUndefined(t){
    if(t == undefined){
        return "undefined Value";
    }
}
let x;

console.log(test(x));


const car = {type:'flate', color:"white", size:"xl", model:"xyz"};

car.color = "red";
car.owner = "jhon";