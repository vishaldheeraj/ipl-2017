window.playersIPLData = [];
var callbacks = [{
        "parent": "mostRuns",
        "callback": "onMostRuns"
    }, {
        "parent": "mostSixes",
        "callback": "onMostSixes"
    },
    // {
    //     "parent": "highestScores",
    //     "callback": "onHighestScores"
    // }, 
    {
        "parent": "bestStrikeRate",
        "callback": "onBestBattingStrikeRate"
    }, {
        "parent": "mostWickets",
        "callback": "onMostWickets"
    },
    // {
    //     "parent": "bestBowling",
    //     "callback": "onBestBowlingInnings"
    // }, 
    {
        "parent": "bestAverage",
        "callback": "onBestBowlingAverage"
    }, {
        "parent": "bestEconomy",
        "callback": "onBestEconomy"
    }
];

callbacks.forEach(function (data) {
    window[data.callback] = function (json) {
        populateIPLData(data.parent, json);
    };
});

function populateIPLData(parent, json) {
    var playerExist, mergedPlayer, index, o,member;
    json[parent][0].topPlayers.sort().forEach(function (newPlayer) {
        if (playersIPLData.length != 0) {
            playerExist = playersIPLData.find(function (player) {
                return player.player.id == newPlayer.player.id;
            });
            if (!playerExist) {
                o = getPlayers().find(function (e) {
                    return e.id == newPlayer.player.id;
                });
                if (o) {
                    newPlayer.player.team = newPlayer.team.abbreviation;
                    newPlayer.player.owner = o.owner;
                    newPlayer.player.price = o.price;
                }
                playersIPLData.push(newPlayer);
            } else {
                index = playersIPLData.indexOf(playerExist);
                newPlayer.player = playerExist.player;
                mergedPlayer = Object.assign(playerExist, newPlayer);
                playersIPLData[index] = mergedPlayer;
            }
        } else {
            o = getPlayers().find(function (e) {
                return e.id == newPlayer.player.id;
            });
            if (o) {
                newPlayer.player.team = newPlayer.team.abbreviation;
                newPlayer.player.owner = o.owner;
                newPlayer.player.price = o.price;
            }
            playersIPLData.push(newPlayer);
        }
    });
}

function onSquads(json){
console.log(json.squads[0].players[0])
}