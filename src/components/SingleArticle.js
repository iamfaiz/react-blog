import React, { Component } from 'react';
import Articles from '../articles';
import sanitizeHtml from 'sanitize-html';

class SingleArticle extends Component {
    constructor() {
        super();

        this.state = {
            article: {}
        };
    }

    componentWillMount() {
        let slug = this.props.match.params.slug;
        
        Articles.getBySlug(slug, article => {
            this.setState({ article });
        });
    }

    componentDidMount() {
        let { title } = this.state.article;

        document.title = 'Blog - ' + title;
    }

    render() {
        return (
            <article>
                <h2 className="is-size-2">{this.state.article.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(this.state.article.content) }}></p>
            </article>
        );
    }
}

export default SingleArticle;