let char = new Mage('Leonardo');
let monster = new LittleMonster();

let stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.start();