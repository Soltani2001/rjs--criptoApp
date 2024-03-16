const BASE_URL = "https://api.coingecko.com/api/v3";
const KEY = "CG-hH2w4na9caFcq3ApQoh92Npi";



const getCoin = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&x_cg_demo_api_key=${KEY}`;
};
const getText =(query)=>{
    return (`${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${KEY}`);
}
const marketChart =(coin)=>{
  return (`${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`)
}

export { getCoin, getText, marketChart };
