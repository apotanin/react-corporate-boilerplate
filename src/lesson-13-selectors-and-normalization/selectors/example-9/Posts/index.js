// Core
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { log } from 'helpers';
import { selectPostsByGender, makeSelectPostsByGender } from '../selectors/posts';
import * as postsActions from '../../../core/actions/posts';

class Posts extends PureComponent {
    _createPost = () => this.props.actions.createPost();

    render () {
        const { posts, byGenderOf, instance } = this.props;
        log(`render method is called: Posts '${instance}' instance`, '9f49fe');

        const list = posts.map(({ id, author, comment }) => (
            <li key = { id }>
                <button onClick = { () => this.props.actions.deletePost(id) }>Delete</button>
                Comment by <b>{author.name}</b>: {comment}
            </li>
        ));

        return (
            <section>
                <h1>Posts {byGenderOf && `by ${byGenderOf}`}</h1>
                <button onClick = { this._createPost }>Create post</button>
                <ul>{list}</ul>
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    log('MSTP is called: Posts', '9f49fe');

    console.time(`selectPostsByGender selector for '${props.instance}' instance`);
    const posts = selectPostsByGender(state, props);
    console.timeEnd(`selectPostsByGender selector for '${props.instance}' instance`);

    return { posts };
};

// const makeMapStateToProps = () => {
//     const selectPostsByGender = makeSelectPostsByGender();

//     return (state, props) => {

//         console.time(
//             `selectPostsByGender selector ${
//                 props.instance ? `for the ${props.instance} instance` : ''
//             }`,
//         );
//         const posts = selectPostsByGender(state, props);
//         console.timeEnd(
//             `selectPostsByGender selector ${
//                 props.instance ? `for the ${props.instance} instance` : ''
//             }`,
//         );

//         return { posts };
//     };
// };

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(postsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
