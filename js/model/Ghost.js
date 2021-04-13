/**
 * Ghost extends Sprite and is the ghost Model.
 */
class Ghost extends Sprite{
    /**
     * 
     * @param {Position} position 
     * @param {Direction} direction 
     * @param {String} id 
     */
    constructor(position, direction, id){
        super(position, direction, id);
        setInterval(()=>{
            this._choiceNewDirection();
        }, REFRESH_CHANGE_DIRECTION_GHOSTS);
    }

    /**
     * Choose a random Direction in the 4 possible Directions.
     */
    _choiceNewDirection(){
        this._directions = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST];
        this._randNumber = Math.floor(Math.random() * this._directions.length);

        this.askToChangeDirection(this._directions[this._randNumber]);
    }

    /**
     * 
     * @param {Pacman} pacman 
     * @returns if the Pacman is eatable by this ghost.
     */
    canEat(pacman){
        return(
            JSON.stringify(this.position) === JSON.stringify(pacman.position) ||
            (JSON.stringify(this.previousPosition) === JSON.stringify(pacman.position) && JSON.stringify(this.position) === JSON.stringify(pacman.previousPosition))
        )
    }

    /**
     * Choose a new Direction when is near a wall.
     */
    notifyIsBlocked(){
        this._choiceNewDirection();
    }
}