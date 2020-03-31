import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, timeoutsShape } from 'reactstrap';


class Chatroom extends Component {
  state = {
    userName: '',
    response: '',
    post: '',
    posts: '',
    responseToPost: '',
  };
  timer = null;
  componentDidMount() {
    this.timer = setInterval(() => {
      const { posts } = this.state;
      let chatObj = this.callApi();
      // only update the state if we have a new post
      if (chatObj.session.length != posts.length) {
        this.setState({
          posts: chatObj.posts.length
        })
      }
    }, 5000);
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/chatroom/get');
    const chatObj = await response.json();
    if (response.status !== 200) throw Error(chatObj.message);

    return chatObj;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/chatroom/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post, userName: this.state.userName }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    this.setState({ post: '' })
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Row className='Chatroom'>
        <Col sm="12" md={{ size: 6, offset: 4 }} style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <ul>
            {posts.map((session, i) => (<li key={`post-${i}`}>{session.message}</li>))}
          </ul>
        </Col>
        <Col sm="12" md={{ size: 6, offset: 4 }} style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <Form onSubmit={this.handleSubmit}>
            <p>{this.state.responseToPost}</p>
            <FormGroup>
              <Label>Screen name</Label>
              <Input type="text" value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <Input type="text" value={this.state.post} onChange={e => this.setState({ post: e.target.value })}></Input>
            </FormGroup>
            <Button type="submit">Send</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}
export default Chatroom;