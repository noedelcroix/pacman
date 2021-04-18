/**
 * A Sprite is a moving Component.
 */
class Sprite extends Component {

    /**
     * Set properties
     * 
     * @param {Position} position 
     * @param {Direction} direction 
     * @param {String} id 
     */
    constructor(position, direction, id) {
        super(id);
        this._position = position;
        this._initPosition = position;
        this._direction = direction;
        this._initDirection = direction;

        this._askedToChangeDirection = false;
        this._askedDirection;
        this._previousPosition = position;
        this._isDead = false;
    }

    /**
     * Move the Sprite in the Direction property.
     */
    move() {
        this._previousPosition = this._position;
        this._position = this._position.nextPosition(this._direction);
    }

    /**
     * Set asked next direction.
     * 
     * @param {Direction} direction 
     */
    askToChangeDirection(direction) {
        this._askedToChangeDirection = true;
        this._askedDirection = direction;
    }

    /**
     * change the current direction to asked next direction.
     */
    changeDirection() {
        this._previousPosition = this._position;
        this._direction = this.askedDirection;
        this._askedToChangeDirection = false;
        this.move();
    }

    /**
     * Have to be override in Ghost class.
     */
    notifyIsBlocked() {

    }

    /**
     * Declare Sprite death
     */
    hasBeenEaten() {
        this._isDead = true;
    }

    /**
     * Respawn this Sprite
     */
    respawn() {
        this._isDead = false;
        this._position = this._initPosition;
        this._direction = this._initDirection;
    }

    /**
     * @returns {Position} position
     */
    get position() {
        return this._position;
    }

    /**
     * @returns {Direction} direction
     */
    get direction() {
        return this._direction;
    }

    /**
     * @returns {boolean} asked or not to change direction
     */
    get askedToChangeDirection() {
        return this._askedToChangeDirection;
    }

    /**
     * @returns {Direction} asked direction
     */
    get askedDirection() {
        return this._askedDirection;
    }

    /**
     * @returns {boolean} isDead
     */
    get isDead() {
        return this._isDead;
    }

    /**
     * @returns {Position} previousPosition
     */
    get previousPosition() {
        return this._previousPosition;
    }
}