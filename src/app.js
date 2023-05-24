var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = (canvas.width = 500);
var CANVAS_HEIGHT = (canvas.height = 1000);
var numberOfEnemies = 100;
var enemiesArray = [];
var enemyImage = new Image();
enemyImage.src = './assets/images/enemy1.png';
var Enemy = /** @class */ (function () {
    function Enemy() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
        this.speed = Math.random() * 4 - 2;
    }
    Enemy.prototype.update = function () {
        this.x = this.x + this.speed;
        this.y = this.y + this.speed;
    };
    Enemy.prototype.draw = function () {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(enemyImage, this.x, this.y, this.width, this.height);
    };
    return Enemy;
}());
for (var index = 0; index < numberOfEnemies; index++) {
    enemiesArray.push(new Enemy());
}
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(function (enemy) {
        enemy.update();
        enemy.draw();
    });
    requestAnimationFrame(animate);
}
animate();
