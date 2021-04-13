const main = () => {
    g1 = new GameCtrl();
    g1.run();
}

$(document).ready(() => {
    let g1;
    main();
})