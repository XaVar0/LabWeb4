import Footer from './components/Footer';
import BlogList from './components/BlogList';
import Header from './components/Header';
import { useLoaderData } from 'react-router-dom';
function IndexMain(props){
    const {data} = useLoaderData();
    return (
    <div>
        <Header /> 
        <div className="row" id="changeSize">
            <div className="col">
                <div className="row">
                    <div className="col marge">
                        <input className="form-control mr-sm-2" type="search" placeholder="Recherche" aria-label="Recherche"/>
                    </div>
                    <div className="col-3 marge">
                        <button className="btn btn-dark my-2 my-sm-0" type="submit">Rechercher</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row marge">
                    <div className="col">
                        <h4>Trier par</h4>
                    </div>
                    <div className="btn-group col-3">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Selection
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">Action</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <BlogList data={data}/>
        <Footer />
    </div>   
    );
}
export default IndexMain;
