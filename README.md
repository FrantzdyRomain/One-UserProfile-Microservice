# One-UserProfile-Microservice
NodeJS Microservice built on HydraExpress. Uses Redis for service discovery, distributed messaging, message load balancing
Backend for https://itunes.apple.com/us/app/one-share-beautiful-looping-videos/id1182778901?mt=8
For background on Microservices in Node please read docs on HydraExpress


## Pre-installation

It's recommended that [NVM](https://github.com/creationix/nvm) be used to manage NodeJS versions.
The project includes an .nvmrc which specifies NodeJS 6.2.1

## Installation

```javascript
$ cd userprofile-service
$ nvm use
$ npm install express-session mongoose passport errorhandler express-jwt mongoose-unique-validator passport-local stripe hydra-express

$ npm install
```

## Trial

```shell
$ npm start
```

Endpoints

REGISTER USER
POST
http://192.168.1.153:8080/v1/userprofile/api/users
```
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
```
Login USER
POST /http://192.168.1.153:8080/v1/userprofile/api/users/login
```
{
  "user": {
    "email": "frantz@example.com",
    "password": "mypasswordisfrantz"
  }
}
```
Returns
```
{
    "user": {
        "username": "frantz@example.com",
        "email": "frantz@example.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NmQ4MzFiZTg5ZTBiMzcwZDY1NmIwYiIsInVzZXJuYW1lIjoiZnJhbnR6QGV4YW1wbGUuY29tIiwiZXhwIjoxNTA1NTMzMjc0LCJpYXQiOjE1MDAzNDkyNzR9.99Pr5ZwRSih3ZQQJO6fKQX6_k2rSl0Aez-mKwiGj5W8"
    }
}
```

Current user
GET http://192.168.1.153:8080/v1/userprofile/api/user
key:Authorization
value: Bearer {TOKEN STRING}

Update current USER
PUT http://192.168.1.153:8080/v1/userprofile/api//user
```
{
  "user": {
    "password": "mypasswordisfrantzdy"
  }
}
```
Returns
```
{
    "user": {
        "username": "frantz@example.com",
        "email": "frantz@example.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NmQ4MzFiZTg5ZTBiMzcwZDY1NmIwYiIsInVzZXJuYW1lIjoiZnJhbnR6QGV4YW1wbGUuY29tIiwiZXhwIjoxNTA1NTMzODcwLCJpYXQiOjE1MDAzNDk4NzB9.9n9Ou1VSwpJs8yz4BcBbrcl-ttnQu3JiBKlHbqLPO3s"
    }
}
```

GET USER PROFILE
http://192.168.1.153:8080/v1/userprofile/api/profiles/frantzdy
Returns
```
{
    "profile": {
        "username": "frantzdy",
        "image": "https://reddit.com'",
        "lastname": "romain",
        "firstname": "frantzdy",
    }
}
```
