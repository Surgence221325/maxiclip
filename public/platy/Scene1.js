let score = 0;
let scoreText = `Score: ${score}`;

class Scene1 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }

    preload(){
        this.load.image("bullet", "assets/bullet.png")
        this.load.image("battlecruiser", "assets/enemy-battlecruiser.png");
        this.load.image("torpedo", "assets/enemy-torpedo.png");
        this.load.image("fighter", "assets/enemy-fighter.png");
        this.load.image("frigate", "assets/enemy-frigate.png");
        this.load.image("scout", "assets/enemy-scout.png");
        this.load.image("support", "assets/enemy-support.png");
        this.load.image("bomber", "assets/enemy-bomber.png");
        this.load.image("dreadnought", "assets/enemy-dreadnought.png");
        this.load.image("laser-bolt-good", "assets/laser-bolt-good.png");

        this.load.audio("music", "assets/spacemusic.mp3");

        this.load.spritesheet("laser-bolt", "assets/laser-bolts.png",{
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("explosion", "assets/explosion.png",{
            frameWidth: 16,
            frameHeight: 16
        });

    }

    create(){

        this.music = this.sound.add("music");
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 1,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.music.play(musicConfig);

        this.background = this.add.tileSprite(0,0, config.width, config.height,
            "background");
        this.background.setOrigin(0,0);
        this.background.setScale(2);
        
        scoreText = this.add.text(20, 20, "Score: 0",
            {font: "25px Courier", fill: "white"});

        this.player = this.physics.add.sprite(config.width/2, config.height-50, "player");
        this.player.setScale(2);
        
        this.enemies = this.physics.add.group()
        this.battlecruiser = this.enemies.create(Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height/2),
            "battlecruiser")
        this.battlecruiser.setScale(2);
        this.battlecruiser.flipY = true;
        this.torpedo = this.enemies.create(Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height/2),
            "torpedo")
        this.torpedo.setScale(2);
        this.torpedo.flipY = true;
        this.fighter = this.enemies.create(Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height/2),
            "fighter")
        this.fighter.setScale(2);
        this.fighter.flipY = true;  
        this.frigate = this.enemies.create(Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height/2),
            "frigate")
        this.frigate.setScale(3);
        this.frigate.flipY = true;
        this.scout = this.enemies.create(Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height/2),
            "scout")
        this.scout.setScale(2);
        this.scout.flipY = true;
        this.support = this.enemies.create(Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height/2),
            "support")
        this.support.setScale(2);
        this.support.flipY = true;
        this.dreadnought = this.enemies.create(Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height/2),
            "dreadnought")
        this.dreadnought.setScale(3);
        this.dreadnought.flipY = true;
        this.bomber = this.enemies.create(Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height/2),
            "bomber")
        this.bomber.setScale(2);
        this.bomber.flipY = true;





        this.physics.add.collider(this.player, this.enemies, this.hitPlayer, null, this);

        this.bullets = this.physics.add.group();
        this.physics.add.collider(this.enemies, this.bullets, this.hitEnemy, null, this);

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        /*this.anims.create({
            key: 'bullet',
            frames: this.anims.generateFrameNumbers('bullet', {start: 0, end: 1}),
            frameRate: 10,
            repeat: -1
            })*/

        this.anims.create({
            key: 'explosion',
            frames: this.anims.generateFrameNumbers('explosion', {start: 0, end: 3}),
            frameRate: 10,
            repeat: 0,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'shoot',
            frames: this.anims.generateFrameNumbers('bullet', {start: 0, end: 1}),
            frameRate: 10,
            repeat: 0,
            hideOnComplete: true
        });
        

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    hitEnemy(enemy, bullet){
        this.resetShipPos(enemy);
        bullet.destroy();
        this.updateScore();
    }

    updateScore(){
        score += 1;
        scoreText.setText("Score: " + score);
    }

    hitPlayer(ship, enemy){
        this.physics.pause();  
        //ship.play('explosion');
        this.scene.start("gameOver");
    }

    moveEnemy(ship, speed){
        ship.y += speed;
        if (ship.y > config.height){
            this.resetShipPos(ship);
        }
    }

    moveEnemyY(ship, speed){
        ship.x += speed;
        if (ship.x > config.height){
            this.resetShipPosX(ship);
        }
    }

    update(){
        this.moveEnemy(this.battlecruiser, 2);
        this.moveEnemy(this.torpedo, 4);
        this.moveEnemy(this.fighter, 6);
        this.moveEnemy(this.bomber, 5);
        this.moveEnemy(this.dreadnought, 1);
        this.moveEnemy(this.scout, 8);
        this.moveEnemy(this.support, 3);
        this.moveEnemy(this.frigate, 3);
        this.background.tilePositionY -= 0.5;

        this.movePlayer(this.player);
        this.playerShoot(this.player);

        this.music.play();
    }

    playerShoot(ship){
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
            var bullet = this.bullets.create(ship.x, ship.y-40, 'laser-bolt-good');
            bullet.setVelocityY(-100);
            console.log(bullet);
        }
    }

    resetShipPos(ship){
        ship.y = -25;
        var randomX = Phaser.Math.Between(0, config.width);
        ship.x = randomX;
    }

    resetShipPosX(ship){
        ship.x = -100;
        var randomX = Phaser.Math.Between(0, config.width);
        ship.x = randomX;
    }

    movePlayer(ship){
        this.music.play();
        if (this.cursors.left.isDown){
            ship.x -= 4;
        }
        else if (this.cursors.right.isDown){
            ship.x += 4; 
        }
        else if (this.cursors.up.isDown){
            ship.y -= 4;
        }
        else if (this.cursors.down.isDown){
            ship.y += 4;
        }
        this.resetPlayerPos(ship);
    }

    resetPlayerPos(ship){
        if (ship.x > config.width){
            ship.x = 0;
        }
        else if (ship.x < 0){
            ship.x = config.width;
        }
    }
}