const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World EXPRESS!')
})

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })

    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
