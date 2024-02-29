import { useState } from "react";
import "./sideBarNewsUp.css";
import { useEffect } from "react";
import axios from "axios";

const SideBarNewsUp = () => {
  const [news, setNews] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://news-headlines.tradingview.com/v2/headlines?category=forex&client=web&lang=en&streaming=true"
      )
      .then((result) => {
        const limitedNews = result.data.items.slice(0, 5);
        setNews(limitedNews);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <div className="newsUp">
      <ul>
        {
            news && news.map((item)=>{
                return <li key={item.id}>{item.title}</li>
            })
        }
      </ul>
    </div>
  );
};

export default SideBarNewsUp;
