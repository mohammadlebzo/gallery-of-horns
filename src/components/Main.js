import React from "react";
import '../css-components/Main.css';
import HornedBeasts from "./HornedBeasts";
import data from "./assets/data.json";

class Main extends React.Component {
    render() {
        let list = data.map(item => {
            return(
                <HornedBeasts title={item.title} image_url={item.image_url} description={item.description} />
            )
        })
         return list;
     } 
}

export default Main;