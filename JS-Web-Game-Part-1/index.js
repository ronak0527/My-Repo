let greenCharacter = document.createElement("img");
greenCharacter.src = "assets/green-character.gif";
greenCharacter.style.position = "fixed";
greenCharacter.style.left = "100px";
greenCharacter.style.bottom = "100px";
document.body.append(greenCharacter);

let pineTree = document.createElement("img");
pineTree.src = "assets/pine-tree.png";
pineTree.style.position = "fixed";
pineTree.style.left = "450px";
pineTree.style.bottom = "200px";
document.body.append(pineTree);

function newimage(posX, posY, newImage) {
    let image = document.createElement("img");
    image.src = newImage;
    image.style.position = "fixed";
    image.style.left = posX;
    image.style.bottom = posY;
    document.body.append(image);
}

newimage("200px", "300px", "assets/tree.png");
newimage("350px", "100px", "assets/pillar.png");
newimage("150px", "200px", "assets/crate.png");
newimage("500px", "425px", "assets/well.png");

function newItem(posX, posY, newImage) {
    let image = document.createElement("img");
    image.src = newImage;
    image.style.position = "fixed";
    image.style.left = posX;
    image.style.bottom = posY;
    document.body.append(image);
    image.addEventListener("click", function () {
        image.remove();
    });
}

newItem("500px", "405px", "assets/sword.png");
newItem("165px", "185px", "assets/sheild.png");
newItem("600px", "100px", "assets/staff.png");