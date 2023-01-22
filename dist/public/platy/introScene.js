class introScene extends Phaser.Scene{
    constructor(){
        super("intro");
    }


    preload(){
        this.load.image("background", "assets/space2.png");
        this.load.image("player", "assets/main.png");
    }

    create(){
        this.background = this.add.tileSprite(0,0, config.width, config.height,
            "background");
        this.background.setOrigin(0,0);
        this.background.setScale(4);
        this.player = this.physics.add.sprite(config.width/2, config.height/2, "player");
        this.player.setScale(10);
        this.add.text(20, 20, "Too far behind enemy lines, Commander.\n\nWe'll have to shoot our way out...",
        {font: "25px Courier", fill: "white"});
        this.add.text(500, 550, "...press spacebar to begin"), {font: "20px Courier", fill: "white"};
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


    }

    update(){
        this.background.tilePositionY -= 1;
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
            score = 0;
            this.scene.start("playGame");
        }
    }

    nextScene(){
        this.scene.start('playGame');
    }
}