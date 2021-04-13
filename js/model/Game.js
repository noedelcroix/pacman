/**
 * Screen of project
 */
class Game{
    /**
     * 
     * @param {Object} rawMaze 
     */
    constructor(rawMaze){
        this._maze = new Maze(rawMaze);
        this._pacman = new Pacman(this._maze.pacmanRespawn, Direction.WEST);
        this._ghosts = [];

        for(let i=0; i<NB_GHOSTS; i++){
            this._ghosts.push(new Ghost(this._maze.ghostsRespawn, Direction.WEST, `ghost${i}`));
        }
    }

    /**
     * @returns {Maze} maze
     */
    get maze(){
        return this._maze;
    }

    /**
     * @returns {Pacman} pacman
     */
     get pacman(){
        return this._pacman;
    }

    /**
     * Move pacman following the good direction (asked direction or current direction).
     */
    _movePacman(){
        if(this._pacman.askedToChangeDirection && this._maze.canWalkOn(this._pacman.position.nextPosition(this._pacman.askedDirection))){
            this._pacman.changeDirection();
            switch(this._pacman.direction){
                case Direction.NORTH:
                    $(".pacman").removeClass("SOUTH NORTH EAST WEST").addClass("NORTH");
                    break;
                case Direction.SOUTH:
                    $(".pacman").removeClass("SOUTH NORTH EAST WEST").addClass("SOUTH");
                    break;
                case Direction.WEST:
                    $(".pacman").removeClass("SOUTH NORTH EAST WEST").addClass("WEST");
                    break;
                case Direction.EAST:
                    $(".pacman").removeClass("SOUTH NORTH EAST WEST").addClass("EAST");
                    break;
            }
        }
        if(this._maze.canWalkOn(this._pacman.position.nextPosition(this._pacman.direction))){
        this._pacman.move();
        }
    }

    /**
     * Move all ghosts following the good direction (asked direction or current direction).
     */
    _moveGhosts(){
        this._ghosts.every(ghost => {
            if(ghost.askedToChangeDirection && this._maze.canWalkOn(ghost.position.nextPosition(ghost.askedDirection))){
                ghost.changeDirection();
            }
            if(this._maze.canWalkOn(ghost.position.nextPosition(ghost.direction))){
            ghost.move();
            }

            if(ghost.canEat(this._pacman)){
                console.log("GAME OVER");
                return false;
            }else{
                return true;
            }
        });
    }

    /**
     * Move sprite following the good direction (asked direction or current direction).
     */
    moveSprites(){
        this._movePacman();
        this._moveGhosts();
    }
}