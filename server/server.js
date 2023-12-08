const cors = require('cors');
const express = require('express');
const app = express();
require('./database/db');
const authRoutes = require('./routes/authRoutes');
const taskRouter = require('./routes/taskRoutes');
const morgan = require('morgan');
require('dotenv').config()
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/task', taskRouter);

// localhost:4000/auth/register

const port=4000 || process.env.PORT
app.listen(port, () => {
	console.log(`server is running on port`, port);
});
// app.get('/',(req,res)=>{
//     res.send('<h1>Freelo Server Started and Waiting For client request!!!</h1>')
// })

app.get('/', (req, res) => {
    // Add your rendered server link in the response HTML below
    const renderedLink = `<h1>task Server Started and Waiting For Client Requests!!!</h1>
                         <p>Visit the rendered server at: <a href="https://taskmg-server.onrender.com">https://taskmg-server.onrender.com</a></p>`;
    res.send(renderedLink);
});
