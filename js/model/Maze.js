/**
 * 
 * Maze is a group of Layer to represent the maze.
 */
class Maze{
    /**
     * Create an array of Layer and full it with Tile from RAW_MAZE template.
     * 
     * @param {Object} rawMaze 
     */
    constructor(rawMaze){
        this._numberLayers = 5;
        this._rawMaze = rawMaze;
        this.layers = [];

        for(let i=0; i<this._numberLayers+1; i++) this.layers.push(new Layer(this._rawMaze.table.length, this._rawMaze.table[0].length));

        for (let row = 0; row < this._rawMaze.table.length; row++) {
            for (let column = 0; column < this._rawMaze.table[row].length; column++) {
                let typeTile = this._rawMaze.table[row][column];

                switch (typeTile){
                    /*case 0 : case 4 : case 5 :
                        this.layers[typeTile].setTile(new Position(row, column), new Tile(`${row} ${column}`));
                        break;*/
                    case 1 :
                        this.layers[typeTile].setTile(new Position(row, column), new Wall(`${row} ${column}`));
                        break;
                    
                    case 2 :
                        this.layers[typeTile].setTile(new Position(row, column), new Dot(`${row} ${column}`, false));
                        break;

                    /*case 3 :
                        this.layers[typeTile].setTile(new Position(row, column), new Dot(`${row} ${column}`, true));
                        break;*/
                }
            }
        }
    }

    /**
     * 
     * @param {Position} pos 
     * @returns Wall Tile at the given position.
     */
    getWallLayerTile(pos){
        if(!this.layers[1].contains(pos)) throw "Position is not inside the board.";
        return this.layers[1].getTile(pos);
    }

    /**
     * 
     * @param {Position} pos 
     * @returns Dot Tile at the given position.
     */
    getDotLayerTile(pos){
        if(!this.layers[1].contains(pos)) throw "Position is not inside the board.";
        return this.layers[2].getTile(pos);
    }

    /**
     * @returns number of Maze rows.
     */
    get rows(){
        return this._rawMaze.table.length;
    }

    /**
     * @returns number of Maze columns.
     */
    get columns(){
        return this._rawMaze.table[0].length;
    }
}