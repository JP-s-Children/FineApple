import axios from 'axios';

const auth = () => axios.get('/api/auth');

const checkEmail = email => axios.post('/api/checkemail', { email });

const checkNickName = nickName => axios.post('/api/checknickname', { nickName });

const signIn = async userInfo => axios.post('/api/signin', { email: userInfo.email, password: userInfo.password });

const signUp = userInfo => axios.post('/api/signup', { userInfo });

const signOut = () => axios.get('/api/signout');

export { auth, checkEmail, checkNickName, signIn, signUp, signOut };
