import React from 'react';
import {Wrap} from './styled';

function Top() {
    return (
        <Wrap>
            <div className="magazine">
                <h1>Magazine</h1>
                <h3>Stories and ideas from wealthsimple</h3>
            </div>
            <div className="top"></div>
            <div className="textTop">
                <span>Dear Ms. Etiquette</span>
                <h3 class="post-excerpt-title">Dear Ms. Etiquette: How Much Am I Supposed to Tip During the Holidays Anyway?</h3>
                <p>It’s that time of year, when you tip those wonderful people who help you live your life – the babysitter, the hair stylist, the handyman, the doorman, the house cleaner. Yet you have zero idea how much to give. Our fearless columnist takes on holiday tipping.
                </p>
            </div>
        </Wrap>
    )
}

export default Top;
