let state = initState();
let game = initGameObject();

game.startScreen.addEventListener('click', (e)=> {
    game.currentTarget.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');
});

