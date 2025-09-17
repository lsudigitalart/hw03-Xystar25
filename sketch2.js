// let randomGrey;
// let randomColorR;
// let randomColorG;
// let randomColorB;


// function setup(){
//     createCanvas(400, 400);
//     randomGrey = random(0, 255);
//     randomColorR = random(0, 255);
//     randomColorG = random(0, 255);
//     randomColorB = random(0, 255);

// }

// function draw(){
//     background(randomColorR, randomColorG, randomColorB);
// }

let shapeStar;


function setup(){
    createCanvas(500, 500);
    background(0);
    fill(255)

    // for(var i = 0; i < 1000; i+=50) {
    //     fill(random(255), random(255), random(255));
    //     square(i, 50, 50);
    // }
    
// ????idk

    for(let n = 0; n < 1000; n=n+0){
        console.log(n);
        shapeStar = ellipse(mouseX, mouseY, n);
        // ellipseStar(mouseX, mouseY, mouseX);
        // ellipseStar(mouseX, height/2, n);
    }

}

function draw(){
//     background(randomColorR, randomColorG, randomColorB);

    
    
}