var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var stars;
var walls;

function preload() {
    game.load.image('star', 'assets/star.png');
    game.load.image('wall', 'assets/wall.png');
}

function create() {
    stars = game.add.group()
    stars.enableBody = true;

    var star;

    for (var i = 0; i < 1; i++) {
        star = stars.create(game.world.width / 2, game.world.height / 2, 'star');
        star.body.collideWorldBounds = true;

        star.body.velocity.setTo(500, 3000);

        star.body.bounce.setTo(1);

        star.anchor.setTo(0.5);
    }

    // Walls
    walls = game.add.group()
    walls.enableBody = true;

    var wall1 = walls.create(0, 0, 'wall');
    wall1.width = 25;
    wall1.height = game.world.height;
    wall1.body.immovable = true;
    var wall2 = walls.create(game.world.width - 25, 0, 'wall');
    wall2.width = 25;
    wall2.height = game.world.height;
    wall2.body.immovable = true;
    var wall3 = walls.create(0, 0, 'wall');
    wall3.width = game.world.width;
    wall3.height = 25;
    wall3.body.immovable = true;
    var wall4 = walls.create(0, game.world.height - 25, 'wall');
    wall4.width = game.world.width;
    wall4.height = 25;
    wall4.body.immovable = true;
}

function update() {
    game.physics.arcade.collide(stars, walls);
}
