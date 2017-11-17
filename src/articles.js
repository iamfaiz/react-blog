let articles = [
    { id: 1, title: 'First blog post', slug: 'first-blog-post', excerpt: 'This is some excerpt of article 1', content: '<b>This should be in bold.</b> <i>This should be italic.</i> <hr>Illum ad cupidatat cupidatat. Ea ut labore exercitation consectetur et ullamco magna elit consectetur eiusmod dolor nulla fugiat aliqua. Voluptate sit nisi sunt nulla ullamco eu et consequat. Et laborum Lorem est ut adipisicing ex aliqua exercitation. Fugiat aute sint est et nostrud laboris nostrud. Cupidatat sit minim sit velit minim deserunt id laboris dolor deserunt. Cupidatat aute pariatur incididunt laboris eiusmod duis excepteur.' },
    { id: 2, title: 'Second blog post', slug: 'second-blog-post', excerpt: 'This is some excerpt of article 2', content: 'Second article stuff. Officia aliqua deserunt minim cillum ad cupidatat cupidatat. Ea ut labore exercitation consectetur et ullamco magna elit consectetur eiusmod dolor nulla fugiat aliqua. Voluptate sit nisi sunt nulla ullamco eu et consequat. Et laborum Lorem est ut adipisicing ex aliqua exercitation. Fugiat aute sint est et nostrud laboris nostrud. Cupidatat sit minim sit velit minim deserunt id laboris dolor deserunt. Cupidatat aute pariatur incididunt laboris eiusmod duis excepteur.' },
    { id: 3, title: 'Third blog post', slug: 'third-blog-post', excerpt: 'This is some excerpt of article 3', content: 'Third article content. Officia aliqua deserunt minim cillum ad cupidatat cupidatat. Ea ut labore exercitation consectetur et ullamco magna elit consectetur eiusmod dolor nulla fugiat aliqua. Voluptate sit nisi sunt nulla ullamco eu et consequat. Et laborum Lorem est ut adipisicing ex aliqua exercitation. Fugiat aute sint est et nostrud laboris nostrud. Cupidatat sit minim sit velit minim deserunt id laboris dolor deserunt. Cupidatat aute pariatur incididunt laboris eiusmod duis excepteur.' }
];

let inMemoryArticles = {
    getAll(callback) {
        callback(articles);
    },

    getBySlug(slug, callback) {
        let foundArticle = null;

        for(let i = 0; i < articles.length; i++) {
            if (articles[i].slug === slug) {
                foundArticle = articles[i];
                break;
            }
        }

        callback(foundArticle);
    }
};

export default inMemoryArticles;