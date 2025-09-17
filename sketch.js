// let ellipseX;
// let ellipseDir;


function setup() {
    createCanvas(windowWidth, windowHeight)
    // ellipseX = 0;
    // ellipseDir = 18;
  
}

function draw() {
    background(120);
    // ellipse(ellipseX, 10, 150);

    // if(ellipseX > width){
    //     ellipseDir = -18 ;
    // }
  
    

    // if(ellipseX < 0){
    //     ellipseDir = 1 ;
    // }

    // ellipseX= ellipseX + ellipseDir;

    for(let n = 0; n < 1000; n=n+20){
        console.log(n);
        // ellipse(mouseX, mouseY, mouseX);
        ellipse(mouseX, height/2, n);
    }

    

   

}