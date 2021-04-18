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
}