import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';


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
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server</strong>
            </p>
            <input
             type="text"
             value={this.state.userName}
             onChange={e => this.setState({userName: e.target.value })}
            />             
            <input
             type="text"
             value={this.state.post}
             onChange={e => this.setState({post: e.target.value })}
            /> 
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.responseToPost}</p>
        </Col>
      </Row>
    )
  }
}
export default Chatroom;