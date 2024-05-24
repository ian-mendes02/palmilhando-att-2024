import { list } from './utils'
export default function Pagamento({className}) {
    const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX;
    return (
        <div className={list('grid grid-cols-6 select-none my-2 opacity-75 grayscale', className)}>
            <img src={ASSET_PREFIX + "img/svg/creditcard_1.svg"} alt="" draggable="false" className="w-12 h-12" />
            <img src={ASSET_PREFIX + "img/svg/creditcard_2.svg"} alt="" draggable="false" className="w-12 h-12" />
            <img src={ASSET_PREFIX + "img/svg/creditcard_3.svg"} alt="" draggable="false" className="w-12 h-12" />
            <img src={ASSET_PREFIX + "img/svg/creditcard_4.svg"} alt="" draggable="false" className="w-12 h-12" />
            <img src={ASSET_PREFIX + "img/svg/billet.svg"} alt="" draggable="false" className="w-12 h-12 mix-blend-exclusion" />
            <img src={ASSET_PREFIX + "img/svg/pix.svg"} alt="" draggable="false" className="w-12 h-12" />
        </div>
    )
}