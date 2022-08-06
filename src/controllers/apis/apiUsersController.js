const db = require('../../database/models');

const getUrl = (req) => req.protocol + "://" + req.get("host") + req.originalUrl;

module.exports = {


    
    
    all : (req, res) => {
        db.User.findAll({
            attributes: ['id', 'user', 'name', 'last_name', 'email', 'user_rol_id'],
        })
        .then((result) => {
            if (result !== 0) {
                res.status(200).json({
                    meta: {
                        endPoint: getUrl(req),
                        total: result.length,
                    },
                    data: result,
                });
            } else {
                return res.status(404).json({
                    meta: {
                        status: 404,
                        msg: "Not found",
                    },
                });
            }
        })
        .catch((error) => res.status(400).send(error))
    },
    one : async (req, res) => {
        await db.User.findByPk(req.params.id)
        .then((result) => {
            if (result !== 0) {
                res.status(200).json({
                    meta: {
                        endPoint: getUrl(req),
                        total: result.length,
                    },
                    data: result,
                });
            } else {
                return res.status(404).json({
                    meta: {
                        status: 404,
                        msg: "Not found",
                    },
                });
            }
        })
        .catch((error) => res.status(400).send(error));
    }
}