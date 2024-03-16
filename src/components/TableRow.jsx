import up from'../assets/chart-up.svg'
import down from'../assets/chart-down.svg'
import styles from './TableRow.module.css'
import { marketChart } from '../services/CriptoApi'

function TableRow({coin, setChart}) {
    const {id, image, symbol, name, current_price, price_change_percentage_24h, total_volume} =coin;

    const showHandeler = async ()=>{
        // setChart(true)
        try{
                const res = await fetch(marketChart(id));
                const json = await res.json();
                console.log(json);
                setChart({...json, coin})
            }catch(error){
                setChart(null)
        }
    }

    return ( <>
   
    <tr>
                    <td>
                        <div 
                        className={styles.symbol} 
                        onClick={showHandeler}>
                            <img src={image} />
                            <span>{symbol.toUpperCase()}</span>
                        </div>
                    </td>
                    <td>{name} </td>
                    <td>{current_price.toLocaleString()} </td>
                    <td className={price_change_percentage_24h > 0 ? styles.success : styles.error}> {price_change_percentage_24h.toFixed(2)} %</td>
                    <td>{total_volume.toLocaleString()}</td>
                    <td> <img src= {
                        price_change_percentage_24h > 0 ? up  : down
                        } /></td>
                    </tr>
    
    </> );
}

export default TableRow;