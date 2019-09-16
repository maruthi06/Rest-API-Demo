const router = require('express');
const util = require('util');

let data = [
    {
        "_id": "5d7fe5cc29973ae7dec4f556",
        "index": 0,
        "guid": "f91a2383-b6aa-40ed-9f22-df2a832db4c4",
        "isActive": false,
        "balance": "$3,472.77",
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "eyeColor": "brown",
        "name": "Casey Hobbs",
        "gender": "male",
        "company": "ORBIXTAR",
        "email": "caseyhobbs@orbixtar.com",
        "phone": "+1 (854) 434-2867",
        "address": "761 Nostrand Avenue, Thatcher, New Hampshire, 6745",
        "about": "Ut veniam ut deserunt sit qui. Deserunt dolor in velit reprehenderit. Sunt quis incididunt exercitation eu nostrud. Amet eiusmod fugiat magna ipsum sit sit nulla sint adipisicing reprehenderit tempor.\r\n",
        "registered": "2018-02-19T07:37:38 -06:-30",
        "latitude": -17.81216,
        "longitude": 43.738814,
        "tags": [
            "in",
            "id",
            "sit",
            "occaecat",
            "reprehenderit",
            "nisi",
            "Lorem"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Dawson Hayes"
            },
            {
                "id": 1,
                "name": "Lidia Mendez"
            },
            {
                "id": 2,
                "name": "Melba Acosta"
            }
        ],
        "greeting": "Hello, Casey Hobbs! You have 7 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5d7fe5cc1a73b427bc375906",
        "index": 1,
        "guid": "46a5da27-0559-4553-9bf4-1461c7d5a9b2",
        "isActive": false,
        "balance": "$2,637.46",
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "eyeColor": "brown",
        "name": "Gillespie Eaton",
        "gender": "male",
        "company": "CANDECOR",
        "email": "gillespieeaton@candecor.com",
        "phone": "+1 (992) 419-2818",
        "address": "767 Cox Place, Floris, Washington, 7018",
        "about": "Minim minim consectetur pariatur fugiat esse laborum pariatur nostrud irure sint ad est. Sint id occaecat qui nostrud. Tempor pariatur occaecat qui eiusmod tempor officia Lorem ipsum id reprehenderit incididunt mollit elit id. Est in nostrud ea ullamco in laborum sint eu aliqua exercitation.\r\n",
        "registered": "2014-12-12T03:24:32 -06:-30",
        "latitude": 78.74302,
        "longitude": 92.016421,
        "tags": [
            "sunt",
            "ad",
            "ullamco",
            "ad",
            "sint",
            "eu",
            "nisi"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Brigitte Mcguire"
            },
            {
                "id": 1,
                "name": "Sandy Davidson"
            },
            {
                "id": 2,
                "name": "Bridges Vazquez"
            }
        ],
        "greeting": "Hello, Gillespie Eaton! You have 9 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5d7fe5ccb2a67d7722433bd8",
        "index": 2,
        "guid": "f60458c9-8398-4381-bc21-8f6b5212e7a6",
        "isActive": true,
        "balance": "$2,706.74",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "brown",
        "name": "Delgado Barton",
        "gender": "male",
        "company": "CENTREE",
        "email": "delgadobarton@centree.com",
        "phone": "+1 (953) 454-3971",
        "address": "459 Hinsdale Street, Riviera, Florida, 9865",
        "about": "Amet veniam ex ipsum nisi pariatur mollit ullamco incididunt. Minim cupidatat fugiat sint excepteur. Lorem laboris excepteur amet veniam occaecat voluptate aliqua nostrud aliqua ad ad enim cillum non. Do amet deserunt ex labore laboris. Nulla duis nisi deserunt amet dolor in officia. Non ex reprehenderit aliqua pariatur anim.\r\n",
        "registered": "2017-05-16T03:06:58 -06:-30",
        "latitude": -22.596928,
        "longitude": -29.129965,
        "tags": [
            "ut",
            "aliquip",
            "fugiat",
            "excepteur",
            "ut",
            "do",
            "nostrud"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Santana Glenn"
            },
            {
                "id": 1,
                "name": "Buck Roberson"
            },
            {
                "id": 2,
                "name": "Rivers Sargent"
            }
        ],
        "greeting": "Hello, Delgado Barton! You have 2 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5d7fe5cceb07035599210a21",
        "index": 3,
        "guid": "26063003-3c97-4988-ab51-f03065c2a883",
        "isActive": true,
        "balance": "$2,548.77",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "brown",
        "name": "Donaldson Warner",
        "gender": "male",
        "company": "SYBIXTEX",
        "email": "donaldsonwarner@sybixtex.com",
        "phone": "+1 (904) 434-3955",
        "address": "429 Seabring Street, Sims, North Dakota, 8691",
        "about": "Ullamco aute laboris Lorem ea. Officia cillum minim ex sunt aliqua officia culpa. Eu Lorem ut amet magna eu est ad. In labore aliqua ullamco excepteur. Reprehenderit deserunt reprehenderit aliquip tempor pariatur aute magna ut cupidatat consectetur. Anim exercitation ea mollit laboris aliqua.\r\n",
        "registered": "2017-02-20T02:54:38 -06:-30",
        "latitude": 50.628719,
        "longitude": 58.594033,
        "tags": [
            "in",
            "voluptate",
            "nisi",
            "duis",
            "sunt",
            "et",
            "cillum"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Ingrid Gonzales"
            },
            {
                "id": 1,
                "name": "Shaw Jimenez"
            },
            {
                "id": 2,
                "name": "Spencer Wolfe"
            }
        ],
        "greeting": "Hello, Donaldson Warner! You have 6 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5d7fe5cc377f96b1721a4ed6",
        "index": 4,
        "guid": "01fb0fe5-73d5-412a-a288-88990d06166b",
        "isActive": false,
        "balance": "$3,961.65",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "brown",
        "name": "Ava Vaughn",
        "gender": "female",
        "company": "XYLAR",
        "email": "avavaughn@xylar.com",
        "phone": "+1 (873) 469-3366",
        "address": "915 Osborn Street, Brandermill, New York, 3015",
        "about": "Proident ea laborum ex officia. Pariatur amet excepteur duis nostrud Lorem tempor sint sint cupidatat sint duis et consectetur cupidatat. Laboris exercitation et incididunt nulla officia mollit tempor nulla laborum. Nostrud velit voluptate commodo adipisicing non nulla labore dolor.\r\n",
        "registered": "2016-12-31T07:40:37 -06:-30",
        "latitude": 34.668713,
        "longitude": -162.359468,
        "tags": [
            "ullamco",
            "eiusmod",
            "qui",
            "consequat",
            "cupidatat",
            "sint",
            "reprehenderit"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Francesca Spears"
            },
            {
                "id": 1,
                "name": "Cardenas Summers"
            },
            {
                "id": 2,
                "name": "Maxine Buckley"
            }
        ],
        "greeting": "Hello, Ava Vaughn! You have 8 unread messages.",
        "favoriteFruit": "strawberry"
    }
];

const app = router.Router();

app.get('/', (req, res) => {
    util.log('Server Listening /');
    res.send('Server Listening');
});

app.get('/data', (req, res) => {
    util.log('Fetching data - /data');
    res.json(data);
});


app.post('/data', (req, res) => {
    util.log('Adding data /data', req.body);
    const { name, age, friends, email, about } = req.body
    console.log(name, age, friends, email, about);
    data.push(req.body);
    res.send(req.body);
});

app.delete('/data', (req, res) => {
    util.log('Deleting data / data');
    const { name, email } = req.body;
    console.log(name, email);
    data = data.filter(obj => obj.email === email);
    res.send(true);
});

app.put('/data', (req, res) => {
    util.log('Updating data / data');
    const { name, age, friends, email, about } = req.body
    console.log(name, age, friends, email, about);
    const index = data.findIndex((obj, i) => obj.email === email);
    data[index] = req.body;
});

module.exports = app;