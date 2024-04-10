let log = new Log(document.querySelector('.log'));

let char = new Rogue('Leonardo');
let monster = new BigMonster();

let stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();