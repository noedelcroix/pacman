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

    /**
     * Get if pacman is energized or not.
     * 
     * @returns {boolean} isEnergized
     */
    get isEnergized() {
        return this._pacman.isEnergized;
    }
}