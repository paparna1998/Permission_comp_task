import IndexSec from './IndexSec';
import pic from './sky.jpg';
import picOne from './nature.jpg';
import './Index.css';

const Index = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
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
                        <div className="box">
                            <form>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form2Example1" className="form-control"/>
                                    <label className="form-label" htmlFor="form2Example1">
                                        Email address
                                    </label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="form2Example2" className="form-control"/>
                                    <label className="form-label" htmlFor="form2Example2">
                                        Password
                                    </label>
                                </div>

                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-center">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="form2Example31" defaultChecked=""/>
                                            <label className="form-check-label" htmlFor="form2Example31">
                                                {" "}
                                                Remember me{" "} </label>
                                        </div>
                                    </div>
                                    <div className="col">

                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-primary btn-block mb-4">
                                    Sign in
                                </button>

                                <div className="text-center">
                                    <p>
                                        Not a member?
                                        <a href="#!">Register</a>
                                    </p>
                                    <p>or sign up with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-facebook-f"/>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-google"/>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-twitter"/>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-github"/>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>


                    <div className="col-sm text-white">
                    <div className="hero-image">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100"
                                            src={picOne}
                                            alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100"
                                            src={picOne}
                                            alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100"
                                            src={picOne}
                                            alt="Third slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            </div>
                    </div>


                    <div className="col-sm text-white">
                        <div className="hero-image">
                            <div className="hero-text">
                                <img src={pic} alt="Something Wrong" width={100} height={100}/>
                                <p>And I'm a Photographer</p>
                                <button>Hire me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>

            <IndexSec/>
        </>
    )
}
export default Index;
