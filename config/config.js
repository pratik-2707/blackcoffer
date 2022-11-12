const dotenv = require("dotenv").config("../*.env")

const {PORT , DB_URI }  = process.env

module.exports = {
    port : PORT , 
    db_uri : DB_URI
}