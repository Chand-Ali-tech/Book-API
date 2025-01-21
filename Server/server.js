const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config()
const port = process.env.PORT || 3000;

mongoose.connect(`${process.env.URL}/BookStore`)
  .then(() => console.log('Database Connected!'))
  .catch(err => console.error('Error connecting database!'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})