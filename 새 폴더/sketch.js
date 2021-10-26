const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const waveHeight = 200
let circle
let angle = 0

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    circle = createCircle()
}

function draw(){
    //background(30)
    updateCircle(circle, angle)
    drawCircle(circle)
    angle += 0.01
}


const updateCircle = (circle) => {
    circle.x = angle * 100
    circle.y = sin(angle) * waveHeight + canvasHeight/2


}


const createCircle =() => {
    return {
        x: canvasWidth/2,
        y: canvasHeight/2,
        size: 100,
        color: [120, 0, 120],
    }
}

const drawCircle = (circle) => {
    fill(circle.color)
    ellipse(circle.x, circle.y, circle.size)
}

//1014