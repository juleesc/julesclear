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

      <div>
         <h2 className="text-center bold mt-md-5">Mes projets</h2>
         <div className="container">
           <div className="row pt-5 d-flex">
             <div className="col-md-6 col-12 mt-3">
             <a href="http://cr-devtux16.leschartreux.com/~j.clear/" target="_blank">
             <Card
     hoverable

     cover={<img alt="example" src="../assets/stockpro2.png" />}
   >
  <Meta  title="StockPro" onClick="" description="Réalisation d'un panier PHP. StockPro est une entreprise de e-commerce en concurrence directe avec LDLC. Conscient de son retard, le directeur nous à confier le développement de la partie Panier du site internet." />
   </Card>
   </a>
             </div>
             <div className="col-md-6 col-12 mt-3">
             <Card
     hoverable
loading={loading}
     cover={<img alt="example" src="../assets/stockpro2.png" />}
   >
     <Meta  title="StockPro" description="StockPro est une entreprise de e-commerce en concurrence directe avec LDLC. Conscient de son retard, le directeur nous à confier le développement de la partie Panier du site internet." />
   </Card>
             </div>
           </div>
         </div>
       </div>
     );
   }
 };

 export default Project;
