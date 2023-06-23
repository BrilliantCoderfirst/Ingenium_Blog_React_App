import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlogs } from "../redux/action";

const Favorite = () => {
  const dispatch = useDispatch();

  const favoriteData = useSelector((state) => {
    return state.blogOperation;
  });

  const handleDeleteFavorite = (id) => {
    dispatch(deleteBlogs(id));
    alert("Favorite Blog Delete Successfully ):");
  };

  return (
    <>
      <div className="favoriteContainer">
        <div className="favorite_box">
          <h1>Favorite Blogs</h1>

          {favoriteData.length !== 0 ? (
            favoriteData.map((items) => (
              <div className="box" key={items.id}>
                <img
                  src="https://media.istockphoto.com/id/626669886/photo/blogging-blog-word-coder-coding-using-laptop.jpg?s=612x612&w=0&k=20&c=gX9o-kj9RohNBAT2n4wR6fldiTdvnpxZOsetFonpBJw="
                  alt=""
                />

                <div className="author">
                  <h4>{items.title.slice(0, 15)}</h4>
                  <p>{items.author}</p>
                  <div className="social_Icons">
                    <div className="facebook icon">
                      <FacebookIcon />
                    </div>
                    <div className="instagram icon">
                      <InstagramIcon />
                    </div>
                    <div className="telegram icon">
                      <TelegramIcon />
                    </div>
                    <div className="twitter icon">
                      <TwitterIcon />
                    </div>
                    <div className="youtube icon">
                      <YouTubeIcon />
                    </div>
                  </div>
                </div>

                <div className="btn">
                  {/* <Button text='Delete' onClick={handleDeleteFavorite(items.id)} /> */}
                  <button onClick={() => handleDeleteFavorite(items.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="noDataFound">
              <div className="center_noDataFound">
                <h1>No Data Found ...</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorite;
