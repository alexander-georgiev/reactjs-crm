import React, { Component } from 'react';
import Link from 'next/link';
import firebase from './Firebase';

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
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Posts
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add article</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.articles.map(article =>
                  <tr>
                    <td><Link href="/p/[id]" as={`/p/${article.title}`}>{article.title}</Link></td>
                    <td>{article.description}</td>
                    <td>{article.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
