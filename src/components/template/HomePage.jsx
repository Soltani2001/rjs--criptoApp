import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoin } from "../../services/CriptoApi";
import Pagination from "../modules/pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);
  // const [text, setText] = useState("");

  useEffect(() => {
    const getData = async () => {
    try {
      setIsLoaded(true);
      
        const res = await fetch(getCoin(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoaded(false);
      
    } catch (error) {
        console.log(error)
        console.log("error")
    }
};

    getData();
    // console.log(coins);
  }, [page, currency,chart]);

  return (
    <>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoaded={isLoaded} setChart={setChart} />
      {!isLoaded && <Pagination page={page} setPage={setPage} />}
      {!!chart && <Chart chart={chart} setChart={setChart}/>}
    </>
  );
}

export default HomePage;
