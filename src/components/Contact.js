
import React from 'react';
import { Component } from 'react';

class Contact extends Component {
  render() {
    return (
<div className="row p-md-5 jul mt-md-5 pt-5 pt-md-0">
<div className="col-12 text-center mt-md-5">
<div className="col-12">
  <h1 className="display-4 mt-5 mb-5 d-none d-md-block">Contactez-moi</h1>
  <h1 className="display-4 mt-5 mb-5 d-block d-md-none">Contactez moi</h1>

</div>
  <h2 className>Une idée, une question ? N'hesitez pas à me contacter<br /></h2>
  <p className="mt-4 "><i style={{color: '#2ffd0f'}} className="fas fa-circle" /> En ligne.</p>
  <a href="mailto:contact@julesclear.fr">  <button type="button" className="btn btn-primary mt-5">contact@julesclear.fr</button></a>
</div>
</div>
    );
  }
};
export default Contact;
