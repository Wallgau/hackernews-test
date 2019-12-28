import React from 'react';
import {FooterStyled} from "./styled";
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

function Footer() {

    return (<>
        <FooterStyled class="container-full main-footer">
            <div class="container footer-upper-block">
                <div class="footer-content">
                    <div class="footer-list-wrapper">
                        <ul class="footer-list">
                            <li>About us</li>
                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/who-we-are">Who we are</a>
                            </li>

                        </ul>
                    </div>
                    <div class="footer-list-wrapper">
                        <ul class="footer-list">
                            <li>Learn more</li>
                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/details">The Details</a>
                            </li>
                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/investing-101">Investing 101</a>
                            </li>
                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/socially-responsible-investing">Responsible investing</a>
                            </li>

                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/halal-investing">Halal investing</a>
                            </li>

                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/black">Wealthsimple Black</a>
                            </li>
                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/magazine">Magazine</a>
                            </li>
                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/portfolio-review">Financial Portfolio Review</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-list-wrapper">
                        <ul class="footer-list">
                            <li>Legal</li>
                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/legal/terms">Terms of use</a>
                            </li>
                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/legal/privacy">Privacy policy</a>
                            </li>

                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/legal/disclosure">Full disclosure</a>
                            </li>

                            <li>
                                <a class="footer-link" href="https://www.wealthsimple.com/en-ca/legal/file-complaint">File a complaint</a>
                            </li>


                        </ul>
                    </div>
                    <div class="footer-list-wrapper social">
                        <ul class="footer-list">
                            <li>Download the App</li>
                            <div className="icons-dowload">

                                <li class="app-icon app-icon-ios">
                                    <a class="" href="https://wealthsimple.app.link/OdfWdQXv6H" target="_blank" title="Download on the App Store">
                                        <AppleIcon/>
                                    </a>
                                </li>
                                <li class="app-icon app-icon-android">
                                    <a class="" href="https://wealthsimple.app.link/UAIkaTZv6H" target="_blank" title="Download on the App Store">
                                        <AndroidIcon/>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-divider"></div>
            <div class="container footer-lower-block">
                <div class="footer-content">
                    <div class="footer-list-wrapper footer-list-wrapper-contact">
                        <ul class="footer-list">
                            <li>Questions?</li>
                            <li>
                                <a class="footer-link" href="https://help.wealthsimple.com/hc/en-ca/">Support centre</a>
                            </li>

                        </ul>
                    </div>
                    <div class="footer-list-wrapper">

                        <ul class="footer-list footer-list-with-active">
                            <li>Language</li>
                            <li onclick="ws.util.cookieSetGlobal('language_override', 'en', { 'max-age': 365*24*60*60 })">
                                <a class="active footer-link" href="/en-ca/magazine">
                                    English
                                </a>
                            </li>
                            <li onclick="ws.util.cookieSetGlobal('language_override', 'fr', { 'max-age': 365*24*60*60 })">
                                <a class=" footer-link" href="/fr-ca/magazine">
                                    Français
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div class="footer-list-wrapper">
                        <ul class="footer-list footer-list-with-active">
                            <li>Country</li>
                            <li class="country country-gb">
                                <a class="" href="/en-gb/magazine"></a>
                            </li>
                            <li class="country country-us">
                                <a class="" href="/en-us/magazine"></a>
                            </li>
                            <li class="country country-ca">
                                <a class="active" href="/en-ca/magazine"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-list-wrapper social">
                        <ul class="footer-list">
                            <li>Social</li>
                            <li class="footer-social-icon">
                                <a class="footer-link" href="https://www.facebook.com/wealthsimple" target="_footer">
                                    <i class="ss-icon">facebook</i>
                                </a>
                            </li>
                            <li class="footer-social-icon">
                                <a class="footer-link" href="https://twitter.com/Wealthsimple" target="_footer">
                                    <i class="ss-icon">twitter</i>
                                </a>
                            </li>
                            <li class="footer-social-icon">
                                <a class="footer-link" href="https://www.instagram.com/wealthsimple/" target="_footer">
                                    <i class="ss-icon">instagram</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-ws-for-links">

                    <a class="footer-link footer-ws-for-links-link" href="https://www.wealthsimple.com/en-ca/advisors">Wealthsimple for Advisors</a>


                    <a class="footer-link footer-ws-for-links-link" href="https://www.wealthsimple.com/en-ca/work">Wealthsimple for Work</a>

                </div>
            </div>
            <div class="footer-copyright risk-warning-en-ca">
                <p>
                    <strong>By using this website, you accept our
                        <a href="https://www.wealthsimple.com/en-ca/legal/terms">Terms of Use</a>
                        and
                        <a href="https://www.wealthsimple.com/en-ca/legal/privacy">Privacy Policy</a>. Copyright 2019 Wealthsimple Technologies Inc.</strong>
                </p>
            </div>
        </FooterStyled>
    </>)
}

export default Footer;
