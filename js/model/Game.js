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
     * Move sprite following the good direction (asked direction or current direction).
     */
    moveSprites(){
        if(this._pacman.askedToChangeDirection && this._maze.canWalkOn(this._pacman.position.nextPosition(this._pacman.askedDirection))){
            this._pacman.changeDirection();
        }
        if(this._maze.canWalkOn(this._pacman.position.nextPosition(this._pacman.direction))){
        this._pacman.move();
        }
    }
}