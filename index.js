
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const authRoute= require('./routes/auth.route')
const userRoute=require('./routes/user.route')
const authMiddleware= require('./middlewares/auth.middlewares')
const cookieParser = require('cookie-parser')
app.use(cookieParser('wwww4343feeft')) 

const port = 3000
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.render('index', { name: 'AA' })
})

app.use('/users',authMiddleware.requireAuth ,userRoute)
app.use('/auth',authRoute)


app.use(express.static('public'))



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});