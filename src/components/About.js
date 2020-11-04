import React from 'react';
import { Component } from 'react';
import 'antd/dist/antd.css'
import { Timeline } from 'antd';



class About extends Component {
  render() {
    return (
      <div className="row jul pt-md-5">
    <div className="col-md-6 col-12 ">
        <div className="card mt-5 border-0 p-5">
            <h2 className="mt-3 bold text-center">À propos </h2>
            <h5>Je suis développeur <a className="text-decoration-none" ><span style={{color: '#e83e8c'}}>Web</span></a>.
          Au cours de ces années j'ai pu créer de nombreux projets, ces derniers sont accessible depuis l'onglet projets.
        </h5>
            <div className="mt-5">
                <h2 className="bold text-center ">Mon cursus </h2>
                <div className="mt-5">

                    <Timeline mode="alternate" pending="Brevet de technicien supérieur services informatiques aux organisations">
                        <Timeline.Item>Obtentions du Baccalauréat technologique 2017</Timeline.Item>
                        <Timeline.Item>Stage 2019</Timeline.Item>
                        <Timeline.Item> Obtentions du brevet de technicien supérieur 2020</Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-6 col-12 pt-md-5">
        <div className="card mt-md-5 mt-2 mx-auto d-block border-0">
            <img className="w-50 mx-auto shadow-lg d-none d-md-block" src="/assets/cv.png" />
            <img className="w-75 mx-auto d-block shadow-lg d-block d-md-none" src="/assets/cv.png" />

            <div className="row jul">
                <div className="col-12 d-block mx-auto mb-4 mb-md-0">
                    <a href="/assets/cv.pdf" className="d-block mx-auto" target="_blank">
                        <button type="button" className="d-block mx-auto btn btn-primary mt-2">Consulter mon CV</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

);
}
};
export default About;
