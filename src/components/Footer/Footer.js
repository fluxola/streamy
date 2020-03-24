import React from 'react';
import { Col, Row } from 'reactstrap';

// import strings from  '../../PWLB-HS2.svg';
import nextcloud from  '../../nextcloud.png';


const Footer = () => (
      <Row className="Footer" style={{ paddingBottom: "24px", paddingTop: "24px" }}>
        <Col xs={{size: 12}} sm={{size: 12}} md={{size: 12}}>
            <a href='https://cloud.uprootx.com/'><embed src={nextcloud} alt='cloud' style={{ width: "15%", height: "auto", paddingTop: "24px" }} /></a>
            <h3 style={{ paddingTop:'12px'}}>
             <a href='https://www.telegram.org'><i style={{ paddingLeft:'24px', paddingRight:'24px', color:'white' }}  class="fas fa-comments"></i></a>
             <a href='https://www.facebook.com/christophercyrusgoulet/'><i style={{ paddingLeft:'24px', paddingRight:'24px', color:'white' }} class="fab fa-facebook-square"></i></a>
             <a href='https://www.twitter.com/gr8goulet/'><i style={{ paddingLeft:'24px', paddingRight:'24px', color:'white' }}  class="fab fa-twitter"></i></a>
            </h3>
        </Col>
        {/* <Col xs={{size: 12, order: 1}} sm={{size: 12, order: 1}} md={{size: 6, order: 2}}>
           <h3 style={{ width: "20%", height: "auto", color:"red", paddingTop:'24px'}}>Chat Link   <i class="fas fa-comments"></i></h3> 
        </Col> */}

      </Row>      
);

export default Footer;