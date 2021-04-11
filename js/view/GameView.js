/**
 * Display game
 */
class GameView{
    /**
     * Display game from Game model and resize the scene and tiles.
     * @param {Game} game 
     */
    constructor(game){
        $("#game").width(game.maze.nbColumns*tileSize).height(game.maze.nbRows*tileSize);

        for (let row = 0; row < game.maze.nbRows; row++) {
            for (let column = 0; column < game.maze.nbColumns; column++) {
                if(typeof game.maze.getWallLayerTile(new Position(row, column)) != 'undefined'){
                        $('<div class="wall"></div>').appendTo("#game").css({
                            "top": `${(row * tileSize)}px`,
                            "left": `${(column * tileSize)}px`,
                            "width": `${tileSize}px`,
                            "height": `${tileSize}px`
                        });
                    }else if(typeof game.maze.getDotLayerTile(new Position(row, column)) != 'undefined'){
                        $('<div class="pacDot"><span></span></div>').appendTo("#game").css({
                            "top": `${(row * tileSize)}px`,
                            "left": `${(column * tileSize)}px`,
                            "width": `${tileSize}px`,
                            "height": `${tileSize}px`
                        });
                    }
                }
            }
        }
    }