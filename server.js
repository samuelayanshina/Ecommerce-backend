const express = require('express');
const cors = require('cors');
// const cloudinary = require('cloudinary');
const app = express();
// require('dotenv').config();
const http = require('http');
// require('./connection')
const server = http.createServer(app);
const {Server} = require('socket.io');
// const io = new Server(server, {
//     cors: '*',
//     methods: '*'
// })

const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const imageRoutes = require('./routes/imageRoutes')

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoutes);
app.use('products', productRoutes);
app.use('/images', imageRoutes);

app.use('/users', userRoutes)
require('./connection')

// const express = require('express');
// const app = express();
// const userRoutes = require('./routes/userRoutes')
// const User = require('./models/User');
// // const Message = require('./models/Message')
// // const rooms = ['general', 'tech', 'finance', 'crypto'];
// const cors = require('cors');

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(cors());

// app.use('/users', userRoutes)
// require('./connection')

// const server = require('http').createServer(app);
// const PORT = 8080;
// const io = require('socket.io')(server, {
//   cors: {
//     origin: 'http://localhost:8080',
//     methods: ['GET', 'POST']
//   }
// })


server.listen(8080, ()=> {
    console.log('server running at port', 8080)
});


// server.listen(PORT, ()=> {
//     console.log('listening to port', PORT)
//   })