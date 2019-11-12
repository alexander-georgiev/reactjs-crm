import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Page from '../components/MyLayout';
import Link from 'next/link';
import firebase from '../src/Firebase';

class Articles extends Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('articles');
    this.unsubscribe = null;
    this.state = {
      articles: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const articles = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      articles.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      articles
   });
  }

  componentDidMount() {
    const { router } = this.props;
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    console.log(router)
  }

  render() {
    const { router } = this.props
    return (
      <Page>
      <div class="container">
        <div class="row">
          {this.state.articles.map(article =>
            <div className="col-lg-4 col-md-6">
              <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{article.title}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>S{article.description}</CardText>
                  <Link  href="/p/[id]" as={`/p/${article.title}`}><Button>Read</Button></Link>
                </CardBody>
              </Card>
            </div>
            )}
           </div>
        </div>
      </Page>
    );
  }
}

export default Articles;