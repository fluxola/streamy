import React from 'react';
import { Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg } from 'reactstrap';


import logo from  '../../logo.svg';



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return(
        <Row className='App-header' justifyContent='center'>
          <Col xs="12" horizontal="center" vertical='center' className='logo'>
            <embed src={logo} alt='logo' style={{ width: "20%", height: "auto", paddingTop: "24px" }} />
          </Col>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Next up on the Upstream...</ModalHeader>
          <ModalBody>
            <Card>
              <CardImg src='' alt='modalpic' />
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>I'm definitely tuning in!</Button>
          </ModalFooter>
        </Modal>
        </Row>
    );
  }
}

export default Header;