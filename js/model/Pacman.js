/**
* The powerful, the pleasurable, the indestructible Pacman.
*/
class Pacman extends Sprite {

    /**
    * @param {Position} position the initial position
    * @param {Direction} direction the initial direction
    */
    constructor(position, direction) {
        super(position, direction, PACMAN_ID);
        this._nbLives = NB_LIVES;
        this._isEnergizer = false;
    }

    /**
     * Declare Sprite death and remove a live.
     */
    hasBeenEaten() {
        super.hasBeenEaten();
        this._nbLives--;
    }

    /**
     * @returns number of lives
     */
    get nbLives() {
        return this._nbLives;
    }

    /**
     * Set is energized or not.
     * @param {boolean} bool 
     */
    setEnergized(bool) {
        this._isEnergizer = bool;
    }

    /**
     * Get is energized or not.
     * @returns {boolean} is energized 
     */
    get isEnergized() {
        return this._isEnergizer;
    }
}