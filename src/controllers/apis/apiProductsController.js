const db = require('../../database/models');

const getUrl = (req) => req.protocol + "://" + req.get("host") + req.originalUrl;

module.exports = {
  
    all : (req, res) => {
        db.Product.findAll({
            include: [
                { association: 'marca' },
                { association: 'subcategories' },
                { association: 'productsImages' },
            ]
        })
            .then(products => {
                if(products !== 0){
                    return res.status(200).json({
                        meta: {
                            endPoint: getUrl(req),
                            total: products.length,
                        },
                        data: products,
                    })
                }else{
                    return res.status(404).json({
                        meta: {
                            status: 404,
                            msg: 'Not found',
                        },
                    });
                }
                
            })
            .catch(error => res.status(400).send(error));
    },
    
    one : async (req, res) => {
        await db.Product.findByPk(req.params.id, {
            include: [
                { association: 'subcategories' },
                { association: 'guitarDetail' },
                { association: 'cuerdaDetail' },
                { association: 'pedalDetail' },
                { association: 'cableDetail' },
                { association: 'marca' },
                { association: 'productsImages' }
            ]
        })
        .then(product => {
            if(product !== 0){
                return res.status(200).json({
                    meta: {
                        endPoint: getUrl(req),
                        total: product.length,
                    },
                    data: product
                });
            }else{
                return res.status(404).json({
                    meta: {
                        status: 404,
                        msg: 'Not found',
                    },
                });
            }
        })
        .catch(error => res.status(400).send(error));
    },
    
}