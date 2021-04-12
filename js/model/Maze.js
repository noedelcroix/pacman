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
                    case 0 :
                        this.layers[typeTile].setTile(new Position(row, column), new Tile(`${row} ${column}`));
                        break;
                    case 1 :
                        this.layers[typeTile].setTile(new Position(row, column), new Wall(`${row} ${column}`));
                        break;
                    
                    case 2 :
                        this.layers[typeTile].setTile(new Position(row, column), new Dot(`${row} ${column}`, false));
                        break;

                    case 3 :
                        this.layers[typeTile].setTile(new Position(row, column), new Dot(`${row} ${column}`, true));
                        break;

                    case 4:
                        this._pacmanRespawn = new Position(row, column);
                        break;
                }
            }
        }
    }

    /**
     * 
     * @param {Position} pos 
     * @returns {Wall} Wall Tile at the given position.
     */
    getWallLayerTile(pos){
        if(!this.layers[1].contains(pos)) throw "Position is not inside the board.";
        return this.layers[1].getTile(pos);
    }

    /**
     * 
     * @param {Position} pos 
     * @returns {Dot} Dot Tile at the given position.
     */
    getDotLayerTile(pos){
        if(!this.layers[1].contains(pos)) throw "Position is not inside the board.";
        return this.layers[2].getTile(pos) || this.layers[3].getTile(pos);
    }

    /**
     * 
     * @param {Position} position 
     * @returns {boolean} if the given Position is a wall or not.
     */
    canWalkOn(position){
        return this.layers[1].contains(position) && !this.layers[1].hasTile(position);
    }

    /**
     * 
     * @param {Position} position 
     * @returns {boolean} if the given Position contains a dot or not.
     */
    canPick(position){
        return this.layers[2].contains(position) && (this.layers[2].hasTile(position) || this.layers[3].hasTile(position));
    }

    /**
     * 
     * @param {Position} position 
     * @returns {Dot} the dot at the given Position.
     */
    pick(position){
        if(this.canPick(position)){
            return this.layers[2].getTile(position) || this.layers[3].getTile(position);
        }else{
            throw "No dot there.";
        }
    }

    /**
     * @returns {number} number of Maze rows.
     */
    get nbRows(){
        return this._rawMaze.table.length;
    }

    /**
     * @returns {number} number of Maze columns.
     */
    get nbColumns(){
        return this._rawMaze.table[0].length;
    }

    /**
     * @returns {Pacman} pacman respawn position.
     */
    get pacmanRespawn(){
        return this._pacmanRespawn;
    }
}