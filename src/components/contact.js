import React from "react";
import "./contact.css";


class Contact extends React.Component { 
  constructor(props){
      super(props);
      this.state={
          online:this.props.status
      }
  }
  render() {
    return (
      <figure className="Contact" onClick={()=>{
          this.setState({online:!this.state.online})
      }}>
        <img src={this.props.avatar} alt={this.props.character} />
        <div>
          <div className="name"> {this.props.name} </div>
          <div className="status">
            {this.state.online ? (
              <div className="status-online" >
                <p> online </p>
              </div>
            ) : (
              <div className="status-offline">
                <p> offline </p>
              </div>
            )}
          </div>
        </div>
      </figure>
    );
  }
}

export default Contact;
