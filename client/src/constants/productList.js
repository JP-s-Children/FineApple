const ipadProductTypes = {
  'ipad-basic': 'iPad',
  'ipad-air': 'iPad Air',
  'ipad-mini': 'iPad Mini',
  'ipad-pro': 'iPad Pro',
};

const iphoneProductTypes = {
  'iphone-13': 'iPhone 13',
  'iphone-14': 'iPhone 14',
  'iphone-14-pro': 'iPhone 14 Pro',
  'iphone-se': 'iPhone SE',
};

const macbookProductTypes = {
  'macbook-air-m1': 'MacBook Air M1',
  'macbook-air-m2': 'MacBook Air M2',
  'macbook-pro-13': 'MacBook Pro 13',
  'macbook-pro-14': 'MacBook Pro 14',
  'macbook-pro-16': 'MacBook Pro 16',
};

const productTypes = {
  ...ipadProductTypes,
  ...iphoneProductTypes,
  ...macbookProductTypes,
};

const productList = Object.keys(productTypes);

export { ipadProductTypes, iphoneProductTypes, macbookProductTypes, productTypes };

export default productList;
