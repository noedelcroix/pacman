/**
 * Call and generate the game and the view.
 */
class GameCtrl {
    constructor() {
        this._game = new Game(RAW_MAZE);
        this._view = new GameView(this._game, this);
        this._pacmanCtrl = new PacmanCtrl(this._game.pacman);
        this._pacmanView = new PacmanView(this._pacmanCtrl);
    }

    /**
     * Check if game over
     */
    _checkGameOver(){
        if (this._game.pacman.isDead) {
            this._view.updateLives();
            if (!this._game.isGameOver()) {
                this._game.respawn();
            } else {
                clearInterval(this._timer);
                this._game.saveScore();
                this._view.displayGameOver();
            }
        }
    }

    /**
     * Check if it's the end of level
     */
    _checkEndLevel(){
        if(this._game.lvlSucceed()){
            this._game.nextLevel();
            this._view.nextLevel();
            this._pacmanCtrl = new PacmanCtrl(this._game.pacman);
            this._pacmanView = new PacmanView(this._pacmanCtrl);
        }
    }

    /**
     * Start the move of pacman, update lives and pacman display and display game over.
     */
    run() {
        this._view.updateLives();
        this._timer = setInterval(() => {
            this._game.moveSprites();
            this._checkGameOver();
            this._checkEndLevel();
            this._view.updateFrame();
        }, RUN_INTERVAL);
    }

    /**
     * Start request
     */
    startHasBeenRequested(){
        this.run();
    }
}