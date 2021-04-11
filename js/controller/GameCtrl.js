/**
 * Call and generate thegame and the view
 */
class GameCtrl{
    constructor(){
        const game = new Game(RAW_MAZE);
        const view = new GameView(game);
    }
}