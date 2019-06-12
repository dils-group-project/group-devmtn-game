const cors = require('cors');
const bodyParser = require('body-parser');

const { useDb } = require('./useDb');

function midWare(app) {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(useDb());

}

module.exports = {
    midWare,

}
