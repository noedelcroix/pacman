/**
 * Screen of project
 */
class Game {
    /**
     * 
     * @param {Object} rawMaze 
     */
    constructor(rawMaze) {
        this._rawMaze = rawMaze;
        this._maze = new Maze(this._rawMaze);
        this._pacman = new Pacman(this._maze.pacmanRespawn, Direction.WEST);
        this._ghosts = [];
        this._score = 0;
        this._removedDot = this._pacman.position;

        for (let i = 0; i < NB_GHOSTS; i++) {
            this._ghosts.push(new Ghost(this._maze.ghostsRespawn, Direction.WEST, `ghost${i}`));
        }

        this._highScore = localStorage.getItem("highScore") || 0;
    }

    /**
     * Remove dot and add points to score
     */
    _checkDot() {
        if (this._maze.canPick(this._pacman.position)) {
            this._removedDot = this._maze.pick(this._pacman.position);

            if (this._removedDot.isEnergizer) {
                this._score += 100;
            } else {
                this._score += 10;
            }
        }
    }

    /**
     * Move pacman following the good direction (asked direction or current direction).
     */
    _movePacman() {
        if (this._pacman.askedToChangeDirection && this._maze.canWalkOn(this._pacman.position.nextPosition(this._pacman.askedDirection))) {
            this._pacman.changeDirection();
        }
        else if (this._maze.canWalkOn(this._pacman.position.nextPosition(this._pacman.direction))) {
            this._pacman.move();
        }

        this._checkDot();
    }

    /**
     * Move all ghosts following the good direction (asked direction or current direction) and detect if ghost eat pacman.
     */
    _moveGhosts() {
        let alreadyHasBeenEaten = false;
        this._ghosts.forEach(ghost => {
            if (ghost.askedToChangeDirection && this._maze.canWalkOn(ghost.position.nextPosition(ghost.askedDirection))) {
                ghost.changeDirection();
            }
            else if (this._maze.canWalkOn(ghost.position.nextPosition(ghost.direction))) {
                ghost.move();
            } else {
                do {
                    ghost.notifyIsBlocked();
                }
                while (!this._maze.canWalkOn(ghost.position.nextPosition(ghost.askedDirection)));
                ghost.changeDirection();
            }

            if (!alreadyHasBeenEaten && ghost.canEat(this._pacman)) {
                this._pacman.hasBeenEaten();
                alreadyHasBeenEaten = true;
            }
        });
    }

    /**
     * Move sprite following the good direction (asked direction or current direction).
     */
    moveSprites() {
        this._movePacman();
        this._moveGhosts();
    }

    /**
     * @returns if game over or not
     */
    isGameOver() {
        return this._pacman.nbLives <= 0;
    }

    /**
     * 
     * @returns if pacman has ben eaten
     */
    pacmanHasBeenEaten() {
        return this._pacman.isDead();
    }

    /**
     * respawn pacman
     */
    respawn() {
        this._pacman.respawn();
        this._ghosts.forEach((ghost) => {
            ghost.respawn();
        })
    }

    /**
     * Save the new high score to localstorage
     */
    saveScore() {
        if (this._highScore < this._score) {
            localStorage.setItem('highScore', this._score);
            this._highScore = this._score;
        }
    }

    /**
     * 
     * @returns if the level succeed or not yet
     */
    lvlSucceed() {
        return this._maze.isEmpty;
    }

    /**
     * Go to next level
     */
    nextLevel() {
        this._maze = new Maze(this._rawMaze);
        this._pacman = new Pacman(this._maze.pacmanRespawn, Direction.WEST);
        this._ghosts = [];
        this._removedDot = this._pacman.position;

        for (let i = 0; i < NB_GHOSTS; i++) {
            this._ghosts.push(new Ghost(this._maze.ghostsRespawn, Direction.WEST, `ghost${i}`));
        }
    }

    /**
     * @returns {Maze} maze
     */
    get maze() {
        return this._maze;
    }

    /**
     * @returns {Pacman} pacman
     */
    get pacman() {
        return this._pacman;
    }

    /**
     * @returns {Array} ghosts
     */
    get ghosts() {
        return this._ghosts;
    }

    /**
     * @returns {number} score
     */
    get score() {
        return this._score;
    }

    /**
     * @returns {Dot} removed dot
     */
    get removedDot() {
        return this._removedDot;
    }

    /**
     * @returns highScore
     */
    get highScore() {
        return this._highScore;
    }
}