/**
 * Screen of project
 */
class Game{
    /**
     * 
     * @param {Object} rawMaze 
     */
    constructor(rawMaze){
        this._maze = new Maze(rawMaze);
    }

    /**
     * @returns maze
     */
    get maze(){
        return this._maze;
    }
}