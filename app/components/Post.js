import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Post(props) {
  const { post, onClick, noAuthor } = props;
  const date = new Date(post.createdDate);
  const dateFormatted = `${
    date.getMonth() + 1
  }/${date.getDay()}/${date.getFullYear()}`;

  return (
    <Link
      onClick={onClick}
      to={`/post/${post._id}`}
      className="list-group-item list-group-item-action"
    >
      <img className="avatar-tiny" src={post.author.avatar} />{" "}
      <strong>{post.title}</strong>
      {!props.noAuthor && <> by {post.author.username}</>}{" "}
      <span className="text-muted small">
        <em>on {dateFormatted}</em>
      </span>
    </Link>
  );
}

export default Post;
