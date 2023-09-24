import { useContext } from 'react'
import { ArticlesContext } from '../../context/ArticlesContext'

const CartWidget = () => {
    const { totalCart } = useContext(ArticlesContext)
    return (
        <svg aria-labelledby="title-carrito-nav" width="19.7527mm" height="19.9558mm" version="1.1" style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'optimizeQuality',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        }}
            viewBox="0 0 1975.26 1995.57">
            <title id="title-carrito-nav">ícono de carrito</title>
            <path d="M606.81 1592.05c-127.66,0 -203.33,75.67 -203.33,201.73 0,100.94 75.67,201.79 203.33,201.79 100.92,0 
                176.58,-100.85 176.58, -201.79 0,-126.06 -75.67,-201.73 -176.58,-201.73zm-505.97 -1390.27l100.85 0 354.7 758.21 
                -127.72 226.98c-75.67,151.31 25.25,302.64 178.14,302.64l1084.5 0c50.4,0 75.67,-50.46 75.67,-100.85 0,-50.46 
                -25.25,-100.92 -75.67,-100.92l-1084.5 0 100.92 -201.73 731.34 0c75.67,0 151.31,-25.25 176.58,-100.92l353.04 
                -630.47c25.25,-75.67 -25.21,-152.93 -100.85,-152.93l-1439.15 0 -75.67 -126.12c-25.21,
                -50.46 -50.4,-75.67 -100.85,-75.67l-151.31 0c-50.46,0 -100.85,50.46 -100.85,100.85 0,75.67 
                50.4,100.92 100.85,100.92l-0.01 0.01zm1489.55 1390.27c-126.06,0 -201.73,75.67 -201.73,201.73 0,100.94 
                75.67,201.79 201.73,201.79 100.92,0 176.58,-100.85 176.58,-201.79 0,-126.06 -75.67,-201.73 -176.58,-201.73z"/>
            {totalCart > 0 ? (
                <>
                    <circle id="circleCart" fill="rgb(255, 242, 18)" cx="1350.21" cy="1350.3" r="650" />
                    <text id="countCart" fill="rgb(62, 64, 149)" x="1300" y="1600" textAnchor="middle" alignmentBaseline="middle"
                        fontSize="1150">{totalCart}</text>
                </>
            ) : null}
        </svg>
    )
}
export default CartWidget