/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const getRank = topCount => axios.get(`/api/rank?topCount=${topCount}`);

export { getRank };
