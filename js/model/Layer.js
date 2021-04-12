/**
 * Layer is a screen over the board with the same type of objects.
 */
class Layer {

    /**
     * 
     * @param {number} nbRows 
     * @param {number} nbColumns 
     */
    constructor(nbRows, nbColumns) {
        this._array = Array(nbRows).fill().map(() => Array(nbColumns));
    }

    /**
     * 
     * @param {Position} pos 
     * @returns {boolean} contains or not
     */
    contains(pos) {
        return 0 <= pos.row && pos.row < this._array.length && 0 <= pos.column && pos.column < this._array[0].length;
    }

    /**
     * @param {Position} pos
     * @param {Tile} tile
     */
    setTile(pos, tile) {
        if (!this.contains(pos)) throw "Position is not inside the board.";
        this._array[pos.row][pos.column] = tile;
    }

    /**
     * 
     * @param {Position} pos 
     * @returns {Tile} tile
     */
    getTile(pos) {
        if (!this.contains(pos)) throw "Position is not inside the board.";
        return this._array[pos.row][pos.column];
    }

    /**
     * 
     * @param {Position} pos 
     * @returns {boolean} hasTile or not
     */
    hasTile(pos) {
        if (!this.contains(pos)) throw "Position is not inside the board.";
        return typeof this._array[pos.row][pos.column] != 'undefined';
    }
}