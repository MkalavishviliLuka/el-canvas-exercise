const canavs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = screen.width;
const CANVAS_HEIGHT = canvas.height = screen.height;

let gameSpeed = 10;
let gameFrame = 0;

onload = () => {
    const slider = document.getElementById('slider');
    slider.oninput = (e) => {
        gameSpeed = e.target.value;
    };

    const backgroundLayer1 = new Image();
    backgroundLayer1.src = 'assets/images/layer-1.png';
    const backgroundLayer2 = new Image();
    backgroundLayer2.src = 'assets/images/layer-2.png';
    const backgroundLayer3 = new Image();
    backgroundLayer3.src = 'assets/images/layer-3.png';
    const backgroundLayer4 = new Image();
    backgroundLayer4.src = 'assets/images/layer-4.png';
    const backgroundLayer5 = new Image();
    backgroundLayer5.src = 'assets/images/layer-5.png';

    class Layer {
        constructor(image, speedModifier) {
            this.x = 0;
            this.y = 0;
            this.width = 1667;
            this.height = 500;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }

        update() {
            this.speed = gameSpeed * this.speedModifier;
            if(this.x <= -this.width){
                this.x = 0
            }
            this.x = Math.floor(this.x - this.speed)
        }

        draw() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }

    const layer1 = new Layer(backgroundLayer1, 0.1);
    const layer2 = new Layer(backgroundLayer2, 0.3);
    const layer3 = new Layer(backgroundLayer3, 0.2);
    const layer4 = new Layer(backgroundLayer4, 0.1);
    const layer5 = new Layer(backgroundLayer5, 0.3);

    const gameObjects = [layer1, layer2, layer3, layer4, layer5];

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        gameObjects.forEach(layer => {
            layer.update();
            layer.draw();
        });
        gameFrame--;

        requestAnimationFrame(animate);
    }

    animate();
};