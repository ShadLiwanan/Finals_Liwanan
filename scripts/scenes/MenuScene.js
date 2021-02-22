export default class MenuScene extends Phaser.Scene {
    
    constructor() {
        super('MenuScene');
    }
    

    preload(){
    this.load.image('logo', './assets/images/logo.png');
    this.load.image('start', './assets/images/start.png');
    this.load.image('title', './assets/images/title.png');
    this.load.image('p1Instruction', './assets/images/Player1Instruction.png');
    this.load.image('p2Instruction', './assets/images/Player2Instruction.png');
    this.load.image('title', './assets/images/title.png');
    
    
    }

    create(){
    //Background 
    this.cameras.main.setBackgroundColor('#FFFFFF');
    //Game Logo
    this.add.image(500, 650, 'logo');
    //Game Title
    this.add.image(460,520, 'title');
    //Player 1 Instruction
    this.add.image(400, 650, 'p1Instruction');
    //Player 2 Instruction
    this.add.image(860, 650, 'p2Instruction');
    //Start Text
    let start = this.add.sprite(440,600, 'start');
    start.setInteractive();
    start.on('pointerdown', () => this.startButton());
    }
    startButton(pointer, start) {
        this.scene.start('GameScene');
    }
}
