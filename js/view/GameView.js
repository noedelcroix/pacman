/**
 * Display game
 */
class GameView{
    /**
     * Display game from Game model and resize the scene and tiles.
     * @param {Game} game 
     */
    constructor(game, gameCtrl){
        this._game = game;
        this._gameCtrl = gameCtrl;
        $("#game").width(this._game.maze.nbColumns*tileSize).height(this._game.maze.nbRows*tileSize);

        for (let row = 0; row < this._game.maze.nbRows; row++) {
            for (let column = 0; column < this._game.maze.nbColumns; column++) {
                this._displayTiles(row, column);
                }
            }

            this._displayPacman();
            this._displayGhost();
            this.displayGameOver();

            this._displayStart();

            $("#Start").on("click", ()=>this.startGame());
        }

        /**
         * Display Tiles on the beginning of game or level
         * 
         * @param {number} row 
         * @param {number} column 
         */
        _displayTiles(row, column){
            if(typeof this._game.maze.getWallLayerTile(new Position(row, column)) != 'undefined'){
                $('<div class="wall"></div>').appendTo("#game").css({
                    "top": `${(row * tileSize)}px`,
                    "left": `${(column * tileSize)}px`,
                    "width": `${tileSize}px`,
                    "height": `${tileSize}px`
                });
            }else if(typeof this._game.maze.getDotLayerTile(new Position(row, column)) != 'undefined'){
                if(this._game.maze.getDotLayerTile(new Position(row, column)).isEnergizer){
                $(`<div class="pacDot energizer" id="${this._game.maze.getDotLayerTile(new Position(row, column)).id}"><span></span></div>`).appendTo("#game").css({
                    "top": `${(row * tileSize)}px`,
                    "left": `${(column * tileSize)}px`,
                    "width": `${tileSize}px`,
                    "height": `${tileSize}px`
                });
            }else{
                $(`<div class="pacDot"  id="${this._game.maze.getDotLayerTile(new Position(row, column)).id}"><span></span></div>`).appendTo("#game").css({
                    "top": `${(row * tileSize)}px`,
                    "left": `${(column * tileSize)}px`,
                    "width": `${tileSize}px`,
                    "height": `${tileSize}px`
                });
            }
            }
        }

        /**
         * Display Pacman on the beginning of game or level
         */
        _displayPacman(){
            $('<div class="pacman WEST"><span></span></div>').appendTo("#game").css({
                "top": `${(this._game.maze.pacmanRespawn.row * tileSize)}px`,
                "left": `${(this._game.maze.pacmanRespawn.column * tileSize)}px`,
                "width": `${tileSize}px`,
                "height": `${tileSize}px`
            });
        }

        /**
         * display start button
         */
        _displayStart(){
            $("#game").append("<input type='button' id='Start' value='Start' alt='Start' title='Start' />");
        }

        /**
         * Display Ghosts on the beginning of game or level
         */
        _displayGhost(){
            this._game.ghosts.forEach((ghost)=>{
                $(`<div class="ghost" id="${ghost.id}"><span></span></div>`).appendTo("#game").css({
                    "top": `${(this._game.maze.ghostsRespawn.row * tileSize)}px`,
                    "left": `${(this._game.maze.ghostsRespawn.column * tileSize)}px`,
                    "width": `${tileSize}px`,
                    "height": `${tileSize}px`
                });
            });
        }

        /**
         * Update board by removing removed dots and updating the current score
         */
        _checkRemovedDotAndUpdateScore(){
                $(`#${this._game.removedDot.id}`).remove();
                $("#currentScore").text(this._game.score);
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

            this._checkRemovedDotAndUpdateScore();
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

         /**
          * Display highScore
          */
         displayGameOver(){
            $("#highScore span").empty().text(this._game.highScore);
            console.log("GAME OVER !");
         }

         /**
          * Go to next level
          */
         nextLevel(){
             $("#game *").remove();

             for (let row = 0; row < this._game.maze.nbRows; row++) {
                for (let column = 0; column < this._game.maze.nbColumns; column++) {
                    this._displayTiles(row, column);
                    }
                }

                this._displayPacman();
                this._displayGhost();
                this.displayGameOver();
         }

         /**
          * Start game
          */
         startGame(){
            $("#Start").css("display", "none");

            this._gameCtrl.startHasBeenRequested();
         }
    }