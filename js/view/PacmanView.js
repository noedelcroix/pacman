/**
 * View for pacman Model.
 */
class PacmanView{
    /**
     * 
     * @param {PacmanCtrl} pacmanCtrl 
     */
    constructor(pacmanCtrl){
        $(window).on( "keydown", function(event){
            switch(event.key){
                case "ArrowLeft":
                    pacmanCtrl.askToChangeDirection(Direction.WEST);
                    break;
                case "ArrowRight":
                    pacmanCtrl.askToChangeDirection(Direction.EAST);
                    break;
                case "ArrowUp":
                    pacmanCtrl.askToChangeDirection(Direction.NORTH);
                    break;
                case "ArrowDown":
                    pacmanCtrl.askToChangeDirection(Direction.SOUTH);
                    break;
            }
        });
    }
}