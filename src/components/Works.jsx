import React from 'react';
import MainWorks from '../styled/skills/works/mainWorks';
import { release } from 'os';


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
        <ul>
          {
            items.map(item => {
              return item.releases.map(release => {
                return release.awards.map(info => { 
                  console.log(typeof info.value.currency)
                   if(typeof info.value.currency === 'object'){
                    return (
                        <li>
                          {"Null"} 
                        </li>
                      )   
                  }
                  if(typeof info.value.currency === 'string'){
                      return (
                          <li>
                            {info.value.currency} 
                          </li>
                        ) 
                }
                  return info.items.map( items => {
                      // U N I T  -  N A M E
                      // if(typeof items.unit.name === 'object'){
                      //   return (
                      //     <li>
                      //       {"Null"} 
                      //     </li>
                      //   ) 
                      // }
                      // if(typeof items.unit.name === 'string'){
                      //   return (
                      //     <li>
                      //       {items.unit.name} 
                      //     </li>
                      //   ) 
                      // }  
                  })
                })
              })
            })
          }
        </ul>
    </MainWorks>  
    </div>
    }  
      
  }
}
export default Works;   