import '../App.css';
import { Index } from '../interfaces'

export function Element(props: { element: Index }) {
  return (
    <div className="item">
      <div style={{fontWeight: 600}} >
        {props.element.name}
      </div>
      
      <div className="item-price">
        $ {props.element.usdPriceInCents / 100} / {props.element.ethPriceInWei / 1000000000000000000} ETH
      </div>
      
      <div className='flex-between item-usd'>$ {new Intl.NumberFormat().format(props.element.usdCapitalization)}
        <span className={props.element.percentageChange > 0 ? 'percent-g' : 'percent-r'}>
          {props.element.percentageChange} %
          </span>
      </div>
    </div>
  );
}
