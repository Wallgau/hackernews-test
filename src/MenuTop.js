import React, {useEffect, useState} from "react";
import axios from "axios";
import urlMetadata from 'url-metadata';

function MenuTop() {
    const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const config = {
        "method": "GET",
        headers: {
            "mode": "no-cors"
        }
    }
    // const urlMetadata = require("url-metadata");
    // urlMetadata("http://www.getdropbox.com/u/2/screencast.html").then(function (metadata) { // success handler
    //     console.log(metadata);
    // }, function (error) { // failure handler
    //     console.log(error);
    // });
    const [templateArray, setTemplateArray] = useState("");


    const getArticleData = (articleIds, start) => {
        const articleRange = articleIds.slice(start, start + 30);
        console.log(articleRange)
        const articleCalls = articleRange.map(articleId => axios.get(`${baseUrl}/item/${articleId}.json`, config).catch(error => console.log(error)));
        Promise.all(articleCalls).then(values => console.log(values))
    }


    useEffect(() => { // fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`, {method: "GET"}).then(res => res.json()).then(res => setUrl(res));
        axios.get(`${baseUrl}/topstories.json`).then(res => getArticleData(res.data, 0));
    }, []);

    return (
        <>
            <div>
                <div className="menu">
                    <a></a>
                </div>
            </div>
        </>
    );
}

export default MenuTop;
