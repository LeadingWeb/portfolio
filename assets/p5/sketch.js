let n = 0;
let c = 3;
let scaleFactor = 0.001;
let scalePlusEl = 0.005;
let x, y;
let ellD = 4;
const baseAngle = 137;
let $main, $canvas;

function setup() {
    $main = document.querySelector('.main');
    // console.log($main)
    let wi = $main.offsetWidth;
    let hi = $main.offsetHeight;
    $canvas = createCanvas(wi, hi);
    $canvas.parent('main');
    
    // $main.appendChild($canvas);
    angleMode(DEGREES);
    colorMode(HSB);
    background(23);
    
}

function draw() {
    let mouseScale = mouseX / windowWidth;
    let scale = mouseScale * 0.8;
    let val = baseAngle + scale;
    
    
    if(x >= 0 && x < width && y >= 0 && y < height || x == undefined && y == undefined) {
        let a = n * val;
        let r = c * sqrt(n);
        
        x = r * cos(a) + width / 2;
        y = r * sin(a) + height / 2;
        
        fill(r % 256, 50, (a % 256) * 0.6);
        ellipse(x, y, ellD, ellD);
        ellD += scaleFactor + scalePlusEl;
        c += scaleFactor;
        n++;
        
    }
    
}

function mouseWheel(event) {
    if (event.delta > 0) {
        scaleFactor += 0.001;
        scalePlusEl += 0.01
        // console.log(ellD)
    } else {
        if (scaleFactor > 0.001)
        scaleFactor -= 0.001;
        // console.log(ellD)
        
    }
    
}

function windowResized() {
    scaleFactor = 0.001;
    scalePlusEl = 0.005;
    n = 0;
    let wi = $main.offsetWidth;
    let hi = $main.offsetHeight;
    resizeCanvas(wi, hi);
    x = 0;
    y = 0;
    background(23);
}
