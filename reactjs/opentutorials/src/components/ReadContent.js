
import React, {Component} from 'react';

class ReadContent extends Component{
    render(){
        
    return(
      <header>
        <h1>  {this.props.title}</h1>
        {this.props.desc}
      </header>
    );
    }
    }

export default ReadContent;