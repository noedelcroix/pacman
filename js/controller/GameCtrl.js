/**
 * Call and generate the game and the view.
 */
class GameCtrl {
    constructor() {
        this._game = new Game(RAW_MAZE);
        this._view = new GameView(this._game);
        this._pacmanCtrl = new PacmanCtrl(this._game.pacman);
        this._pacmanView = new PacmanView(this._pacmanCtrl);
    }

    /**
     * Start the move of pacman, update lives and pacman display and display game over.
     */
    run() {
        this._view.updateLives();
        this._timer = setInterval(() => {
            this._game.moveSprites();
            if (this._game.pacman.isDead) {
                this._view.updateLives();
                if (!this._game.isGameOver()) {
                    this._game.respawn();
                } else {
                    console.log("GAME_OVER");
                    clearInterval(this._timer);
                }
            }
            this._view.updateFrame();
        }, RUN_INTERVAL);
    }
}