import React, { Component } from 'react';
import Link from 'next/link';
import firebase from '../Firebase';
import Layout from '../../components/MyLayout';
import { useRouter } from 'next/router'

class Article extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      board: {},
	      key: ''
	    };
	  }
	onCollectionUpdate = (querySnapshot) => {
		const boards = [];
		const id = this.props.url.query.id;
		
	        querySnapshot.forEach(function(doc) {
	            const { title, description, author } = doc.data();
		      boards.push({
		        key: doc.id,
		        doc, // DocumentSnapshot
		        title,
		        description,
		        author,
		      });
	        });
		this.setState({
			boards
		});
	}
componentDidMount() {
	const id = this.props.url.query.id;
	const self = this;
	const board = {};
    const ref = firebase.firestore().collection('articles').where('title','==', 'sad').get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
        //     const { title, description, author } = doc.data();
		      // board.push({
		      //   key: doc.id,
		      //   doc, // DocumentSnapshot
		      //   title,
		      //   description,
		      //   author,
	      	// });
	      	board: doc.data()
	      	console.log(doc.data());
        });
    });    
	console.log(board)
  }
  render() {
    return (
      <div class="container">
		{this.state.board.title}
      </div>
    );
  }
}
export default Article;