import React from 'react';
import ReactDOM from 'react-dom';

class Prueba extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>
  }
}

const myelement = <Prueba brand="Ford" />;

ReactDOM.render(myelement, document.getElementById('root'));

export default Prueba;