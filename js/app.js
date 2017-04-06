"use strict";
window.onload = init;

function init() {
    displayBanner();
    var searchI = document.getElementById('searchI'),
        searchDL = document.getElementById('searchDL'),
        searchB = document.getElementById('searchB'),
        resultD = document.getElementById('result');

    setOnKeyforSearch(searchI, searchDL);
    setOnClickforSearch(searchB, searchI, resultD);

}

function displayBanner() {
    var bannerImages = ['images/DD.jpg', 'images/GL.jpg', 'images/KKR.jpg', 'images/KXIP.jpg', 'images/MI.jpg', 'images/RCB.jpg', 'images/RPS.jpg', 'images/SRH.jpg'],
        bannerTag = document.getElementById('teamBanner');
    bannerLoop(0, bannerTag, bannerImages);
}

function bannerLoop(index, bannerTag, bannerImages) {
    setBanner(bannerTag, bannerImages[index]);
    setTimeout(function () {
        index = (index + 1) % bannerImages.length - 1;
        bannerLoop(index + 1, bannerTag, bannerImages);
    }, 4000);
};

function setBanner(bannerTag, banner) {
    bannerTag.src = banner;
}

function getTeamOwners() {
    return teamOwners;
}

function getPlayers() {
    return players;
}

function setOnKeyforSearch(searchI, searchDL) {
    searchI.onkeyup = function () {
        changeInput(this.value, searchDL);
    };
}

function setOnClickforSearch(searchB, searchI, resultD) {
    searchB.onclick = function () {
        var playerName = searchI.value,
            playerDetails = findPlayer(playerName);
        resultD.innerHTML = playerDetails ? showPlayerDetails(playerDetails) : 'Couldn\'t find "' + playerName + '" or not in a team.';
    };
}

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

function findPlayer(name) {
    return getPlayers().find(function (player) {
        return player.name == name;
    });
}

function showPlayerDetails(playerDetails) {
    return '<table><thead><tr><th>Name</th><th>Owner</th><th>Price(cr)</th></tr></thead><tr><td>' +
        playerDetails.name + '</td><td>' +
        playerDetails.owner + '</td><td>' +
        playerDetails.price + '</td></tr>';
}