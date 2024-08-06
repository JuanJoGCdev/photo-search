import React, { useEffect, useState } from "react";
import "./Profile.scss";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import ProfileHeader from "../components/ProfileHeader";
import ProfilePhotos from "./ProfilePhotos";
import { fetchDataUser } from "../apis/unsplash/apiService";

const Profile = () => {
  const [infoUser, setInfoUser] = useState(null);

  const getInfoProfile = async () => {
    try {
      const result = await fetchDataUser('/patrickkonior/?');
      return result;
    } catch (error) {
      console.error("Error fetching cover:", error);
    }
  };

  useEffect(() => {
    const dataUser = async () => {
      const resultData = await getInfoProfile();
      setInfoUser(resultData);
    };
    dataUser();
  }, []);

  if (!infoUser) {
    return <div>Loading...</div>;
  }

  return (
    <main className="profile-container">
      <Header />
      <section className="profile-body">
        <MenuBar />
      </section>
      <div className="profile-user-info">
        <ProfileHeader infoUser={infoUser} />
      </div>
      <div className="profile-user-photos">
        <ProfilePhotos infoUser={infoUser} />
      </div>
    </main>
  );
};

export default Profile;
