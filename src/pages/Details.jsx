import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlogs } from "../redux/action";

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();

  // const [favoriteData, setFavoriteData] = useState({
  //     title: '',
  //     author: ''
  // });
  const [post, setPost] = useState([]);
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [favorite, setFavorite] = useState(false);

  function fetchParticularPost() {
    const url = `https://jsonplaceholder.typicode.com/posts?id=${params.id}`; /// title
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data[0]))
      .catch((err) => console.log(err));
  }

  let postTitle = post.body;
  postTitle = postTitle ? postTitle.repeat(10) : "";

  function firstTimeFetchDataUser() {
    const url = `https://jsonplaceholder.typicode.com/users?id=${params.userId}`; // author
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data[0]))
      .catch((err) => console.log(err));
  }

  function firstTimeFetchDataComments() {
    const url = `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchParticularPost();
    firstTimeFetchDataUser();
    firstTimeFetchDataComments();
  }, []);

  const handleFavoriteFun = () => {
    setFavorite(!favorite);
    const favoriteData = {
      id: (Math.random() * 1000).toFixed(2),
      title: favorite ? "" : post.title,
      author: favorite ? "" : userData.name,
    };

    dispatch(addBlogs(favoriteData));
    if (favorite) {
      alert("Favorite Blog Not Select");
    } else {
      alert("Favorite Blog Add Successfully ):");
    }
  };

  return (
    <>
      <div className="detailContainer">
        <div className="favoritePortion">
          <Link to="/Ingenium_Blog_React_App/">
            <div className="btn">
              <KeyboardBackspaceIcon />
              <h4>Home</h4>
            </div>
          </Link>
          <div
            className="favoriteIcon btn"
            onClick={() => handleFavoriteFun()}
            style={{ backgroundColor: favorite ? "#666666" : "transparent" }}
          >
            <h4>Favorite Post</h4>
            <FavoriteBorderIcon />
          </div>
        </div>

        <div className="PostInformation">
          <div className="CenterPart">
            <h1>{post.title ? post.title.slice(0, 17) : ""}</h1>
            <p>September 5, 2021</p>
          </div>
        </div>

        <div className="authorInformation">
          <div className="left_authorInfo">
            <p>Author</p>
            <p>Email</p>
            <p>Phone</p>
          </div>
          <div className="center_authorInfo">
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="right_authorInfo">
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <p>{userData.phone}</p>
          </div>
        </div>

        <div className="postContent">
          <div className="content">
            <p>{postTitle}</p>
            <br />
            <p>{postTitle}</p>
          </div>
          <div className="socialIcons">
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

        <div className="allComments">
          <div className="comments">
            <h2>5 Comments</h2>

            <div className="unique_personComment">
              {data.map((items) => (
                <div className="personComment" key={items.id}>
                  <div className="postPerson">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png"
                      alt=""
                    />
                    <div className="postInfo">
                      <h5>{items.name.slice(0, 20)}</h5>
                      <p>{items.email}</p>
                    </div>
                  </div>
                  <div className="postComment">
                    <p>{items.body}</p>
                  </div>
                  <div className="horizontalLine"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
