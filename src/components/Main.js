import React from "react";
import '../css-components/Main.css';
import HornedBeasts from "./HornedBeasts";
import data from "./assets/data.json";
import SelectedBeast from "./SelectedBeast"

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTitle: '',
            selectedImg: '',
            selectedDes: '',
            showModel: false
        }
    }

    handleClose = () => {
        this.setState({showModel: false});
    };
    show = (title, img, des) => {
        this.setState({
            selectedTitle: title,
            selectedImg: img,
            selectedDes: des,
            showModel: true
        });
    };
    

    render() {
        const list = data.map(item => {
            return (
                <>
                    <HornedBeasts title={item.title} image_url={item.image_url} description={item.description} show={this.show.bind(this)} />
                    <SelectedBeast show={this.state.showModel} handleClose={this.handleClose} selectedTitle={this.state.selectedTitle} selectedImg={this.state.selectedImg} selectedDes={this.state.selectedDes} />
                </>
            )
        })
        return list;
    }
}

export default Main;