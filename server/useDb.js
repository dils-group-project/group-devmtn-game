const path = require('path');
require('dotenv').config({ path: __dirname + '/.env' });
const massive = require('massive');

let dbPromise;

function useDb() {
    return function dbMiddleWare(req, res, next) {
        if(!dbPromise) {
            dbPromise = getDb();
        }

        dbPromise.then(dbInstance => {
            req.db = dbInstance;

            next();
        }).catch(err => {
            console.error(err);
            res.status(500).send({ message: 'Something terrible happened!' });
            dbPromise = null;
        });
    };
};

function getDb() {
    return massive( process.env.DB_CONNECTION_STRING, { scripts: path.join(__dirname, 'db' )} );
}

module.exports = {
    useDb,

}

// DB connection string is a temporary URL, links to my Heroku for now --Drew