const cors = require('cors');
const bodyParser = require('body-parser');

const { useDb } = require('./useDb');

function middleWare(app) {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(useDb());


}

module.exports = {
    middleWare,

}