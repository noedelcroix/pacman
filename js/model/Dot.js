/**
 * Dot extends Tile and is an eatable tile
 */
class Dot extends Tile{

    /**
     * id and isEnergizer needed
     * 
     * @param {string} id 
     * @param {boolean} isEnergizer 
     */
    constructor(id, isEnergizer) {
        super(id);
        this._isEnergizer = isEnergizer;
    }

    /**
     * @returns {boolean}
     */
    get isEnergizer() {
        return this._isEnergizer;
    }
}