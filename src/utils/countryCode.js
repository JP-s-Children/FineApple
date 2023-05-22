import countyList from '../constants/countyList';

const convertCountryNameToCode = countryName =>
  Object.values(countyList).find(info => info.CountryNameKR === countryName)['2digitCode'];

// eslint-disable-next-line import/prefer-default-export
export { convertCountryNameToCode };
