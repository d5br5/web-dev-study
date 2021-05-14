
import React, {Component} from 'react';

class Subject extends Component{
    render(){
    return(
      <article>
        <h1> <a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
          
        }.bind(this)}> {this.props.title}</a></h1>
        {this.props.sub}
      </article>
    );
    }
    }

export default Subject;