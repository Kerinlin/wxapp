function Player(name, teamColor) {
    this.name = name;
    this.enemy = null;
    this.enemys = [];
    this.partners = [];
    this.state = 'live';
    this.teamColor = teamColor;
}
// enemy 实例 instanceof =>new Player()
Player.prototype.win = function () {
    console.log(`${this.name} win`);

}
Player.prototype.lose = function () {
    console.log(`${this.name} lose`);
}

Player.prototype.die = function () {
    let all_died = true;
    for (let i = 0; i < this.partners.length; i++) {

        if (this.partners[i].state == 'live') {
            all_died = false;
            break;
        }
    }
    if (all_died) {
        this.lose();
        for (let i = 0; i < this.partners.length; i++) {
            this.partners[i].lose();
        }
        for (let i = 0; i < this.enemys.length; i++) {
            this.enemys[i].win();
        }
    }
}

function playerFactory(name, teamColor) {
    const players = [];
    var newPlayer = new Player(name, teamColor)
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        if (players.teamColor == newPlayer.teamColor) {
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        } else {
            player.enemys.push(newPlayer);
            newPlayer.enemys.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}

const play1 = playerFactory('皮蛋', 'red');
const play2 = playerFactory('小乖', 'red');
const play3 = playerFactory('宝宝', 'red');
const play4 = playerFactory('小强', 'red');

const play5 = playerFactory('黑姐', 'blue');
const play6= playerFactory('葱头', 'blue');
const play7= playerFactory('胖墩', 'blue');
const play8 = playerFactory('海盗', 'blue');

play1.die();
play2.die();
play3.die();
play4.die();


// const play1=new Player('p1','red');
// const play2 = new Player('p2','blue');

// play1.enemy=play2;
// play2.enemy=play1;

// play1.win();

// play1.die();




