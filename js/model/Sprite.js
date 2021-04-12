/**
 * A Sprite is a moving Component.
 */
class Sprite extends Component{

    /**
     * Set properties
     * 
     * @param {Position} position 
     * @param {Direction} direction 
     * @param {String} id 
     */
    constructor(position, direction, id){
        super(id);
        this._position = position;
        this._direction = direction;

        this._askedToChangeDirection = false;
        this._askedDirection;
    }

    /**
     * @returns {Position} position
     */
    get position(){
        return this._position;
    }

    /**
     * @returns {Direction} direction
     */
    get direction(){
        return this._direction;
    }

    /**
     * @returns {boolean} asked or not to change direction
     */
    get askedToChangeDirection(){
        return this._askedToChangeDirection;
    }

    /**
     * @returns {Direction} asked direction
     */
    get askedDirection(){
        return this._askedDirection;
    }

    /**
     * Move the Sprite in the Direction property.
     */
    move(){
        this._position = this._position.nextPosition(this._direction);
    }

    /**
     * Set asked next direction.
     * 
     * @param {Direction} direction 
     */
    askToChangeDirection(direction){
        this._askedToChangeDirection = true;
        this._askedDirection = direction;
    }

    /**
     * change the current direction to asked next direction.
     */
    changeDirection(){
        this._direction = this.askedDirection;
        this._askedToChangeDirection = false;

        switch(this._direction){
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
}