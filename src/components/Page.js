import React, { Component } from 'react';

class Page extends Component {
  componentDidMount() {
    document.title = this.props.title + ' - ' + this.props.subtitle;
  }

  render() {
      return (
        <main>
          <section className="hero is-dark">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">{this.props.title}</h1>
                <h2 className="subtitle">{this.props.subtitle}</h2>
              </div>
            </div>
          </section>
          <section className="page-content">
            <div className="container">{this.props.content}</div>
          </section>
        </main>
      );
  }
}

export default Page;