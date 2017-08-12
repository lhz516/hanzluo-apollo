import React from 'react';
import { Helmet } from "react-helmet";
import Layout from 'antd/lib/layout';
const { Content } = Layout;
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Timeline from 'antd/lib/timeline';
import WordCloud from './react-d3-cloud';
import ContactForm from './contact-form';

const data = [
  { text: 'JavaScript', value: 650 },
  { text: 'HTML', value: 500 },
  { text: 'Meteor', value: 300 },
  { text: 'CSS', value: 150 },
  { text: 'Node', value: 88 },
  { text: 'React', value: 80 },
  { text: 'Antd', value: 74 },
  { text: 'Sass', value: 72 },
  { text: 'Less', value: 60 },
  { text: 'Apollo', value: 54 },
  { text: 'Nginx', value: 48 },
  { text: 'jQuery', value: 42 },
  { text: 'Bootstrap', value: 38 },
  { text: 'WebStorm', value: 34 },
  { text: 'Github', value: 29 },
  { text: 'MongoDB', value: 25 },
  { text: 'Ubuntu', value: 22 },
  { text: 'Docker', value: 18 },
  { text: 'Blaze', value: 14 },
  { text: 'DDP', value: 13 },
  { text: 'Babel', value: 12 },
  { text: 'Eslint', value: 11 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = () => (Math.random() - .5) * 30;


const scrollTo = (element, to, duration) => {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
};

const Home = () => (
  <Content>
    <Helmet>
      <title>Home | Hanz Luo</title>
    </Helmet>
    <div id="blue-bg-wrapper">
      <div id="avatar-and-intro">
        <Row type="flex" justify="center" align="middle">
          <Col className="avatar" xs={24} sm={6} md={6} lg={5} xl={4}>
            <img src="/images/hanz.jpg" alt="Hanz Luo" />
            <h1>
              Hanz Luo&nbsp;
              <i
                onClick={() => scrollTo(document.body, document.body.scrollHeight, 500)}
                id="send-message"
                className="fa fa-envelope-o"
                aria-hidden="true"
              />
            </h1>
            <p>Full-stack Web Developer</p>
          </Col>
          <Col className="intro" xs={24} sm={14} md={12} lg={9} xl={8}>
            <p>
              Hi, I'm a full-stack web developer in Bay Area. I'm familiar with JS front & back-end development,
              database management, server configuration. Feel free to contact me!
            </p>
          </Col>
        </Row>
      </div>
    </div>
    <div id="timeline">
      <Row type="flex" justify="center">
        <Col className="words-cloud" xs={24} sm={20} md={13} lg={12} xl={10}>
          <WordCloud
            data={data}
            padding={3}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            font="'Helvetica Neue For Number', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
          />
        </Col>
        <Col className="timeline-right" xs={22} sm={20} md={7} lg={6} xl={5}>
          <Timeline>
            <Timeline.Item
              color="#001064"
              dot={<i className="fa fa-graduation-cap" aria-hidden="true" />}
            >
              Dec, 2013 - Graduated from CSUEB Computer Science B.S.
            </Timeline.Item>
            <Timeline.Item
              color="#001064"
              dot={<i className="fa fa-suitcase" aria-hidden="true" />}
            >
              Feb, 2014 - Worked at KleenSpeed as Web Developer Intern
            </Timeline.Item>
            <Timeline.Item
              color="#001064"
              dot={<i className="fa fa-graduation-cap" aria-hidden="true" />}
            >
              June, 2016 - Graduated from CSUEB Multimedia M.A.
            </Timeline.Item>
            <Timeline.Item
              color="#001064"
              dot={<i className="fa fa-suitcase" aria-hidden="true" />}
            >
              Sep, 2016 - Worked at Maodou as Web Developer
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
    <div id="skills">
      <Row type="flex" justify="center">
        <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
          <div className="skill-icon">
            <i className="fa fa-terminal" aria-hidden="true" />
          </div>
          <h3>Server</h3>
          <div className="skill-desc">
            <p>Ubuntu, CentOS</p>
            <p>DNS Config</p>
            <p>Nginx/SSL</p>
            <p>MongoDB, MySQL</p>
          </div>
        </Col>
        <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
          <div className="skill-icon">
            <i className="fa fa-cogs" aria-hidden="true" />
          </div>
          <h3>Frameworks</h3>
          <div className="skill-desc">
            <p>Meteor (node.js)</p>
            <p>React</p>
            <p>Sass/Less</p>
            <p>Apollo GraphQL</p>
          </div>
        </Col>
        <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
          <div className="skill-icon">
            <i className="fa fa-plug" aria-hidden="true" />
          </div>
          <h3>API</h3>
          <div className="skill-desc">
            <p>Google Maps</p>
            <p>Yelp</p>
            <p>Stripe</p>
            <p>Facebook</p>
          </div>
        </Col>
        <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
          <div className="skill-icon">
            <i className="fa fa-code" aria-hidden="true" />
          </div>
          <h3>UI</h3>
          <div className="skill-desc">
            <p>Semantic UI</p>
            <p>Bootstrap</p>
            <p>Materialize</p>
            <p>Ant Design</p>
          </div>
        </Col>
      </Row>
    </div>
    <div id="projects">
      <Row type="flex" justify="center">
        <h1>Projects</h1>
      </Row>
      <Row className="project-list" type="flex" justify="center">
        <Col xs={22} sm={20} md={7} lg={6} xl={5}>
          <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
            <a href="https://github.com/maodouio/meteor-react-redux-base" target="_blank" className="container">
              <h2>meteor-react-redux-base</h2>
              <ul className="texts">
                <li>Mantra-plus integrated</li>
                <li>Webpack integrated</li>
                <li>Wechat Login supported</li>
                <li>Admin configuration</li>
              </ul>
              <div className="overlay bg-1" />
            </a>
          </Card>
        </Col>
        <Col xs={22} sm={20} md={7} lg={6} xl={5}>
          <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
            <a href="https://github.com/lhz516/react-h5-audio-player" target="_blank" className="container">
              <h2>react-h5-audio-player</h2>
              <ul className="texts">
                <li>React audio player component with UI</li>
                <li>Provides time indicator on different devices</li>
                <li>Flexbox design with CSS shapes</li>
                <li>No extra dependencies</li>
              </ul>
              <div className="overlay bg-2" />
            </a>
          </Card>
        </Col>
        <Col xs={22} sm={20} md={7} lg={6} xl={5}>
          <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
            <a href="https://github.com/lhz516/hanzRhymes" target="_blank" className="container">
              <h2>hanz-rhymes</h2>
              <ul className="texts">
                <li>Seeks rhymes of Chinese characters</li>
                <li>Rhyme rules configured in MongoDB</li>
                <li>Uses redux to manage data flow</li>
              </ul>
              <div className="overlay bg-3" />
            </a>
          </Card>
        </Col>
      </Row>
    </div>
    <div id="contact">
      <Row className="contact-wrapper" type="flex" justify="center">
        <Col xs={22} sm={20} md={7} lg={6} xl={5}>
          <h1 className="contact-title">Contact</h1>
          <p className="contact-desc">Your message will be sent to my email after you submit the contact form.</p>
          <div className="social-medias">
            <a className="social-media-link" href="https://www.facebook.com/hanzhang.luo" target="_blank">
              <i className="fa fa-facebook-square" aria-hidden="true" />
              &nbsp;&nbsp;&nbsp;
              <span>Facebook</span>
            </a>
            <a className="social-media-link" href="https://github.com/lhz516/" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
              &nbsp;&nbsp;&nbsp;
              <span>Github</span>
            </a>
            <a className="social-media-link" href="https://www.linkedin.com/in/hanzhang-luo-81103082?trk=hp-identity-name" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              &nbsp;&nbsp;&nbsp;
              <span>LinkedIn</span>
            </a>
          </div>
        </Col>
        <Col className="contact-form" xs={22} sm={20} md={{ span: 8, offset: 1 }} lg={{ span: 7, offset: 1 }} xl={{ span: 6, offset: 1 }}>
          <ContactForm />
        </Col>
      </Row>
    </div>
  </Content>
);

export default Home;
