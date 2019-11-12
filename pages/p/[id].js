import React, {
    Component
} from 'react';
import Link from 'next/link';
import firebase from '../Firebase';
import Layout from '../../components/MyLayout';
import { useRouter } from 'next/router';
class Article extends Component {
    constructor(props) {
        super(props);
        var url_asPath = this.props.url.asPath;
        var url_as_title = /[^/]*$/.exec(url_asPath)[0], 
            url_as_title = decodeURI(url_as_title);
        this.state = {
            article: '',
            url: url_as_title,
        };
    }
    componentDidMount() {       
        const self = this;
        const article = '';
        const id = this.props.url.query.id;
        console.log(this.id)
        const { router } = this.props;
        const ref = firebase.firestore().collection('articles').where('title', '==',self.state.url).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                self.setState({
                    article: doc.data()
                });

            });
            
        });
    }
    render() {
        const { router } = this.props
        return ( 
        <Layout>  

      
    
            <div class="container"><h1>{this.state.article.title}</h1>
           
            <p>{this.state.article.excerpt}</p></div>
        </Layout>);
        }
}
    export default Article;