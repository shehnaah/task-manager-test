const mongoose = require('mongoose');
const dotenv = require('dotenv')

const mongoURI = 'mongodb+srv://shehna0501:1234sheh@urbanvista.dcjqxhi.mongodb.net/taskmanager?retryWrites=true&w=majority';
// const uri = process.env.mongoURI;
// const options = {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// };


	mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
	  .then(() => {
		console.log('Connected to MongoDB');
	  })
	  .catch((error) => {
		console.error('Error connecting to MongoDB:', error.message);
	  });
	