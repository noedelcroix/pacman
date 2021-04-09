class Dot extends Tile{
    constructor(id, isEnergizer) {
        super(id);
        this._isEnergizer = isEnergizer;
    }

    get isEnergizer() {
        return this._isEnergizer;
    }
}