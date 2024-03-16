import { RotatingLines } from 'react-loader-spinner';
import TableRow from '../TableRow';
import styles from './TableCoin.module.css'

function TableCoin({coins, isLoaded, setChart}) {
    // console.log(coins);
    return ( 
    <>
        <div className={styles.container}>
            {(isLoaded) ? (<RotatingLines className={styles.spinner} strokeColor='#3874ff'  />) : (<table className={styles.table}>
                <thead>
                    <tr>
                        <th>coin</th>
                        <th>name</th>
                        <th>price</th>
                        <th>24h</th>
                        <th>Total Valume</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   { coins.map(coin=> 
                   <TableRow key={coin.id} coin={coin} setChart={setChart} />
                    )}
                </tbody>
            </table>) 
            
            }
            
        </div>
    </>
     )
}

export default TableCoin;