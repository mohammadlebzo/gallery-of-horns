import React from "react";
import '../css-components/Main.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selectedTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.selectedImg} alt="" />
                        <br />
                        {this.props.selectedDes}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast;