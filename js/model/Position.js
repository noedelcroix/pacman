/**
 * Position for Tile, Dot or Wall
 */
class Position {
    /**
     * 
     * @param {number} row 
     * @param {number} column 
     */
    constructor(row, column) {
        this._row = row;
        this._column = column;
    }

    /**
     * @returns {number}
     */
    get row() {
        return this._row;
    }

    /**
     * @returns {number}
     */
    get column() {
        return this._column;
    }

    /**
     * 
     * @param {Direction} direction 
     * @returns next direction following passed Direction.
     */
    nextPosition(direction){
        return new Position(this._row+direction.deltaRow, this._column+direction.deltaColumn);
    }
}