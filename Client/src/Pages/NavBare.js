import React from "react";

function NavBare() {

  return (
    <div>
        <a className="scrollToTop" href=""><i className="fa fa-angle-double-up"></i></a>
        <header id="aa-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="aa-header-area">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6">

                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <div className="aa-header-right"><a href="#"
                                            className="aa-register">Register</a> <a href="#"
                                            className="aa-login">Login</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="aa-menu-area">
            <nav className="navbar navbar-default main-navbar" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span
                                className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span
                                className="icon-bar"></span> <span className="icon-bar"></span></button>
                        <a className="navbar-brand aa-logo" href="">e<span>Rent</span></a></div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul id="top-menu" className="nav navbar-nav navbar-right aa-main-nav">
                            <li><a href="">Accueil</a></li>
                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="">Mes
                                    Annonces <span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                
                                    <li><a href="#">Mes Annonces</a></li>
                                    <li><a href="#">PROPERTIES DETAIL</a></li>
                                </ul>
                            </li>

                            <li className="active"><a href="#">PROPOSER UN LOGEMENT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    </div>
  );
}

export default NavBare;