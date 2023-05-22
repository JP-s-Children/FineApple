import axios from 'axios';

const getMyProfile = () => axios.post('/api/profile');

const getProfileByNickName = nickName => axios.get(`/api/profile/community/${nickName}`);

const editProfile = userInfo => axios.post('/api/profile/edit', { userInfo });

const registerProduct = productInfo => axios.post('/api/profile/register-product', { productInfo });

export { getMyProfile, editProfile, registerProduct, getProfileByNickName };
