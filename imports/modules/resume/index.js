import React from 'react';
import { Helmet } from "react-helmet";
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const Resume = () => (
  <Row id="resume-page-wrapper" type="flex" justify="center">
    <Helmet>
      <title>Resume | Hanz Luo</title>
    </Helmet>
    <Col className="wide-screen" xs={24} sm={22} md={18} lg={16} xl={14}>
      <p className="message">If the PDF plugin doesn't show correctly, <a href="/Hanz-Resume.pdf" target="_blank ">click here</a></p>
      <object width="100%" height="900px"  type="application/pdf" data="/Hanz-Resume.pdf" className="pdf-file" />
    </Col>
    <Col className="narrow-screen" xs={24} sm={22} md={18} lg={16} xl={14}>
      <p className="message">Check PDF version, <a href="/Hanz-Resume.pdf" target="_blank ">click here</a></p>
      <img src="/Hanz-Resume.png" alt="resume"/>
    </Col>
  </Row>
);

export default Resume;
