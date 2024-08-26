import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Dummy location",
      },
    };

    console.log(this.props.name + "UserClass constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "UserClass componentDidMount");
    const data = await fetch("https://api.github.com/users/KrishnaPuranik");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });

    this.timer = setInterval(() => {
      console.log("UserClass set interval");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + "UserClass render");
    const { name, location, contact, id, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increament Count
        </button>
        <img className="my-4" src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>ID: {id}</h4>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;

/*
Class life cycle

About constructor
About.js:17 About render
UserClass.js:12 Krishna Moorthi Puranik (Class Component)UserClass constructor
UserClass.js:20 Krishna Moorthi Puranik (Class Component)UserClass render
UserClass.js:12 Krishna Puranik (Class Component)UserClass constructor
UserClass.js:20 Krishna Puranik (Class Component)UserClass render

<After this dif is calculated, reconcilation happens>
<DOM UPDATED - IN A SINGLE BATCH>

UserClass.js:16 Krishna Moorthi Puranik (Class Component)UserClass componentDidMount
UserClass.js:16 Krishna Puranik (Class Component)UserClass componentDidMount
About.js:13 About componentDidMount
*/
