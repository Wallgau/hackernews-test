import React, {useState, useEffect} from "react";
import axios from "axios";
import urlMetadata from "url-metadata";
import {Img, Article, Button} from "./styled";

function Articles() {
    const baseUrl = "https://hacker-news.firebaseio.com/v0";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const config = {
        method: "GET",
        mode: "no-cors"
    };
    const [templateArray, setTemplateArray] = useState([]);
    const [start, setStart] = useState(0)
    console.log(templateArray)
    const getArticleData = (articleIds, start) => {
        let template = [];
        const articleRange = articleIds.slice(start, start + 50);
        const articleCalls = articleRange.map(articleId => axios.get(`${baseUrl}/item/${articleId}.json`, config).then(res => {
            const {title, url} = res.data;


            urlMetadata(`${proxyUrl}${url}`).then(res => {
                const imageUrl = res["og:image"] || "";
                const description = res["og:description"]
                const siteName = res["og:site_name"];
                imageUrl && (template = template.concat([{
                        title,
                        siteName,
                        description,
                        imageUrl
                    }]));
                setTemplateArray(template);
            });

        }).catch(err => console.log(err)));

        console.log(template);
    };

    useEffect(() => {
        axios.get(`${baseUrl}/topstories.json`).then(res => getArticleData(res.data, 0));
    }, []);

    useEffect(() => {
        axios.get(`${baseUrl}/topstories.json`).then(res => getArticleData(res.data, start));

    }, [start])


    return (
        <>

            <div>
                <p></p>
            </div>
            <Article>

                <ul> {
                    templateArray && templateArray.slice(0, start + 15).map(articleItem => articleItem.imageUrl && (
                        <li eachArticle>
                            <a>

                                <Img src={
                                        articleItem.imageUrl || "How to"
                                    }
                                    alt="article's image"/>
                                <div className="post">

                                    <span>{
                                        articleItem.siteName
                                    }</span>
                                    <h3> {
                                        articleItem.title
                                    }</h3>
                                    <p>L’objectif d’un paragraphe est de soutenir une affirmation, ou une idée, qui contribue à établir la thèse globale ou l’intention du mémoire. Chaque paragraphe devrait se concentrer sur ce point ou cette idée unique, et être clairement relié à ce qui le précède.</p>
                                </div>
                            </a>


                        </li>
                    ))
                } </ul>
            </Article>
            <Button onClick={
                () => {
                    setStart(start + 30)
                }
            }>More Posts</Button>
        </>
    );
}
export default Articles;
