/**
 * Controller for pacman Model.
 */
class PacmanCtrl {
    /**
     * 
     * @param {Pacman} pacman 
     */
    constructor(pacman) {
        this._pacman = pacman;
    }

    /**
     * Set asked next direction.
     * 
     * @param {Direction} direction 
     */
    askToChangeDirection(direction) {
        this._pacman.askToChangeDirection(direction);
    }
}