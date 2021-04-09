
const displayMaze = () => {
    for (let row = 0; row < RAW_MAZE.table.length; row++) {
        for (let column = 0; column < RAW_MAZE.table[row].length; column++) {
            switch (RAW_MAZE.table[row][column]) {
                case 1:
                    $('<div class="wall"></div>').appendTo("#game").css({
                            "top": `${(row * 15)}px`,
                            "left": `${(column * 15)}px`
                        });
                    break;
                case 2:
                    $('<div class="pacDot"><span></span></div>').appendTo("#game").css({
                            "top": `${(row * 15)}px`,
                            "left": `${(column * 15)}px`
                        });
                    break;
                default:
                    break;
            }
        }
    }
}