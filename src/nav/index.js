import React from 'react';
import Footer from '../components/footer/index'; 

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">CRP: 06/161936</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#sobre">Sobre</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#atendimento">Atendimento</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contato">Contato</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#localizacao">Localização</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#blog">Blog</a></li>
                </ul>
            </div>
            <Footer/>
        </nav>
    );
}
