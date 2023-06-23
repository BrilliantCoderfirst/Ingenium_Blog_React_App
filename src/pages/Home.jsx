import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../components/Card";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [totalPosts, setTotalPosts] = useState([]);
  const totalPages = totalPosts.length / 10;

  const handleTotalPostsFun = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTotalPosts(data))
      .catch((err) => {
        console.log(err);
        alert("Data Not Fetch Some Technical Issue :(");
      });
  };

  function firstTimeFetchData() {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${
      (currentPage - 1) * 10
    }&_limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  function accordingToPagesFun(page) {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${
      (page - 1) * 10
    }&_limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    var arr = [];
    if (search === "") {
      firstTimeFetchData();
    } else {
      setData([]);
      handleTotalPostsFun();
      for (let i = 0; i < totalPosts.length; i++) {
        if (totalPosts[i].title.includes(search)) {
          console.log("-----Title-----", totalPosts[i].title);
          arr.push(totalPosts[i]);
        }
        setData(arr);
      }
    }

    handleTotalPostsFun();
  }, [search]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    accordingToPagesFun(page);
  };

  return (
    <>
      <Carousel />
      <div className="homeContainer">
        <div className="allCards">
          <div className="heading_card">
            <div className="blank"></div>
            <h1>All Posts</h1>
            <div className="search">
              <Input
                type="text"
                placeholder="Search Title ..."
                value={search}
                onChange={setSearch}
              />
              <SearchIcon />
            </div>
          </div>

          <div className="cards">
            {data.length !== 0 ? (
              data.map((items) => (
                <Link
                  to={`/details/${items.userId}/${items.id}`}
                  key={items.id}
                >
                  <Card
                    key={items.id}
                    userId={items.userId}
                    id={items.id}
                    title={items.title}
                    body={items.body}
                  />
                </Link>
              ))
            ) : (
              <div className="messageShow">
                <div className="center">
                  <h1>Data Not Found</h1>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pagination_right">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
