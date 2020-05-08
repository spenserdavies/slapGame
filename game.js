


var target = {
    name: "Eric",
    health: 100,
    hits: 0,
    inventory: [],
}

var items = {
    hamburger: {
        name: "Hamburger Patty",
        modifier: 1.25,
        description: "floppy and raw but it will do damage"
    },
    lightsaber: {
        name: "Lightsaber",
        modifier: 2,
        description: "the weapon of a jedi knight"
    },
    saggy: {
        name: "Saggy Pants",
        modifier: -0.5,
        description: "bad for damage, but +5 swag"
    }
}

function addMods(){
    let mod = 0;

    target.inventory.forEach(item => {
        mod += item.modifier;
    })
    return mod;
}





function giveBorger(){
    target.inventory.push(items.hamburger);    
}

function giveSaber(){
    target.inventory.push(items.lightsaber);
}

function pullPantsDown(){
    target.inventory.push(items.saggy);
}


function slap() {
    let damage = 1

    if (target.health > 0) {
        target.hits++;
        target.health -= damage + addMods();
        console.log("You slapped Eric");
        console.log("HP: " + target.health);
        // lowers HP by 1 on slap, increments hit count

        update()
    } else {
        target.health = 0;
        target.hits++;
        update()
        alert("look how they massacred my boy");
    }
}

function punch() {
    let damage = 5;

    if (target.health-5 >= 0) {
        target.hits++;
        target.health -= damage + addMods();
        console.log("You punched Eric");
        console.log("HP: " + target.health);
        // lowers HP by 5 on punch, increments hit count

        update()
    } else {
        target.health = 0;
        target.hits++;
        update()
        alert("look how they massacred my boy");
    }
}

function kick() {
    let damage=10;

    if (target.health-10 >= 0) {
        target.hits++;
        target.health -= damage + addMods() ;
        console.log("You kicked Eric");
        console.log("HP: " + target.health);
        // lowers HP by 10 on kick, increments hit count

        update()
    } else {
        target.health = 0;
        target.hits++;
        update()
        alert("look how they massacred my boy");
    }
}

function update() {
    let hpAlert = document.getElementById("health");
    hpAlert.innerText = target.health;
    //sets HP on screen to same as value

    let nameElem = document.getElementById("name");
    nameElem.innerText = target.name;
    //sets target's name

    let hitsElem = document.getElementById("hits");
    hitsElem.innerText = target.hits;

}

function reset(){
    target.health = 100;
    target.hits = 0;
    update()
}

update()