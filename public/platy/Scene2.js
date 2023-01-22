class Scene2 extends Phaser.Scene{
    constructor(){
        super("gameOver");
    }

    create(){
        this.background = this.add.tileSprite(0,0, config.width, config.height,
            "background");
        this.background.setScale(4);
        this.add.text(20, 20, "Game Over... Your score: " + score, {font: "25px Courier", fill: "white"});
        this.add.text(500, 550, "...press spacebar to replay"), {font: "20px Courier", fill: "white"};
        this.player = this.physics.add.sprite(config.width/2, config.height/2, "player");
        this.player.setScale(10);
        
        this.cursors = this.input.keyboard.createCursorKeys();
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        this.player.play("explosion");
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
            score = 0;
            this.scene.start("playGame");
        }
    }

}