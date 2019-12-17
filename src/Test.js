import React, {useState, useEffect} from 'react';
import axios from 'axios';
import urlMetadata from 'url-metadata';

const Articles = () => {

    const baseUrl = 'https://hacker-news.firebaseio.com/v0';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const config = {
        "method": "GET",
        "mode": "no-cors"
    };


    function getArticleData(articleIds, start) {
        const template = [];
        const articleRange = articleIds.slice(start, start + 30);
        const articleCalls = articleRange.map(articleId => axios.get(`${baseUrl}/item/${articleId}.json`, config));
        Promise.all(articleCalls).then(values => {
            const metadataCalls = values.map(articleRes => {
                const {title, url} = articleRes.data;
                template.push({title});
                return urlMetadata(`${proxyUrl}${url}`);
            });
            Promise.all(metadataCalls).then(values => {
                values.map((metadataObj, index) => {
                    template[index].image = metadataObj["og:image"];
                });
                console.log(template);
                setTemplateArray(template);
            });
        });
    }

    const [templateArray, setTemplateArray] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/topstories.json`).then(res => getArticleData(res.data, 0));
    }, [])

    return (
        <div className="App">
            {
            templateArray && templateArray.map(articleItem => (
                <div>
                    <h2>{
                        articleItem.title
                    }</h2>
                    <img src={
                        articleItem.image
                    }/>
                </div>
            ))
        } </div>
    );
}

export default Articles;
