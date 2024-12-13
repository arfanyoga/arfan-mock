const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json') // Your mock data
const middlewares = jsonServer.defaults()

// Use default middlewares (logger, static, CORS, etc.)
server.use(middlewares)

// Custom middleware to modify the GET response
server.get('/posts', (req, res) => {
    // Get the original posts
    const posts = router.db.get('posts').value()

    // Send the response with the custom structure
    res.json({
        success: true,
        data: posts
    })
})

// Use default router for other routes
server.use(router)

// Start the server
server.listen(3000, () => {
    console.log('JSON Server is running')
})
