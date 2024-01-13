const todoApp = require('./todoServer')

const port = 3000

todoApp.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`)
})