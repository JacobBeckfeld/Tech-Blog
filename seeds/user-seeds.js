const { User } = require("../models");

const userData = [
    {
        user_name: "GreatUser",
        email: "Greatguy@gmail.com",
        password: "Great1234!"
    },
    {
        user_name: "Honeyboo",
        email: "BooBoo@yahoo.com",
        password: "123boo123"
    },
    {
        user_name: "CaringMom",
        email: "Momslove@aol.com",
        password: "ILOVEMYKIDS!"
    },
    {
        user_name: "Troll",
        email: "ImTrolling@gmail.com",
        password: "Trollering"
    },
    {
        user_name: "BadGuy",
        email: "baddestguyaround@gmail.com",
        password: "imreallynotthatbad"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;