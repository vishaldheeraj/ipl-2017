"use strict";
window.onload = init;

function init() {
    var searchI = document.getElementById('searchI'),
        searchDL = document.getElementById('searchDL'),
        searchB = document.getElementById('searchB'),
        resultD = document.getElementById('result'),
        ownersList = document.getElementById('teamOwners');

    displayBanner();
    setOnKeyforSearch(searchI, searchDL);
    setOnClickforSearch(searchB, searchI, resultD);
}

function displayBanner() {
    var bannerImages = getBannerImages(),
        bannerTag = document.getElementById('teamBanner');
    bannerLoop(0, bannerTag, bannerImages);
}

function bannerLoop(index, bannerTag, bannerImages) {
    setBanner(bannerTag, bannerImages[index]);
    setTimeout(function () {
        index = (index + 1) % bannerImages.length - 1;
        bannerLoop(index + 1, bannerTag, bannerImages);
    }, 3000);
}

function setBanner(bannerTag, banner) {
    bannerTag.src = banner;
}

function setOnKeyforSearch(searchI, searchDL) {
    searchI.onkeyup = debounce(function (event) {
        var keyThis = this;
        if (!keyThis.value.trim()) {
            searchDL.innerHTML = '';
        } else {
            changeInput(keyThis.value, searchDL);
        }
    }, 500, false);
}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        }, wait);
        if (callNow) func.apply(context, args);
    };
};

function changeInput(val, searchDL) {
    searchDL.innerHTML = matchPlayerAndReturnOptions(val);
}

function matchPlayerAndReturnOptions(input) {
    var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ''), 'i');
    return getPlayers().filter(function (player) {
        return player.name.match(reg);
    }).map(function (player) {
        return '<option value="' + player.name + '"/>'
    });
}

function setOnClickforSearch(searchB, searchI, resultD) {
    searchB.onclick = function () {
        var playerName = searchI.value,
            playerDetails = findPlayer(playerName),
            playerDetailsFull = findPlayerFull(playerDetails.id);
        if (playerDetailsFull) {
            resultD.innerHTML = showPlayerDetailsFull(playerDetailsFull)
        } else {
            resultD.innerHTML = playerDetails ? showPlayerDetails(playerDetails) : 'Couldn\'t find "' + playerName + '" or not in a team.';
        }

    };
}

function findPlayer(name) {
    return getPlayers().find(function (player) {
        return player.name == name;
    });
}

function findPlayerFull(id) {
    return playersIPLData.find(function (player) {
        return player.player.id == id;
    });
}

function showPlayerDetails(playerDetails) {
    var html = '<table><thead><tr><th>Name</th><th>Owner</th><th>Price(cr)</th></tr></thead>';
    html += '<tr><td>' + playerDetails.name + '</td><td>' + playerDetails.owner + '</td><td>' + playerDetails.price + '</td></tr>';
    html += '</table>';
    return html;
}

function showPlayerDetailsFull(playerDetailsFull) {
    var html = getTable(playerDetailsFull.player, getPlayerInfo());
    if (playerDetailsFull.battingStats) {
        html += '<h4>Batting Stats</h4>';
        html += getTable(playerDetailsFull.battingStats, getBattingStats());
    }
    if (playerDetailsFull.bowlingStats) {
        html += '<h4>Bowling Stats</h4>';
        html += getTable(playerDetailsFull.bowlingStats, getBowlingStats());
    }
    return html;
}

function getTable(details, metaData) {
    if (details) {
        return '<table><thead>' + getHtml(metaData.map(getHeader), headerMap) + '</thead><tbody>' + getHtml(metaData.map(getKey), bodyMap, details) + '</tbody></table>';
    }
}

function headerMap(header) {
    return '<th>' + header + '</th>';
}

function bodyMap(key) {

    var flag = (typeof key === "function");
    return '<td>' + ((typeof key === "function") ? key(this) : this[key]) + '</td>';
}

function getHeader(e) {
    return e.header;
}

function getKey(e) {
    return e.key;
}

function getHtml(headers, map, context) {
    var html = headers.map(map, context).reduce(concat, '<tr>');
    html += '</tr>';
    return html;
}

function concat(outStr, ele) {
    return outStr + ele;
}

function showOwners(ownersList) {
    var html = '',
        key;
    for (key in teamOwners) {
        html += '<li onclick=showTeam("' + key + '")>' + key + '</li>'
    }
    ownersList.innerHTML = html;
}

function showTeam(owner) {
    var teamList = document.getElementById("teamList");
    teamList.innerHTML = '';
    var team = players.filter(function (d) {
        return d.owner == owner;
    });
    console.log(team);
    var teamTable = '<table><thead><tr><th>Name</th><th>Price(cr)</th></tr></thead>',
        key;
    team.forEach(function (d) {
        teamTable += '<tr>';
        teamTable += '<td>' + d.name + '</td>';
        teamTable += '<td>' + d.price + '</td>';
        teamTable += '</tr>';
    });
    teamList.innerHTML = teamTable;
}

