import MasterPage from '../components/Master';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import fetch from 'isomorphic-unfetch';
const Index = (props)=>(
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Precio 
                    precio = {props.precioBitcoin}
                />
            </div>
            <div className="col-md-8">
                <h2>Noticias sobre Bitcoin</h2>
                <Noticias 
                    
                    noticias={props.noticias}
                />
            </div>
            <div className="col-md-4">
                <h2>Próximos Eventos Bitcoin</h2>
            </div>
        </div>
    </MasterPage>
);
Index.getInitialProps = async () =>{
    const precio = await fetch ('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch ('https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-24&sortBy=publishedAt&apiKey=7fdac1fae53840778aeec153e71bec31&language=es');
 
    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    return {
        precioBitcoin: resPrecio.data.quotes.USD,
        noticias: resNoticias.articles
    }
}
export default Index;