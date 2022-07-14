import productsRoute from './products.routes.js'

function routes(app) {
    app.use('/api/products', productsRoute)
}

export default routes