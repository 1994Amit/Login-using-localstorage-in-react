import React from "react";

export default class FetchRandomUser extends React.Component {
 state = {
    loading: true,
    person: null,
    showMessage: false
  };


  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  
  showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
 return (
      <div>
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} />
        <div>
        <button onClick={this.showMessage.bind(null, true)}>show</button></div>
        
 { this.state.showMessage && (<div> <span>Company: Geeksynergy Technologies Pvt Ltd Address:  Sanjayanagar, Bengaluru-56 Phone:XXXXXXXXX09 Email: XXXXXX@gmail.com</span> </div>) }
      </div>
    );
  }
}