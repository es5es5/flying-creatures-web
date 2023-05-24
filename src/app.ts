const canvas = document.getElementById('canvas1') as HTMLCanvasElement
const ctx = canvas.getContext('2d')!

const CANVAS_WIDTH = (canvas.width = 500)
const CANVAS_HEIGHT = (canvas.height = 1000)
const numberOfEnemies = 100
const enemiesArray = [] as Enemy[]

const enemyImage = new Image()
enemyImage.src = './assets/images/enemy1.png'

class Enemy {
  x: number
  y: number
  width: number
  height: number
  speed: number

  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.width = 100
    this.height = 100
    this.speed = Math.random() * 4 - 2
  }

  update() {
    this.x = this.x + this.speed
    this.y = this.y + this.speed
  }

  draw() {
    ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(enemyImage, this.x, this.y, this.width, this.height)
  }
}

for (let index = 0; index < numberOfEnemies; index++) {
  enemiesArray.push(new Enemy())
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  enemiesArray.forEach((enemy) => {
    enemy.update()
    enemy.draw()
  })
  requestAnimationFrame(animate)
}

animate()
