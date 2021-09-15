import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./components/assets/data.json";
import Form from 'react-bootstrap/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendData: data,
      numberOfHorns: 0
    }
  }

  filterArray = (num) => {
    let tempArray = data.filter(item => {
      if (num === 0) {
        return item;
      }
      else {
        if (item.horns === num) {
          return true;
        }
        else {
          return false;
        }
      }
    });
    // console.log('fun', tempArray);
    // console.log('fun', num);
    // console.log(data);
    return tempArray;
  }

  eventHandler = async (event) => {
    event.preventDefault();
    await this.setState({
      numberOfHorns: event.target.value,
      sendData: this.filterArray(Number(event.target.value))
    });

    // console.log(this.state.sendData);
    // console.log(this.state.numberOfHorns);

  };



  render() {
    return (
      <>
        <Header />

        <Form.Select name="hornNumber" aria-label="Default select example" onChange={this.eventHandler}>
          <option value="0">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">WoW!!!</option>
        </Form.Select>

        <Main appData={this.state.sendData} />
        <Footer />
      </>
    )

  }
}

export default App;
