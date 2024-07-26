import React from "react";
import "./Post.scss";
import RelativeTime from "./RelativeTime";

const Post = ({ img, infoCreate, description, username, profileImg, locationImg}) => {
  // No changes needed in the Post component itself
  // Sorting happens in the PostPage component
  const dateCreate = RelativeTime(infoCreate);

  return (
    <div className="postContainer">
      <header className="postHeader">
        <div className="postInfoContainer">
          <section className="postInfo">
            <img
              className="postInfoImg"
              src={profileImg}
              alt="foto de perfil"
            />
            <div className="postInfoSection">
              <h2 className="postInfoName">{username}</h2>
              <span className="postInfoInfoCreate">{dateCreate} in {locationImg}</span>
            </div>
            <section className="postOptions">
              <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
            </section>
          </section>
        </div>

        <div className="postInfoDescripcion">
          <h3>{description}</h3>
        </div>
      </header>

      <img className="postImg" src={img} alt="Img post" />
    </div>
  );
};

export default Post;
