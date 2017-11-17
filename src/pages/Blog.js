import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Page from '../components/Page';
import SingleArticle from '../components/SingleArticle';
import Articles from '../articles';

class Blog extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
        };
    }

    componentWillMount() {
        Articles.getAll(articles => {
            this.setState({ articles });
        });
    }

    render() {
        let existingUrl = this.props.match.path;

        let articlesList = this.state.articles.map(article => {
            return (
                <article key={article.id}>
                    <h2 className="is-size-3"><Link to={existingUrl + '/' + article.slug}>{article.title} </Link></h2>
                    <p>{article.excerpt}</p>
                </article>
            );
        })
        return (
            <div>
                <Page title="Blog" subtitle="This is the blog page."></Page>

                <div className="container">
                    <Route exact={true} path="/blog" render={() => (
                        <div>
                            {articlesList}
                        </div>
                    )}/>

                    <Route exact={true} path="/blog" render={() => {
                        document.title = 'Blog - This is the blog page.'
                        return '';
                    }}/>

                    <Route exact={true} path="/blog/:slug" component={SingleArticle}/>
                </div>
            </div>
        );
    }
}

export default Blog;