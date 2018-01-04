import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Directive from '../../view-components/universal/directive/directive';
import Code from '../../view-components/universal/thumbnails/code-thumbnail/code';

import Wall from '../../view-components/universal/walls';

class Coder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={8}>
            <Row>
              <Col sm={12}>
                <Directive />
              </Col>
              <Col sm={12}>
                <blockquote>热门推荐</blockquote>
              </Col>
              <Col sm={4}>
                <Code />
              </Col>
              {/* <Col sm={8}>
                <Article />
              </Col> */}
              <Col sm={12}>
                <blockquote>实践文章</blockquote>
              </Col>
              <Col sm={12}>
                <Wall.Article
                  data={[
                    {
                      title: 'Coursera 的 GraphQL 之旅',
                      url: '/test',
                      type: '前端',
                      author: 'linksystem',
                      date: '2018.1.5',
                    },
                  ]}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Coder;