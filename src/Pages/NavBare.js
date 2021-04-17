import React from "react";

function NavBare() {

          return (
            <div>
                <a className="scrollToTop" href="javascript:void(0)"><i className="fa fa-angle-double-up"></i></a>
      <header id="aa-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-header-area">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="aa-header-left">
                      <div className="aa-telephone-no"><span className="fa fa-phone"></span> 1-900-523-3564</div>
                      <div className="aa-email hidden-xs"><span className="fa fa-envelope-o"></span> info@domain.com</div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="aa-header-right"><a href="pages/register.php" className="aa-register">Register</a> <a href="pages/signin.php" className="aa-login">Login</a></div>
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
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></button>
              <a className="navbar-brand aa-logo" href="https://www.free-css.com/free-css-templates">Home <span>Property</span></a></div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul id="top-menu" className="nav navbar-nav navbar-right aa-main-nav">
                <li className="active"><a href="https://www.free-css.com/free-css-templates">HOME</a></li>
                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">PROPERTIES <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="pages/properties.php">PROPERTIES</a></li>
                    <li><a href="pages/properties-detail.php">PROPERTIES DETAIL</a></li>
                  </ul>
                </li>
                <li><a href="pages/gallery.php">GALLERY</a></li>
                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">BLOG <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="pages/blog-archive.php">BLOG</a></li>
                    <li><a href="pages/blog-single.php">BLOG DETAILS</a></li>
                  </ul>
                </li>
                <li><a href="pages/contact.php">CONTACT</a></li>
                <li><a href="pages/404.php">404 PAGE</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
            </div>
          );
}

export default NavBare;