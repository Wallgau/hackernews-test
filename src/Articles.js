import React, {useState, useEffect} from "react";
import axios from "axios";
import urlMetadata from "url-metadata";
import {Img, Article} from "./styled";

function Articles() {
    const baseUrl = "https://hacker-news.firebaseio.com/v0";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const config = {
        method: "GET",
        mode: "no-cors"
    };
    const [templateArray, setTemplateArray] = useState([]);
    console.log(templateArray)
    const getArticleData = (articleIds, start) => {
        let template = [];
        const articleRange = articleIds.slice(start, start + 50);
        const articleCalls = articleRange.map(articleId => axios.get(`${baseUrl}/item/${articleId}.json`, config).then(res => {
            console.log(res.data)
            const {title, url} = res.data;


            urlMetadata(`${proxyUrl}${url}`).then(res => {
                console.log(res);
                const imageUrl = res["og:image"] || "";
                const description = res["og:description"]
                const siteName = res["og:site_name"];
                template = template.concat([{
                        title,
                        siteName,
                        description,
                        imageUrl
                    }]);
                setTemplateArray(template);
            });
        }).catch(err => console.log(err)));

        console.log(template);
    };

    useEffect(() => {
        axios.get(`${baseUrl}/topstories.json`).then(res => getArticleData(res.data, 0));
    }, []);
    return (
        <Article>
            <div> {" "}
                {
                templateArray && templateArray.map(articleItem => articleItem.imageUrl && (
                    <div eachArticle>
                        <Img src={
                            articleItem.imageUrl || "How to"
                        }/>
                        <div className="post">

                            <span>{
                                articleItem.siteName
                            }</span>
                            <h2> {
                                articleItem.title
                            }</h2>
                            <p></p>
                        </div>


                    </div>
                ))
            } </div>
        </Article>
    );
}
export default Articles;
