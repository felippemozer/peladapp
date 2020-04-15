const Jogador = require('../../models/Jogador');

module.exports = function verifyPlayers(players) {
    const playersID = [];
    if(players) {
        players.forEach(async (player) => {
            const allocPlayer = await Jogador.findOne({ name: player });

            if(allocPlayer) {
                playersID.push(allocPlayer._id);
            }
        });
    }

    return playersID;
}