import { spriteAnimations, animationStates } from "./animationData.js"

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image();
playerImage.src = 'assets/images/shadow_dog.png'

let playerState = 'idle'
document.getElementById('animation-state').onchange = (e)=>{
    playerState = e.target.value
}

const spriteWidth = 575
const spriteHeight = 523

let gameFrame = 0
const staggerFrames = 5

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let i = 0; i < state.frames; i++){
        let x = i * spriteWidth
        let y = index * spriteHeight
        frames.loc.push({x, y})
    }
    spriteAnimations[state.name] = frames
})

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length
    let frameX = spriteAnimations[playerState].loc[position].x
    let frameY = spriteAnimations[playerState].loc[position].y

    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dy)
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

    gameFrame++
    requestAnimationFrame(animate)
}

animate()