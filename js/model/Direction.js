/**
 * Direction class define a direction of any Spire.
 */
class Direction{
    /**
     * 
     * @param {number} deltaColumn 
     * @param {number} deltaRow 
     */
    constructor(deltaRow, deltaColumn){
        this._deltaColumn = deltaColumn;
        this._deltaRow = deltaRow;
    }

    /**
     * @returns {number} deltaColumn
     */
    get deltaColumn(){
        return this._deltaColumn;
    }

    /**
     * @returns {number} deltaRow
     */
    get deltaRow(){
        return this._deltaRow;
    }
}

/**
 * Constants
 */
Direction.NORTH = new Direction(-1, 0);
Direction.SOUTH = new Direction(1, 0);
Direction.WEST = new Direction(0, -1);
Direction.EAST = new Direction(0, 1);