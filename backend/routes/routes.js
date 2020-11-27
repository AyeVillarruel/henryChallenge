const express = require('express')
const axios = require('axios')
const router = express.Router()


router.get('/api/search/:product/:offset', function (req, res) {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.params.product}&offset=${req.params.offset}&limit=30`)
    .then(response=>{
        return response.data
    })
    .then((algo)=>{
        console.log(algo)
        const products =[]
        algo.results.map(producto =>{
            products.push({
                id:producto.id,
                title:producto.title,
                price:producto.price,
                currency_id:producto.currency_id,
                available_quantity:producto.available_quantity,
                thumbnail:producto.thumbnail,
                condition:producto.condition
            })
        })
        return res.send(products)
    })

})


module.exports = router