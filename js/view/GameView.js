/**
 * Display game
 */
class GameView{
    /**
     * Display game from Game model and resize the scene and tiles.
     * @param {Game} game 
     */
    constructor(game){
        this._game = game;
        $("#game").width(this._game.maze.nbColumns*tileSize).height(this._game.maze.nbRows*tileSize);

        for (let row = 0; row < this._game.maze.nbRows; row++) {
            for (let column = 0; column < this._game.maze.nbColumns; column++) {
                if(typeof this._game.maze.getWallLayerTile(new Position(row, column)) != 'undefined'){
                        $('<div class="wall"></div>').appendTo("#game").css({
                            "top": `${(row * tileSize)}px`,
                            "left": `${(column * tileSize)}px`,
                            "width": `${tileSize}px`,
                            "height": `${tileSize}px`
                        });
                    }else if(typeof this._game.maze.getDotLayerTile(new Position(row, column)) != 'undefined'){
                        if(this._game.maze.getDotLayerTile(new Position(row, column)).isEnergizer){
                        $('<div class="pacDot energizer"><span></span></div>').appendTo("#game").css({
                            "top": `${(row * tileSize)}px`,
                            "left": `${(column * tileSize)}px`,
                            "width": `${tileSize}px`,
                            "height": `${tileSize}px`
                        });
                    }else{
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

            $('<div class="pacman WEST"><span></span></div>').appendTo("#game").css({
                "top": `${(this._game.maze.pacmanRespawn.row * tileSize)}px`,
                "left": `${(this._game.maze.pacmanRespawn.column * tileSize)}px`,
                "width": `${tileSize}px`,
                "height": `${tileSize}px`
            });

            this._game.ghosts.forEach((ghost)=>{
                $(`<div class="ghost" id="${ghost.id}"><span></span></div>`).appendTo("#game").css({
                    "top": `${(this._game.maze.ghostsRespawn.row * tileSize)}px`,
                    "left": `${(this._game.maze.ghostsRespawn.column * tileSize)}px`,
                    "width": `${tileSize}px`,
                    "height": `${tileSize}px`
                });
            })
        }

        /**
         * refresh pacman and ghosts position display
         */
        updateFrame(){
            $(".pacman").css({
                "top": `${(this._game.pacman.position.row * tileSize)}px`,
                "left": `${(this._game.pacman.position.column * tileSize)}px`
            });

            this._game.ghosts.forEach((ghost)=>{
                $(`#${ghost.id}`).css({
                    "top": `${(ghost.position.row * tileSize)}px`,
                    "left": `${(ghost.position.column * tileSize)}px`
                })
            });
        }

        /**
         * refresh lives
         */
         updateLives(){
             $("footer").text("");
            for(let i=0; i<this._game.pacman.nbLives; i++){
                $("footer").append("<div class='live'></div>");
            }
         }
    }