import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("About constructor");
  }

  componentDidMount() {
    console.log("About componentDidMount");
  }

  render() {
    console.log("About render");
    return (
      <div className="m-4">
        <h1 className="font-bold text-xl">About Us</h1>
        <h2 className="font-bold text-sm">Food Delivery App by Krishna</h2>
        <User name={"Krishna Moorthi Puranik (Function Component)"} />
        <UserClass
          name={"Krishna Moorthi Puranik (Class Component)"}
          location="Udupi"
          contact="9996663331"
        ></UserClass>
        {/* <UserClass name={'Krishna Puranik (Class Component)'} location='Bengaluru' contact='9996663331'></UserClass> */}
      </div>
    );
  }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>Food Delivery App by Krishna</h2>
//             {/* <User name={'Krishna Moorthi Puranik (Function Component)'}/> */}
//             <UserClass name={'Krishna Moorthi Puranik (Class Component)'} location='Udupi' contact='9996663331'></UserClass>
//         </div>
//     );
// }

export default About;
