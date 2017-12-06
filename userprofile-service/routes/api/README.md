#REGISTER USER
POST
http://{URLapi/users
{
  "user": {
  	"username":"frantz@example.com",
    "email": "frantz@example.com",
    "password": "mypasswordisfrantz"
  }
}
Returns
{
    "user": {
        "username": "frantz@example.com",
        "email": "frantz@example.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NmQ4MzFiZTg5ZTBiMzcwZDY1NmIwYiIsInVzZXJuYW1lIjoiZnJhbnR6QGV4YW1wbGUuY29tIiwiZXhwIjoxNTA1NTMzMjEyLCJpYXQiOjE1MDAzNDkyMTJ9.P3qvZd9nUGjexZx_BVUrCQFivwsdvGooTIbXgY4bAKI"
    }
}

#Login USER
POST /api/users/login
{
  "user": {
    "email": "frantz@example.com",
    "password": "mypasswordisfrantz"
  }
}
Returns
{
    "user": {
        "username": "frantz@example.com",
        "email": "frantz@example.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NmQ4MzFiZTg5ZTBiMzcwZDY1NmIwYiIsInVzZXJuYW1lIjoiZnJhbnR6QGV4YW1wbGUuY29tIiwiZXhwIjoxNTA1NTMzMjc0LCJpYXQiOjE1MDAzNDkyNzR9.99Pr5ZwRSih3ZQQJO6fKQX6_k2rSl0Aez-mKwiGj5W8"
    }
}

#Current user
GET http://localhost:3000/api/user
key:Authorization
value: Bearer {TOKEN STRING}

#Update current USER
PUT http://localhost:3000/api/user
{
  "user": {
    "password": "mypasswordisfrantzdy"
  }
}
Returns
{
    "user": {
        "username": "frantz@example.com",
        "email": "frantz@example.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NmQ4MzFiZTg5ZTBiMzcwZDY1NmIwYiIsInVzZXJuYW1lIjoiZnJhbnR6QGV4YW1wbGUuY29tIiwiZXhwIjoxNTA1NTMzODcwLCJpYXQiOjE1MDAzNDk4NzB9.9n9Ou1VSwpJs8yz4BcBbrcl-ttnQu3JiBKlHbqLPO3s"
    }
}

#GET USER PROFILE
http://localhost:3000/api/profiles/frantzdy
http://192.168.1.153:8080/v1/userprofile/api/profiles/frantzdy
Returns
{
    "profile": {
        "username": "frantzdy",
        "image": "https://reddit.com'",
        "lastname": "romain",
        "firstname": "frantzdy",
        "totalequity": 0
    }
}

#POST PROPERTIES
POST http://localhost:3000/api/properties
key:Authorization
value: Bearer {TOKEN STRING}
//can add more, see MODEL-Property
{
  "property": {
    "title": "983 johnson place",
    "address": "983 johnson place",
    "city": "union",
    "state": "New Jersey"
    }
}

Returns
{
    "property": {
        "slug": "983-johnson-place-union-new-jersey-bijx61",
        "title": "983 johnson place",
        "address": "983 johnson place",
        "city": "union",
        "state": "New Jersey",
        "amountOwed": 0,
        "propertyValue": 0,
        "equity": 0,
        "createdAt": "2017-07-19T03:46:39.786Z",
        "updatedAt": "2017-07-19T03:46:39.786Z",
        "owner": {
            "username": "frantzdy",
            "image": "https://reddit.com'",
            "lastname": "romain",
            "firstname": "frantzdy",
            "totalequity": 0
        }
    }
}
#GET PROPERTY BY SLUG/UNIQUEID
GET /api/properties/{property_slug}
returns
{
    "property": [
        {
            "_id": "596eb728258b38c43319214c",
            "updatedAt": "2017-07-19T01:34:32.928Z",
            "createdAt": "2017-07-19T01:34:32.928Z",
            "slug": "1064-brighton-street-union-new-jersey-s7oxhw",
            "owner": "596d831be89e0b370d656b0b",
            "title": "1064 brighton street",
            "address": "1064 brighton street",
            "city": "union",
            "state": "New Jersey",
            "__v": 0,
            "equity": 0,
            "propertyValue": 0,
            "amountOwed": 0
        }
    ]
}

#GET PROPERTIES BY OWNER(username)
GET /api/properties?owner=frantzdy
http://192.168.1.153:8080/v1/userprofile/api/properties?owner=frantzdy
Returns
{
    "properties": [
        {
            "slug": "1064-brighton-street-union-new-jersey-s7oxhw",
            "title": "1064 brighton street",
            "address": "1064 brighton street",
            "city": "union",
            "state": "New Jersey",
            "amountOwed": 0,
            "propertyValue": 0,
            "equity": 0,
            "createdAt": "2017-07-19T01:34:32.928Z",
            "updatedAt": "2017-07-19T01:34:32.928Z",
            "owner": {
                "username": "frantzdy",
                "image": "https://reddit.com'",
                "lastname": "romain",
                "firstname": "frantzdy",
                "totalequity": 0
            }
        },
        {
            "slug": "1038-woolley-ave-union-new-jersey-wz1ndg",
            "title": "1064 brighton street",
            "address": "1038 Woolley ave",
            "city": "union",
            "state": "New Jersey",
            "amountOwed": 0,
            "propertyValue": 0,
            "equity": 0,
            "createdAt": "2017-07-19T01:14:31.331Z",
            "updatedAt": "2017-07-19T01:14:31.331Z",
            "owner": {
                "username": "frantzdy",
                "image": "https://reddit.com'",
                "lastname": "romain",
                "firstname": "frantzdy",
                "totalequity": 0
            }
        },
        {
            "slug": "how-to-train-your-dragon-azn1jz",
            "title": "How to train your dragon",
            "address": "1038 Woolley ave",
            "city": "union",
            "state": "New Jersey",
            "amountOwed": 0,
            "propertyValue": 0,
            "equity": 0,
            "createdAt": "2017-07-19T01:08:49.865Z",
            "updatedAt": "2017-07-19T01:08:49.865Z",
            "owner": {
                "username": "frantzdy",
                "image": "https://reddit.com'",
                "lastname": "romain",
                "firstname": "frantzdy",
                "totalequity": 0
            }
        }
    ],
    "propertiesCount": 3
}

#UPDATE PROPERTY
PUT /api/properties/1064-brighton-street-union-new-jersey-ic39zv
key:Authorization
value: Bearer {TOKEN STRING}
{
  "property": {
    "amountOwed": 250000,
    "propertyValue": 365000
    }
}
Returns
{
    "property": {
        "slug": "1064-brighton-street-union-new-jersey-ic39zv",
        "title": "1064 Brighton street",
        "address": "1064 Brighton street",
        "city": "union",
        "state": "New Jersey",
        "amountOwed": 250000,
        "propertyValue": 365000,
        "equity": 115000,
        "createdAt": "2017-07-19T03:59:12.214Z",
        "updatedAt": "2017-07-20T03:46:18.043Z",
        "owner": {
            "username": "frantzdyromain",
            "image": "https://reddit.com",
            "totalequity": 0
        }
    }
}

#DELETE PROPERTY
