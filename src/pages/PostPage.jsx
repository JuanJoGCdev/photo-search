import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MyCollectionsSection from "../components/MyCollectionsSection";
import "./PostPage.scss";
import Post from "../components/Post";
import {fetchData} from "../apis/unsplash/apiService";

const PostPage = () => {
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const cantPost = 5;

  const getImg = async () => {
    try {
      const imgResult = await fetchData(`random?count=${cantPost}&`);
      return imgResult;
    } catch (error) {
      console.error("Error fetching cover:", error);
      return "img"; // Default image in case of error
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const resultImg = await getImg();
      // Sort images by infoCreate in descending order (newest first)
      const sortedImgs = resultImg.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      setImgs(sortedImgs);
      setLoading(false);
    };

    if (imgs.length === 0 && loading === false) {
      fetchImages();
      setLoading(true);
    }
  }, []);

  return (
    <div className="postPageContainer">
      <Header />
      <div className="postPageBody">
        <MenuBar />
        <div className="postPageContent">
          <MyCollectionsSection />
          <h2 className="titlePagePost">Activity Feed</h2>
          <div className="posts">
            {imgs.map((img, index) => (
              <Post
                key={index}
                img={img.urls ? img.urls.full : "default_img.jpg"} // Manejar caso cuando img.urls is undefined
                infoCreate={img.updated_at}
                description={img.description}
                username={img.user.username}
                profileImg={img.user.profile_image.large}
                locationImg={img.user.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
