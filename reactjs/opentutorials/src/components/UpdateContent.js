
import React, {Component} from 'react';

class UPdateContent extends Component{

    constructor(props){
      super(props);
      this.state={
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
    }
    render(){
    return(
      <header>
        <h1>Update</h1>
        <form action="/create_process" method="post" onSubmit={function(e){
          
          e.preventDefault();
          this.props.onSubmit(
            this.state.id,
            this.state.title,
            this.state.desc
          );
          alert("submit!");
        }.bind(this)}>
          <input type="hidden" name="id" value={this.state.id}>

          </input>

          <input 
            type="text" 
            name="title" 
            placeholder="title"
            value={this.state.title}
            onChange={this.inputFormHandler}
            >

          </input>
          <p>
            <textarea 
              name="desc" 
              placeholder="description"
              onChange={this.inputFormHandler}
              value={this.state.desc}>

            </textarea>
          
          </p>
          <p><input type="submit"></input></p>
        </form>
      </header>
    );
    }}
    

export default UPdateContent;