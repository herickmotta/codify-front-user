const API_DEV_URL = process.env.REACT_APP_API_URL_DEV;

const API_PROD_URL = process.env.REACT_APP_API_URL_PROD;

const PRODUCTION = true;

const API_URL = PRODUCTION ? API_PROD_URL : API_DEV_URL;

export default API_URL;
