import React, { useState, useEffect } from "react";
import axios from "axios";
import urlMetadata from "url-metadata";
import { Img, Article } from "./styled";

function Articles() {
  const baseUrl = "https://hacker-news.firebaseio.com/v0";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const config = {
    method: "GET",
    mode: "no-cors"
  };
  const [templateArray, setTemplateArray] = useState([]);

  const getArticleData = (articleIds, start) => {
    let template = [];
    const articleRange = articleIds.slice(start, start + 50);
    const articleCalls = articleRange.map(articleId =>
      axios
        .get(`${baseUrl}/item/${articleId}.json`, config)
        .then(res => {
          const { title, url } = res.data;
          urlMetadata(`${proxyUrl}${url}`).then(res => {
            const imageUrl = res["og:image"] || "";
            template = template.concat([
              {
                title,
                imageUrl
              }
            ]);
            setTemplateArray(template);
          });
        })
        .catch(err => console.log(err))
    );

    console.log(template);
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/topstories.json`)
      .then(res => getArticleData(res.data, 0));
  }, []);
  return (
    <Article>
      <div>
        {" "}
        {templateArray &&
          templateArray.map(
            articleItem =>
              articleItem.imageUrl && (
                <div eachArticle>
                  <h2> {articleItem.title}</h2>
                  <Img src={articleItem.imageUrl} />
                </div>
              )
          )}
      </div>
    </Article>
  );
}
export default Articles;
