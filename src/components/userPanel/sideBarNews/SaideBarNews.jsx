import { useState } from "react";
import "./sideBarNews.css";
import { useEffect } from "react";
import axios from "axios";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const SideBarNews = () => {
  const [news, setNews] = useState();
  console.log(news);
  useEffect(() => {
    axios
      .get(
        "https://news-headlines.tradingview.com/v2/headlines?category=forex&client=web&lang=en&streaming=true"
      )
      .then((result) => {
        const limitedNews = result.data.items.slice(0, 20);
        return setNews(limitedNews);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    
      <div className="news">
        <ul>
          {news &&
            news.map((item) => {
              return <li>{item.title}</li>;
            })}
        </ul>
      </div>
   
  );
};

export default SideBarNews;
