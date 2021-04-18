/**
 * View for pacman Model.
 */
class PacmanView {
    /**
     * 
     * @param {PacmanCtrl} pacmanCtrl 
     */
    constructor(pacmanCtrl) {
        $(".pacman span").css({
            "animation": `pacmanEat 0.${RUN_INTERVAL/20}s linear infinite alternate-reverse`
        });

        $(window).on("keydown", (event)=>{
            switch (event.key) {
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

    /**
     * Set the orientation of pacman.
     */
     setPacmanOrientation(direction) {
        switch (direction) {
            case Direction.NORTH:
                $(".pacman").removeClass("SOUTH NORTH EAST WEST").addClass("NORTH");
                break;
            case Direction.SOUTH:
                $(".pacman").removeClass("SOUTH NORTH EAST WEST").addClass("SOUTH");
                break;
            case Direction.WEST:
                $(".pacman").removeClass("SOUTH NORTH EAST WEST").addClass("WEST");
                break;
            case Direction.EAST:
                $(".pacman").removeClass("SOUTH NORTH EAST WEST").addClass("EAST");
                break;
        }
    }
}