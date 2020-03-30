import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Chatroom extends Component {
  state = {
    userName: '',
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleUpdate = async e => {
    const response = await fetch('api/chatroom/get')
      .then(function(data){
        
      })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/chatroom/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post, userName: this.state.userName }),
    });
    console.log(this.state.post)
    console.log(this.state.userName)
    const body = await response.text();
    this.setState({ responseToPost: body });
  };



  render() {
    return (
      <Row className='Chatroom'>
        <Col sm="12" md={{ size: 6, offset: 4 }} style={{paddingTop: "48px", paddingBottom: "48px"}}>
          <Form onSubmit={this.handleSubmit}>
            <p>{this.state.responseToPost}</p>
            <FormGroup>
              <Label>Screen name</Label>
              <Input type="text" value={this.state.userName} onChange={e => this.setState({userName: e.target.value})}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <Input type="text" value={this.state.post} onChange={e => this.setState({post: e.target.value})}></Input>
            </FormGroup>
            <Button type="submit">Send</Button>
          </Form>
        </Col>        
      </Row>      
    )
  }
}
export default Chatroom;