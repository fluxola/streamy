import React from 'react';
import { Col, Row } from 'reactstrap';
import ResponsiveEmbed from 'react-responsive-embed';


const Body = () => (
        <Row className='Body'>
          <Col sm="12" md={{ size: 8, offset: 2 }} style={{paddingTop: "48px", paddingBottom: "48px"}}>
            <ResponsiveEmbed src="https://restreamer.uprootx.com/player.html" allowFullScreen />
          </Col>
        </Row>

);

export default Body;