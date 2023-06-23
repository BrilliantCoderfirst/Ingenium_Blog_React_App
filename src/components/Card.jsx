import React from "react";

const Card = ({ userId, id, title, body }) => {

  return (
    <>
      <div className="card" key={id}>
        <div
          className="card-header"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)`,
            objectFit: "cover",
          }}
        >
          <div className="card-header-bar">
            <a href="#" className="btn-message">
              <span className="sr-only">Message</span>
            </a>
            <a href="#" className="btn-menu">
              <span className="sr-only">Menu</span>
            </a>
          </div>

          <div className="card-header-slanted-edge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
              <path className="polygon" d="M-20,200,1000,0V200Z" />
            </svg>
            <a href="#" className="btn-follow">
              <span className="sr-only">Edit</span>
            </a>
          </div>
        </div>

        <div className="card-body">
          <h2 className="name">{title.slice(0, 20) + " ..."}</h2>
          <div className="bio">{body.slice(0, 120) + " ..."}</div>
          <div className="social-accounts">
            <a href="#">
              <img
                src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg"
                alt=""
              />
              <span className="sr-only">Dribbble</span>
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg"
                alt=""
              />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg"
                alt=""
              />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
