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
     * @returns {number} row
     */
    get row() {
        return this._row;
    }

    /**
     * @returns {number} column
     */
    get column() {
        return this._column;
    }

    /**
     * 
     * @param {Direction} direction 
     * @returns {Direction} next direction following passed Direction.
     */
    nextPosition(direction){
        return new Position(this._row+direction.deltaRow, this._column+direction.deltaColumn);
    }
}