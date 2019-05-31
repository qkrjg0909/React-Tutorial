import React from 'react';

class Customer extends React.Component {
  render(){
    return(
      <div>
        <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
        <CustomerInfo job={this.props.job} birthday={this.props.birthday} gender={this.props.gender}/>

        <h2></h2>
        <p></p>
        <p></p>
        <p></p>

      </div>

    )

  }
}

class CustomerProfile extends React.Component{
  render(){
      return(
          <div>
            <img src={this.props.image} alt="profile"/>
            <h2>{this.props.name}({this.props.id})</h2>

          </div>
      )
  }
}

class CustomerInfo extends React.Component{
  render(){
    return(
      <div>
        <p> {this.props.birthday}</p>
        <p> {this.props.gender}</p>
        <p> {this.props.job}</p>
      </div>
    )
  }
}

export default Customer;
