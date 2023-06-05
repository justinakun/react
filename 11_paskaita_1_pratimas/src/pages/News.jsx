import NewsCard from "../components/NewsCard";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => setNews(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {news.length > 0 && (
        <div>
          <NewsCard heading={news[0].title} text={news[0].body} />
          <NewsCard heading={news[1].title} text={news[1].body} />
        </div>
      )}
    </div>
  );
};

export default News;
