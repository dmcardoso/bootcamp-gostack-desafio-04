import React, { Component } from "react";
import Post from "../Post";

import "./styles.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars0.githubusercontent.com/u/26466516?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara 2",
          avatar: "https://avatars0.githubusercontent.com/u/26466516?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando? 2",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            },
            content: "Conteúdo do comentário 2"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul className="postlist">
        {this.state.posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    );
  }
}

export default PostList;
