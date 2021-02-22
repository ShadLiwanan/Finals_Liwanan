export default class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
        
        
    }

init (){
    this.ball;
    this.player1;
    this.player2;
    this.initialVelocityX = (Math.random() * 150) + 100;
    this.initialVelocityY = (Math.random() * 150) + 100;
    this.GameStart = false;
    this.player1Victory;
    this.player2Victory;
    this.keys = {};
}


preload (){
    //Preloading assets
    this.load.image('ball', './assets/images/ball.png');
    this.load.image('paddle', './assets/images/paddle.png');
}

create (){
    
    //Ball Sprite
    this.ball = this.physics.add.sprite(
        this.physics.world.bounds.width /2, 
        this.physics.world.bounds.height /2 , 
        'ball');
    //Collision for ball
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1,1);
    
    //Paddle Sprites with Collision
    this.player1 = this.physics.add.sprite(
        this.physics.world.bounds.width - (this.ball.body.width / 2 + 1),   
        this.physics.world.bounds.height / 2, 
        'paddle');
    this.player1.setCollideWorldBounds(true);
    this.player1.setImmovable(true);    


    this.player2 = this.physics.add.sprite(
        this.ball.body.width / 2 + 1,  
        this.physics.world.bounds.height / 2, 
        'paddle')
    this.player2.setCollideWorldBounds(true);    
    this.player2.setImmovable(true);   
    
    //Movement Keys for Arrows
    this.cursors = this.input.keyboard.createCursorKeys();

    //Movement Keys for WS
    this.keys.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keys.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);


    //Collision for sprites
    this.physics.add.collider(this.ball, this.player1);
    this.physics.add.collider(this.ball, this.player2);

    //Player 1 Victory Text
    this.player1Victory = this.add.text(
        this.physics.world.bounds.width / 2,
        this.physics.world.bounds.height / 2,
        'PLAYER 1 WINS'
    );
    this.player1Victory.setOrigin(.5);
    this.player1Victory.setVisible(false);
    
    //Player 2 Victory Text
    this.player2Victory = this.add.text(
        this.physics.world.bounds.width / 2,
        this.physics.world.bounds.height / 2,
        'PLAYER 2 WINS'
    );
    this.player2Victory.setOrigin(.5);
    this.player2Victory.setVisible(false);    
    
    
}

update (){
    //Update function for ball bounce
    if (!this.GameStart) {
    this.ball.setVelocityX(this.initialVelocityX);    
    this.ball.setVelocityY(this.initialVelocityY);
    this.GameStart = true; 
    }

    //Ball out of bounds
    if (this.ball.body.x > this.player1.body.x) {
        this.player1Victory.setVisible(true);
        this.ball.setVelocityX(0);    
        this.ball.setVelocityY(0);
    }
    if (this.ball.body.x < this.player2.body.x) {
        this.player2Victory.setVisible(true);
        this.ball.setVelocityX(0);    
        this.ball.setVelocityY(0);
    }

    //Reset Velocity for Paddles
    this.player1.body.setVelocityY(0);
    this.player2.body.setVelocityY(0);

    //Up key for Arrows
    if (this.cursors.up.isDown){
        this.player1.body.setVelocityY(-350)
    }
    //Down Key Arrows
    if (this.cursors.down.isDown){
        this.player1.body.setVelocityY(350)

    }
     //Up key for W
     if (this.keys.w.isDown){
        this.player2.body.setVelocityY(-350)
    }
    //Down Key for S
    if (this.keys.s.isDown){
        this.player2.body.setVelocityY(350)
    }
}
}

