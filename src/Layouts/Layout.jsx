import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../constants";

export const Layout = () => {
  const [searchText, setSerchText] = useState("");
  const [products, setProducts] = useState([]);

  const handelSearch = (event) => {
    setSerchText(event.target.value);
  };
  const handelSearchArray = () => {
    setProducts(
      cardArray.filter(
        (p) => p.title.includes(searchText) || p.price.includes(searchText)
      )
    );
  };

  useEffect(() => {
    setProducts(cardArray);
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" value={searchText} onChange={handelSearch} />
              <button
                className="btn btn-primary search-btn"
                onClick={handelSearchArray}
              >
                <img
                  className="search-btn__icon"
                  src="/images/search.svg"
                  alt="search"
                  width="14"
                  height="14"
                />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <Outlet context={{ products }} />
      </main>
    </>
  );
};
