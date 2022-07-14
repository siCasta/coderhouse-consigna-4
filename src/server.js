import app from './settings.js'

(async () => {
    try {
        await app.listen(app.get('port'))
        console.log(`Server running at http://localhost:${app.get('port')}`)
    } catch (err) {
        console.error(err)
    }
})()