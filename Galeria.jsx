import Imagem from './Imagem';
const imagens = [
    'https://i.pinimg.com/originals/bf/61/05/bf6105d5af0dfb2eeb0b0fc7ef73907d.png',
    'https://jornalperiscopio.com.br/site/wp-content/uploads/2017/12/mc-gw.jpg',
    'https://sm.ign.com/t/ign_br/tv/o/one-piece-/one-piece-2_1xby.1200.jpg',
    'https://techbit.pt/wp-content/uploads/2024/01/ios-18-jpg.webp',
    'https://s.glbimg.com/es/ge/f/300x230/2011/06/03/neymar_reu.jpg',
    'https://cdn2.unrealengine.com/fortnite-balenciaga-fit-outfits-1920x1080-4b198ae5b89e.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/balenciaga-resort-po-s24-030-655495b4ace76.jpg?crop=1.00xw:0.801xh;0,0.199xh&resize=1200:*',
    'https://versatille.com/wp-content/uploads/2022/03/Demna-G.jpg',
    'https://t2.tudocdn.net/642832?w=824&h=494',

];

function Galeria() {
    return (
        <div className="galeria">
            {imagens.map((url, index) => (
                <Imagem key={index} url={url}/>
            ))}
        </div>
    )

}

export default Galeria;