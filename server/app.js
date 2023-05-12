const express = require('express');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

const auth = require('./router/auth');
const cart = require('./router/cart');
const profile = require('./router/profile');
const posts = require('./router/posts');
const post = require('./router/post');
const rank = require('./router/rank');

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', auth);
app.use('/api/cart', cart);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/post', post);
app.use('/api/rank', rank);

app.listen(port, () => {
	console.log(`app listening on http://localhost:${port}`);
});
