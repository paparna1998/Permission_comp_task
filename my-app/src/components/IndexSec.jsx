import pic from './nature.jpg';
import './IndexSec.css';

const IndexSec = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm text-white">
                        <div className="hero-image">
                            <div className="hero-text">
                                <div className="card"
                                    style={
                                        {width: "18rem"}
                                }>
                                    <img className="card-img-top" src={pic} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                                  the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="col-sm text-white">
                        <div className="hero-image">
                            <div className="hero-text">
                                <h1 style={
                                    {fontSize: 50}
                                }>I am John Doe</h1>
                                <p>And I'm a Photographer</p>
                                <button>Hire me</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm text-white">
                        <div className="hero-image">
                            <div className="hero-text">
                                <h1 style={
                                    {fontSize: 50}
                                }>I am John Doe</h1>
                                <p>And I'm a Photographer</p>
                                <button>Hire me</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm text-white">
                        <div className="hero-image">
                            <div className="hero-text">
                                <h1 style={
                                    {fontSize: 50}
                                }>I am John Doe</h1>
                                <p>And I'm a Photographer</p>
                                <button>Hire me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default IndexSec;
