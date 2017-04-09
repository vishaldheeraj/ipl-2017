var data = (function () {
    var bannerImages = ['images/DD.jpg', 'images/GL.jpg', 'images/KKR.jpg', 'images/KXIP.jpg', 'images/MI.jpg', 'images/RCB.jpg', 'images/RPS.jpg', 'images/SRH.jpg'];
    var battingStats = [{
            header: 'Mat',
            key: 'm'
        },
        {
            header: 'No',
            key: 'no'
        },
        {
            header: 'Runs',
            key: 'r'
        },
        {
            header: 'HS',
            key: 'hs'
        },
        {
            header: 'Ave',
            key: 'a'
        },
        {
            header: 'BF',
            key: 'b'
        },
        {
            header: 'SR',
            key: 'sr'
        },
        {
            header: '100',
            key: '100s'
        },
        {
            header: '50',
            key: '50s'
        },
        {
            header: '4s',
            key: '4s'
        },
        {
            header: '6s',
            key: '6s'
        }
    ];
    var bowlingStats = [{
            header: 'Mat',
            key: 'm'
        },
        {
            header: 'Balls',
            key: 'b'
        },
        {
            header: 'Runs',
            key: 'r'
        },
        {
            header: 'WKTS',
            key: 'w'
        },
        {
            header: 'BBM',
            key: function (obj) {
                return obj.bbmw + '/' + obj.bbmr
            }
        },
        {
            header: 'Ave',
            key: 'a'
        },
        {
            header: 'Econ',
            key: 'e'
        },
        {
            header: 'SR',
            key: 'sr'
        },
        {
            header: '4W',
            key: '4w'
        },
        {
            header: '5W',
            key: '5w'
        }
    ];
    var playerInfo = [{
            header: 'Name',
            key: 'fullName'
        },
        {
            header: 'Owner',
            key: 'owner'
        },
        {
            header: 'Price(cr)',
            key: 'price'
        },
        {
            header: 'IPL Team',
            key: 'team'
        }
    ];
    var teamOwners = {
        Adarsh: {
            teamName: "Barsthivi Banro",
            cap_space: 60
        },
        Sudarshan: {
            teamName: "Mandyada Hamsa",
            cap_space: 59.9
        },
        IceMan: {
            teamName: "WhiteWalkers",
            cap_space: 59.9
        },
        Vinay: {
            teamName: "Baller Bande",
            cap_space: 60
        },
        Dikshit: {
            teamName: "Kirik Boys",
            cap_space: 58
        },
        Ashray: {
            teamName: "Demons",
            cap_space: 60
        },
        Abhilash: {
            teamName: "Cup Namde",
            cap_space: 54.3
        }
    };
    var players = [{
            "name": "Angelo Mathews",
            "id": "",
            "owner": "Abhilash",
            "price": 4.2
        },
        {
            "name": "David Miller",
            "id": "",
            "owner": "Abhilash",
            "price": 4
        },
        {
            "name": "David Warner",
            "id": 170,
            "owner": "Abhilash",
            "price": 9
        },
        {
            "name": "Dhawal Kulkarni",
            "id": 101,
            "owner": "Abhilash",
            "price": 1.5
        },
        {
            "name": "Dwayne Smith",
            "id": 413,
            "owner": "Abhilash",
            "price": 2.8
        },
        {
            "name": "Jayant Yadav",
            "id": "",
            "owner": "Abhilash",
            "price": 1.5
        },
        {
            "name": "Jos Buttler",
            "id": 509,
            "owner": "Abhilash",
            "price": 4.6
        },
        {
            "name": "K.C. Cariappa",
            "id": "",
            "owner": "Abhilash",
            "price": 0.7
        },
        {
            "name": "Karn Sharma",
            "id": "",
            "owner": "Abhilash",
            "price": 1.4
        },
        {
            "name": "Lasith Malinga",
            "id": "",
            "owner": "Abhilash",
            "price": 2.4
        },
        {
            "name": "MS Dhoni",
            "id": 1,
            "owner": "Abhilash",
            "price": 5.5
        },
        {
            "name": "Manish Pandey",
            "id": "",
            "owner": "Abhilash",
            "price": 3.6
        },
        {
            "name": "Mohammed Siraj",
            "id": "",
            "owner": "Abhilash",
            "price": 0.3
        },
        {
            "name": "Moises Henriques",
            "id": 388,
            "owner": "Abhilash",
            "price": 1.7
        },
        {
            "name": "Pawan Negi",
            "id": 53,
            "owner": "Abhilash",
            "price": 1.1
        },
        {
            "name": "Praveen Dubey",
            "id": "",
            "owner": "Abhilash",
            "price": 0.3
        },
        {
            "name": "Shardul Narendra Thakur",
            "id": "",
            "owner": "Abhilash",
            "price": 1
        },
        {
            "name": "Sheldon Jackson",
            "id": "",
            "owner": "Abhilash",
            "price": 0.5
        },
        {
            "name": "Shreyas Gopal",
            "id": "",
            "owner": "Abhilash",
            "price": 1.6
        },
        {
            "name": "Stuart Binny",
            "id": 148,
            "owner": "Abhilash",
            "price": 2.6
        },
        {
            "name": "Sunil Narine",
            "id": 203,
            "owner": "Abhilash",
            "price": 4
        },
        {
            "name": "Ashish Nehra",
            "id": 115,
            "owner": "Adarsh",
            "price": 5
        },
        {
            "name": "Barinder Singh Sran",
            "id": "",
            "owner": "Adarsh",
            "price": 1
        },
        {
            "name": "Bipul Sharma",
            "id": "",
            "owner": "Adarsh",
            "price": 0.8
        },
        {
            "name": "Christopher Morris",
            "id": "",
            "owner": "Adarsh",
            "price": 1.8
        },
        {
            "name": "Dwayne Bravo",
            "id": "",
            "owner": "Adarsh",
            "price": 9
        },
        {
            "name": "Eoin Morgan",
            "id": "",
            "owner": "Adarsh",
            "price": 1.5
        },
        {
            "name": "KL Rahul",
            "id": "",
            "owner": "Adarsh",
            "price": 9.5
        },
        {
            "name": "Mohammad Nabi",
            "id": "",
            "owner": "Adarsh",
            "price": 3
        },
        {
            "name": "Parthiv Patel",
            "id": 44,
            "owner": "Adarsh",
            "price": 3.6
        },
        {
            "name": "Rashid Khan",
            "id": 2885,
            "owner": "Adarsh",
            "price": 0.7
        },
        {
            "name": "Sam Billings",
            "id": 2756,
            "owner": "Adarsh",
            "price": 0.5
        },
        {
            "name": "Samuel Badree",
            "id": "",
            "owner": "Adarsh",
            "price": 2.2
        },
        {
            "name": "Shakib Al Hasan",
            "id": "",
            "owner": "Adarsh",
            "price": 2.8
        },
        {
            "name": "Suresh Raina",
            "id": 14,
            "owner": "Adarsh",
            "price": 7.5
        },
        {
            "name": "T Natarajan",
            "id": 3831,
            "owner": "Adarsh",
            "price": 0.9
        },
        {
            "name": "Tymal Mills",
            "id": 3319,
            "owner": "Adarsh",
            "price": 7
        },
        {
            "name": "Yuzvendra Chahal",
            "id": 111,
            "owner": "Adarsh",
            "price": 3.2
        },
        {
            "name": "Aaron Finch",
            "id": 167,
            "owner": "Ashray",
            "price": 2.4
        },
        {
            "name": "Aditya Tare",
            "id": 99,
            "owner": "Ashray",
            "price": 0.1
        },
        {
            "name": "Amit Mishra",
            "id": "",
            "owner": "Ashray",
            "price": 4.8
        },
        {
            "name": "Aniket Choudhary",
            "id": 1111,
            "owner": "Ashray",
            "price": 0.5
        },
        {
            "name": "Bhuvneshwar Kumar",
            "id": 116,
            "owner": "Ashray",
            "price": 6.5
        },
        {
            "name": "Brendon McCullum",
            "id": 202,
            "owner": "Ashray",
            "price": 6.5
        },
        {
            "name": "Chris Lynn",
            "id": 179,
            "owner": "Ashray",
            "price": 1.1
        },
        {
            "name": "Chris Woakes",
            "id": 967,
            "owner": "Ashray",
            "price": 3
        },
        {
            "name": "Hardik Pandya",
            "id": 2740,
            "owner": "Ashray",
            "price": 2.8
        },
        {
            "name": "K Gowtham",
            "id": "",
            "owner": "Ashray",
            "price": 0.3
        },
        {
            "name": "Kagiso Rabada",
            "id": "",
            "owner": "Ashray",
            "price": 1.5
        },
        {
            "name": "Karun Nair",
            "id": 276,
            "owner": "Ashray",
            "price": 3.6
        },
        {
            "name": "Kedar Jadhav",
            "id": 297,
            "owner": "Ashray",
            "price": 3.6
        },
        {
            "name": "Marcus Stoinis",
            "id": 964,
            "owner": "Ashray",
            "price": 0.5
        },
        {
            "name": "Matt Henry",
            "id": "",
            "owner": "Ashray",
            "price": 1
        },
        {
            "name": "Piyush Chawla",
            "id": 76,
            "owner": "Ashray",
            "price": 3.4
        },
        {
            "name": "Rishabh Pant",
            "id": 2972,
            "owner": "Ashray",
            "price": 3.6
        },
        {
            "name": "Robin Uthappa",
            "id": "",
            "owner": "Ashray",
            "price": 2.6
        },
        {
            "name": "Rohit Sharma",
            "id": 107,
            "owner": "Ashray",
            "price": 6.5
        },
        {
            "name": "Shikhar Dhawan",
            "id": 41,
            "owner": "Ashray",
            "price": 4.2
        },
        {
            "name": "Usman Khwaja",
            "id": "",
            "owner": "Ashray",
            "price": 1.5
        },
        {
            "name": "AB de Villiers",
            "id": "",
            "owner": "Dikshit",
            "price": 12
        },
        {
            "name": "Carlos Brathwaite",
            "id": "",
            "owner": "Dikshit",
            "price": 1.7
        },
        {
            "name": "Corey Anderson",
            "id": "",
            "owner": "Dikshit",
            "price": 2.8
        },
        {
            "name": "Deepak Hooda",
            "id": 1556,
            "owner": "Dikshit",
            "price": 0.5
        },
        {
            "name": "Gautam Gambhir",
            "id": 84,
            "owner": "Dikshit",
            "price": 5.5
        },
        {
            "name": "James Faulkner",
            "id": "",
            "owner": "Dikshit",
            "price": 6.5
        },
        {
            "name": "Krunal Pandya",
            "id": 3183,
            "owner": "Dikshit",
            "price": 0.9
        },
        {
            "name": "Mandeep Singh",
            "id": 72,
            "owner": "Dikshit",
            "price": 1.6
        },
        {
            "name": "Manoj Tiwary",
            "id": 89,
            "owner": "Dikshit",
            "price": 1.3
        },
        {
            "name": "Mitchell Johnson",
            "id": "",
            "owner": "Dikshit",
            "price": 2
        },
        {
            "name": "Mohammad Shami",
            "id": "",
            "owner": "Dikshit",
            "price": 4.2
        },
        {
            "name": "Mohit Sharma",
            "id": 1107,
            "owner": "Dikshit",
            "price": 2
        },
        {
            "name": "Murugan Ashwin",
            "id": "",
            "owner": "Dikshit",
            "price": 1.5
        },
        {
            "name": "Praveen Kumar",
            "id": 77,
            "owner": "Dikshit",
            "price": 1.1
        },
        {
            "name": "Shahbaz Nadeem",
            "id": "",
            "owner": "Dikshit",
            "price": 0.4
        },
        {
            "name": "Shane Watson",
            "id": 227,
            "owner": "Dikshit",
            "price": 7.5
        },
        {
            "name": "Shaun Marsh",
            "id": "",
            "owner": "Dikshit",
            "price": 1.7
        },
        {
            "name": "Shivil Kaushik",
            "id": 3178,
            "owner": "Dikshit",
            "price": 0.4
        },
        {
            "name": "Shreyas Iyer",
            "id": "",
            "owner": "Dikshit",
            "price": 0.9
        },
        {
            "name": "Sreenath Aravind",
            "id": 162,
            "owner": "Dikshit",
            "price": 1.8
        },
        {
            "name": "Travis Head",
            "id": 1020,
            "owner": "Dikshit",
            "price": 1.7
        },
        {
            "name": "Ambati Rayudu",
            "id": 100,
            "owner": "IceMan",
            "price": 3.2
        },
        {
            "name": "Axar Patel",
            "id": 1113,
            "owner": "IceMan",
            "price": 4.8
        },
        {
            "name": "Ben Cutting",
            "id": 913,
            "owner": "IceMan",
            "price": 0.5
        },
        {
            "name": "Dinesh Karthik",
            "id": 102,
            "owner": "IceMan",
            "price": 3.8
        },
        {
            "name": "Gurkeerat Mann Singh",
            "id": "",
            "owner": "IceMan",
            "price": 0.6
        },
        {
            "name": "Jasprit Bumrah",
            "id": 1124,
            "owner": "IceMan",
            "price": 5.5
        },
        {
            "name": "Jaydev Unadkat",
            "id": "",
            "owner": "IceMan",
            "price": 0.7
        },
        {
            "name": "Kane Williamson",
            "id": "",
            "owner": "IceMan",
            "price": 4.6
        },
        {
            "name": "Kieron Pollard",
            "id": 210,
            "owner": "IceMan",
            "price": 7.5
        },
        {
            "name": "Kuldeep Yadav",
            "id": 261,
            "owner": "IceMan",
            "price": 3.8
        },
        {
            "name": "Manan Vohra",
            "id": 1085,
            "owner": "IceMan",
            "price": 0.8
        },
        {
            "name": "Martin Guptill",
            "id": "",
            "owner": "IceMan",
            "price": 0.9
        },
        {
            "name": "Mustafizur Rahman",
            "id": "",
            "owner": "IceMan",
            "price": 5.5
        },
        {
            "name": "Naman Ojha",
            "id": "",
            "owner": "IceMan",
            "price": 2.4
        },
        {
            "name": "Rajat Bhatia",
            "id": 92,
            "owner": "IceMan",
            "price": 0.4
        },
        {
            "name": "Ranganath Vinay Kumar",
            "id": "",
            "owner": "IceMan",
            "price": 1.4
        },
        {
            "name": "Suryakumar Yadav",
            "id": "",
            "owner": "IceMan",
            "price": 0.6
        },
        {
            "name": "Tim Southee",
            "id": 307,
            "owner": "IceMan",
            "price": 4.8
        },
        {
            "name": "Umesh Yadav",
            "id": "",
            "owner": "IceMan",
            "price": 4.2
        },
        {
            "name": "Yusuf Pathan",
            "id": "",
            "owner": "IceMan",
            "price": 3
        },
        {
            "name": "Adam Zampa",
            "id": 958,
            "owner": "Sudarshan",
            "price": 1.7
        },
        {
            "name": "Ajinkya Rahane",
            "id": 135,
            "owner": "Sudarshan",
            "price": 6.5
        },
        {
            "name": "Baba Aparajith",
            "id": "",
            "owner": "Sudarshan",
            "price": 0.7
        },
        {
            "name": "Faf Du Plessis",
            "id": "",
            "owner": "Sudarshan",
            "price": 7
        },
        {
            "name": "Harbhajan Singh",
            "id": "",
            "owner": "Sudarshan",
            "price": 4
        },
        {
            "name": "Hashim Amla",
            "id": 456,
            "owner": "Sudarshan",
            "price": 1.2
        },
        {
            "name": "Imran Tahir",
            "id": 898,
            "owner": "Sudarshan",
            "price": 1.5
        },
        {
            "name": "Jason Roy",
            "id": 1906,
            "owner": "Sudarshan",
            "price": 2
        },
        {
            "name": "Lendl Simmons",
            "id": "",
            "owner": "Sudarshan",
            "price": 1
        },
        {
            "name": "Manpreet Gony",
            "id": 40,
            "owner": "Sudarshan",
            "price": 0.7
        },
        {
            "name": "Mayank Agarwal",
            "id": 158,
            "owner": "Sudarshan",
            "price": 1
        },
        {
            "name": "Munaf Patel",
            "id": "",
            "owner": "Sudarshan",
            "price": 1
        },
        {
            "name": "Nathan Coulter-Nile",
            "id": "",
            "owner": "Sudarshan",
            "price": 1
        },
        {
            "name": "Pat Cummins",
            "id": 488,
            "owner": "Sudarshan",
            "price": 2
        },
        {
            "name": "Ravindra Jadeja",
            "id": "",
            "owner": "Sudarshan",
            "price": 7.5
        },
        {
            "name": "Rishi Dhawan",
            "id": "",
            "owner": "Sudarshan",
            "price": 1
        },
        {
            "name": "Sandeep Sharma",
            "id": 1112,
            "owner": "Sudarshan",
            "price": 1
        },
        {
            "name": "Sarfaraz Naushad Khan",
            "id": "",
            "owner": "Sudarshan",
            "price": 1
        },
        {
            "name": "Virat Kohli",
            "id": "",
            "owner": "Sudarshan",
            "price": 9
        },
        {
            "name": "Wriddhiman Saha",
            "id": 16,
            "owner": "Sudarshan",
            "price": 3.6
        },
        {
            "name": "Yuvraj Singh",
            "id": 113,
            "owner": "Sudarshan",
            "price": 5.5
        },
        {
            "name": "Abhimanyu Mithun",
            "id": "",
            "owner": "Vinay",
            "price": 1
        },
        {
            "name": "Adam Milne",
            "id": "",
            "owner": "Vinay",
            "price": 1
        },
        {
            "name": "Ashok Dinda",
            "id": 48,
            "owner": "Vinay",
            "price": 0.9
        },
        {
            "name": "Ben Stokes",
            "id": 1154,
            "owner": "Vinay",
            "price": 5
        },
        {
            "name": "Chris Gayle",
            "id": 236,
            "owner": "Vinay",
            "price": 9
        },
        {
            "name": "Darren Sammy",
            "id": "",
            "owner": "Vinay",
            "price": 1
        },
        {
            "name": "Glenn Maxwell",
            "id": "",
            "owner": "Vinay",
            "price": 6
        },
        {
            "name": "Iqbal Abdulla",
            "id": 85,
            "owner": "Vinay",
            "price": 1
        },
        {
            "name": "Murali Vijay",
            "id": "",
            "owner": "Vinay",
            "price": 2.4
        },
        {
            "name": "Pravin Tambe",
            "id": "",
            "owner": "Vinay",
            "price": 0.5
        },
        {
            "name": "R Ashwin",
            "id": "",
            "owner": "Vinay",
            "price": 8
        },
        {
            "name": "Sachin Baby",
            "id": 1115,
            "owner": "Vinay",
            "price": 1.3
        },
        {
            "name": "Sanju Samson",
            "id": 258,
            "owner": "Vinay",
            "price": 4
        },
        {
            "name": "Saurabh Tiwary",
            "id": "",
            "owner": "Vinay",
            "price": 1.4
        },
        {
            "name": "Steve Smith",
            "id": 271,
            "owner": "Vinay",
            "price": 9
        },
        {
            "name": "Trent Boult",
            "id": 969,
            "owner": "Vinay",
            "price": 5.5
        },
        {
            "name": "Varun Aaron",
            "id": "",
            "owner": "Vinay",
            "price": 2
        },
        {
            "name": "Zaheer Khan",
            "id": "",
            "owner": "Vinay",
            "price": 1
        }
    ];

    return {
        bannerImages: bannerImages,
        battingStats: battingStats,
        bowlingStats: bowlingStats,
        playerInfo: playerInfo,
        teamOwners: teamOwners,
        players: players
    }
})();

function getTeamOwners() {
    return data.teamOwners;
}

function getPlayers() {
    return data.players;
}


function getBattingStats() {
    return data.battingStats;
}

function getBowlingStats() {
    return data.bowlingStats;
}

function getPlayerInfo() {
    return data.playerInfo;
}

function getBannerImages() {
    return data.bannerImages;
}