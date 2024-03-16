import { useEffect, useState } from "react";
import { getText } from "../../services/CriptoApi";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Search.module.css";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const control = new AbortController();

    setCoins([]);
    setLoading(false);
    if (!text) return;
    const search = async () => {
      try {
        const res = await fetch(getText(text), { signal: control.signal });
        const json = await res.json();
        console.log(json);
        // setText(json)
        if (json.coins) {
          setLoading(false);
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setLoading(true);
    search();

    return () => {
      control.abort();
    };
  }, [text]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>

    {(coins.length || loading) && <div className={styles.result}>
        {loading && (
          <RotatingLines 
          width="50px" 
          height="50px" 
          strokeColor="#3874ff" />
        ) }
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
      </div> }
      
    </div>
  );
}

export default Search;
