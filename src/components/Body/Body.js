import React from 'react';
import { Col, Row } from 'reactstrap';
import ResponsiveEmbed from 'react-responsive-embed';


const Body = () => (
        <Row className='Body'>
          <Col sm="12" md={{ size: 8, offset: 2 }} style={{paddingTop: "48px", paddingBottom: "48px"}}>
          {/* <iframe width="853" height="480"  src="https://www.youtube.com/embed/live_stream?channel=UCWK7I10nUKDRBv_stW8y61g" title='upstreamlive' frameBorder="0" allowFullScreen></iframe>     */}
          <ResponsiveEmbed src="http://restreamer:8111/player.html" allowFullScreen />
          </Col>
        </Row>

);

export default Body;
// {/* <iframe src="http://71.233.158.194:8080/player.html" name="restreamer-player" width="800" height="450" scrolling="no" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"></iframe> */}