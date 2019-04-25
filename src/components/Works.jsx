import React from 'react';
import MainWorks from '../styled/skills/works/mainWorks';

class Works extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {
    	items: [],
      isLoaded: false,
    }	
  }
  componentDidMount() {
  	fetch( '../src/contratos.json')
    	.then(res => res.json())
      .then(json => {
      	this.setState({
        	isLoaded: true,
          items: json,
        })
      });
  }
	render() {
  	var { isLoaded, items } = this.state;
  
    if (!isLoaded) {
    	return <div> loading yet ... :( </div>
    }
    else {
   		return <div> 
      <MainWorks> 
        <h1>Hola</h1>
    </MainWorks>  
    </div>
    }      
  }
}
export default Works;   