import React from 'react';
import 'antd/dist/antd.css'
import { Card } from 'antd';
import { Component } from 'react';




const { Meta } = Card;




class Project extends Component {
  state = {loading: true,};
  render() {
const { loading } = this.state;
    return (

      <div className="pt-5 mt-5">
      <h2 className="text-center bold mt-md-5">Mes projets</h2>
      <div className="container">
          <div className="row pt-5 d-flex mb-5">
              <div className="col-md-6 col-12 mt-3 d-flex">
                  <a href="http://cr-devtux16.leschartreux.com/~j.clear/" target="_blank">
                      <Card className="flex-fill" hoverable cover={<img alt="example" src="/assets/stockpro2.jpg" />} >
                      <Meta title="StockPro" onClick="" description="Réalisation d'un panier PHP. StockPro est une entreprise de e-commerce en concurrence directe avec LDLC. Conscient de son retard, le directeur nous à confier le développement de la partie Panier du site internet." />
                      </Card>
                  </a>
              </div>
              <div className="col-md-6 col-12 mt-3 d-flex">
                  <a href="http://cr-devtux16.leschartreux.com/~m.arabian/" target="_blank">
                      <Card className="flex-fill" hoverable cover={<img alt="example" src="/assets/roulex.jpg" />} >
                      <Meta title="Roulex" onClick="" description="Suite à l’appel d’offre de l’entreprise Roulex, nous avons eu pour mission de développer leur site e-commerce. Roulex est une entreprise de luxe proposant des montres hauts de gammes depuis 1916." />
                      </Card>
                  </a>
              </div>
              <div className="col-md-6 col-12 mt-md-3 d-flex">
                  <Card className="flex-fill d-none d-md-block" hoverable loading={loading} cover={<img alt="..." src="/assets/construct.jpg" />} >
                  <Meta title="StockPro" description="StockPro est une entreprise de e-commerce en concurrence directe avec LDLC. Conscient de son retard, le directeur nous à confier le développement de la partie Panier du site internet." />
                  </Card>
              </div>
              <div className="col-md-6 col-12 mt-3 d-flex">
                  <Card className="flex-fill my-auto h-100" hoverable>

                  <h2 className="bold text-primary">2</h2>
                  <p>Projets terminés.</p>
                  <br />
                  <h2 className="bold text-primary">80k</h2>
                  <p>Lignes de codes.</p>
                  <br />
                  <h2 className="bold text-primary">154h</h2>
                  <p>Temps de développement.</p>

                  <Meta title="Statistiques" description="Voici un bref récapitulatif des statistiques global de mes projets." />

                  </Card>
              </div>
          </div>
      </div>
  </div>
     );
   }
 };

 export default Project;
