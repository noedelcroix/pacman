/**
 * Call and generate the game and the view.
 */
class GameCtrl{
    constructor(){
        this._game = new Game(RAW_MAZE);
        this._view = new GameView(this._game);
        this._pacmanCtrl = new PacmanCtrl(this._game.pacman);
        this._pacmanView = new PacmanView(this._pacmanCtrl);
    }

    /**
     * Start the move of pacman.
     */
    run() {
        this._timer = setInterval(() => {
        this._game.moveSprites();
        this._view.updateFrame();
        }, RUN_INTERVAL);
        }
}