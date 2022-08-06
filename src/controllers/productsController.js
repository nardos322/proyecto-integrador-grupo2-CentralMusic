const {products} = require('../data');
const db = require('../database/models');
const fetch = require('node-fetch')


const productsController = {
    // muestra todas las guitarras
    guitars:  (req, res) => {
        fetch('http://localhost:3000/apis/products')
        .then(res => res.json())
        .then(products => {
           
            res.render('products/guitars', {
                products: products.data
            })
            
        })
        .catch((error) => res.status(400).send(error))
    },
    // muesta todos los accesorios
    accesories: async(req, res) => {
        try {
            const response = await fetch('http://localhost:3000/apis/products');
            const products = await response.json()
            let accesories = [];
            products.data.forEach(accesory => {
                if(accesory.subcategories.name == 'Accesorios'){
                    accesories.push(accesory)
                }
                
            });
  
            res.render('products/accesories', {
                accesories,
            })
            

        }catch{
            res.status(400).send(error);
        }
    },
    cables: async(req, res) => {
        try{
            const response = await fetch('http://localhost:3000/apis/products');
            const products = await response.json();
            let cables = [];
            products.data.forEach(cable => {
                if(cable.subcategories.name == 'Cables para instrumentos'){
                    cables.push(cable)
                }
            })
            res.render('products/cables', {
                cables,
            })
            

        }catch{
            res.status(400).send(error);
        }
    },
    pedals: async (req, res) => {
        const products = await fetch('http://localhost:3000/apis/products').then(response => response.json()).catch((error) => res.status(400).send(error))
        let pedals = [];
        products.data.forEach(pedal => {
            if(pedal.subcategories.name == 'Pedales'){
                pedals.push(pedal)
            }
        })
        res.render('products/pedals', {
            pedals,
        })
        
    },
    // muestra carrito
    carrito: (req,res) => res.render('products/carrito'),
    // muestra detalle de cada producto
    
    detail: (req, res) => {
        let productId = +req.params.id;

        db.Product.findByPk(productId, {
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
                res.render('products/detailsProduct', {
                    product,
                })
            })

        // let product = products.find(product => product.id == productId);

    },
    /*
    detail: (req, res) => {
        let productId = +req.params.id;
        let product = products.find(product => product.id === productId);

        res.render('products/detailsProduct', {
            product,
            products,
        });
    },*/
    

}   
module.exports = productsController;