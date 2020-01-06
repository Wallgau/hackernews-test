import React from "react";
import styled, {keyframes} from "styled-components";

export const Button = styled.div `
font-family: FuturaBT-Book,sans-serif;
    font-size: 18px;
    font-weight: 300;
    background: #ffb21a;
    border-radius: 52px;
    color: #fff;
    padding: 16px 20px 15px;
    text-decoration: none;
    transition: background 80ms linear,opacity 1s linear;
    white-space: nowrap;
		width: 30%;
		margin: 2rem auto;
		text-align:center;
    @media (min-width:1024px){
      width:20%;
      font-size:20px
    }
`

export const FooterStyled = styled.footer `
    background: #222;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem 1.3rem;

ul, li{
			list-style: none;
    margin: 0;
    padding: 0;
		}
		.footer-content {
    color: #fff;
    margin: 0 auto;
    max-width: 1200px;
}
.footer-list-wrapper {
    margin: 0 0 50px;
}
ul.footer-list li:first-child {
    font-family: FuturaBT-Heavy,sans-serif;
    font-size: 14px;
		font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 25px;
}
		ul.footer-list {
    text-align: left;
    vertical-align: top;
}
ul.footer-list li {
    font-family: FuturaBT-Book,sans-serif;
    
    margin-bottom: 10px;
}
.footer-link {
    color: #fff;
    opacity: 1;
		font-weight: 100;
    text-decoration: none;
    transition: opacity 60ms linear;
		letter-spacing:1.4px;
}
.app-icon-ios a {
    background: url(/assets/magazine/images/modules/icon-apple-340ef8d….svg) no-repeat;
}
strong, strong a{
  font-family: FuturaBT-Heavy,sans-serif;
    font-size: inherit;
    font-weight: 100;
    font-size: 13px;
    line-height: 1.77;
    color: #fff;
    margin: 0 auto;
    max-width: 1200px;
    opacity: .3;
    padding: 10px 0;
}
strong a{
  margin: 0 4px;
}
.icons-dowload{
  display: flex;
}
.icons-dowload a{
  color:white;
  margin-right: 1rem;
}
.footer-ws-for-links{
  display:flex;
  flex-direction: column;
}
.footer-ws-for-links a{
  margin-bottom: 2rem;
}
ul.footer-list li.footer-social-icon {
    display: inline-block;
    font-size: 30px;
    margin: 0 15px 0 0;
}
 .country {
    display: inline-block;
    margin: 0 10px 0 0;
}
@media (min-width:700px){
  .footer-content{
    justify-content: space-between;
    display:flex
    flex-wrap: wrap;
    margin-bottom:2.5rem;
    }
    .footer-ws-for-links{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
   
}

  

.footer-ws-for-links a{
  margin-right:2rem;
}

  padding: 3rem 6rem;

}
`

export const Header = styled.div `

@media (max-width: 620px) {
& > div.desktop-menu{
    display:none;
  }
& > div{
		background: white;
    width: 100%;
    z-index: 15;
    position: fixed;
    padding: 1.3rem 0;
    margin: 0 auto;
    top: 0;
		left:0;
    display: flex;
    justify-content: space-between;
	}
.w {
		background:black
    border-radius: 50%;
		padding:0.3rem
		height:2rem;
		width:2rem;
		font-size: 1.6rem;
		text-align:center;
		font-weight:600;
    color: white;	
		margin-left:1.5rem;
  }
.hamburger{
		background-color: #fab131;
		border-radius: 50%;
		color: white;
		position:relative;
		padding:0.3rem;
		height:2rem;
		width:2rem;
		transition: translate 10s ease; 
		margin-right:1.5rem;
		
	}
	}
@media (min-width: 621px) { 
    background:white
    padding: 0rem;
    width:100%;
.desktop-menu{
    display:flex;
    padding: 1rem 0;
    background: white;
    width: 100%;
    position: fixed;
    z-index: 50;
}
.header-logo{
  padding-left:8rem;
  flex-grow: 10;
  font-size:18px;
}
.desktop-menu nav{
  padding-right:8rem
}
    ul.row{
    list-style: none;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    }
.cta.cta--www-init-onboarding.header-nav-link.button{
    font-family: FuturaBT-Book,sans-serif;
    font-size: 18px;
    font-weight: 300;
    background: #ffb21a;
    border-radius: 52px;
    color: #fff;
    padding: 16px 20px 15px;
    text-decoration: none;
    transition: background 80ms linear,opacity 1s linear;
    white-space: nowrap;
  }
  ul.row li:focus{
    border:1px solid red;
  }
    ul.row li a{
      text-decoration: none;
      color: hsla(0,0%,7%,.5);
      margin-left: 1.3rem;
      font-family: FuturaBT-Book,sans-serif;
    font-size: 20px;
    font-weight: 300;
    }
    
   
    .w, .hamburger{
      display: none;
    }
  
     .textTop{ margin: 2.5rem;
    position: absolute;
    top: 24rem;
    right: -8px;
    width: 56%;
    opacity: 0.7;
    height: 22rem;}
    
.top {
    padding: 13rem;
    margin: 2.5rem;
}
svg{
  width: 160px;
}.row-align-right {
    justify-content: flex-end;
}

}

  

`;

export const Body = styled.div `
@media (max-width:900px){

margin: 0 2rem;
  max-width: 1260px;
  background: #f9f8f6;
}
@media (min-width: 1400px){
  margin: 0 auto;
}
font-family: FuturaBT-Book,sans-serif;
& > div{
 background: #f9f8f6;
	
	nav{
		bottom: 0;
    right: -100%;
    top: 0;
    width: 100%;
    z-index: 200;
		background:#fab131;	
  height: 100vh;
 transform: translateX(0%,0%);
	 transition: all 0.8s ease-in-out;
	}
}
`;

export const Img = styled.img `
  width: 100%;
  margin: 0 auto;
	height: 20rem;
  opacity:0.8;
`;
export const Wrap = styled.div `
.row-align-center {
   display:none
}

.row {
    display: none;
}
margin:0 -8px;
span{
	font-family: FuturaBT-Heavy,sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    opacity: .4;
    text-transform: uppercase;
}
h3{
	font-family: FuturaBT-Heavy,sans-serif;
    font-size: inherit;
    font-size: 24px;
    letter-spacing: -.03em;
    line-height: 32px;
    margin: 10px 0 20px;
}
.magazine{
	background:#f9f8f6;
	padding: 7rem 4rem;
	text-align:center;
h1{
	font-family: FuturaBT-Heavy,sans-serif;
    font-size: 45px;
		font-weight:500;
    color: #272c2f;
    line-height: 1.1;
}
h3{
	font-family: FuturaBT-Heavy,sans-serif;
    font-size: 14px;
    opacity: .4;
    text-transform: uppercase;
    line-height: 21px;
		letter-spacing: 2px;
    margin: 15px 0 0;
}
}
.top{
	padding:0;
	margin:0;
	min-height: 228px;
	background-image:url("https://wealthsimple-grow.ghost.io/content/images/2019/12/MsEtiquette-1-2.jpg");
	background-size: cover;
	background-position:center;
}
.textTop{
	line-height: 28px;
    padding: 30px 30px 15px;
		background:white;
		p{
			font-family: Futura® PT,sans-serif;
    font-size:18px;
		line-height:1.6;
    font-weight: 300;
		}
}
@media (min-width: 621px) {
  a{
    color:black
    font-family: FuturaBT-Book,sans-serif;
    font-weight: 300;
    font-size: 1.1rem;
    opacity: 0.4;
  }
  a:hover{
    opacity:1;
  }
    .magazine{
      padding:2.5rem;
    }
    .top{
      padding:12rem;
      margin:2.5rem;
      position:relative;
    }
    .textTop{
    margin: 2.5rem;
    margin-right:0;
    position: absolute;
    top: 10%;
    right:0
    width: 55%;
    opacity: 0.7;
    height: 19rem;
    }
    .row-align-center {
    justify-content: center;
}

.row {
    display: flex;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
  }
.sub-nav-link {
    align-self: center;
    margin: 0 20px;
    position: relative;
    text-align: center;
}
.sub-nav-link a {
    text-decoration: none;
}
.magazine-hero .sub-nav-link a {
    color: #272c2f;
    }
.magazine-hero .sub-nav-link .active {
    opacity: 1;
}
.sub-nav-link:after {
    background: #121212;
    border-radius: 100%;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    right: -20px;
    top: 50%;
    width: 2px;
}
.magazine-hero .sub-nav-link:after {
    opacity: .4;
}
.magazine h1{
  margin-top:0;
  font-size:4rem;
  margin-bottom: 1.3rem;
}
.magazine h3{
  margin-top:0;
  }
}
@media (min-width:900px) {
  margin:0 auto;
    .top{
      margin: 2.5rem 8rem;
    }
.magazine {
    padding-top: 6.5rem;
    }
    
  
  }
  
`;
export const Article = styled.div `
.post p{
    font-family: FuturaBT-Book,sans-serif;
    font-size: 18px;
    line-height: 1.6;
    font-weight: 300;
    }
.ggvysP{
	margin: 0 auto;
    max-width: 1260px;
    width: 92%;
    background: #f9f8f6;
		}
    ul{
    text-decoration: none;
    list-style-type: none;
    padding: 0;
    }
li{background: #fff;
    line-height: 28px;
    padding: 30px 30px 15px;

 
  margin: ${
    props => props.eachArticle ? "0 2rem" : "1rem"
};
		}
		
	& > div > div{
		margin-bottom: 2rem
		background:white;
	}
span{
		    font-family: FuturaBT-Heavy,sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    opacity: .4;
    text-transform: uppercase;
	}
	h3{
	font-family: FuturaBT-Heavy,sans-serif;
    font-size: inherit;
    font-size: 24px;
    line-height: 32px;
    margin: 10px 0 20px;
	}
	@media (min-width: 621px){
    ul{
    display:flex;
    flex-wrap:wrap;
    height:fit-content
    }
    li {
      width: calc(50% - 0.5rem);
      padding:0;
    } 
    li:first-child{
      height: 44rem;
    margin: 0 0.5rem 1rem 0;
        
    }
    li:first-child .post{
      padding-bottom: 0;
    }
    li:nth-of-type(2n+3){
      margin:-1rem
       0.5rem 1rem 0;
      height: 45rem;
    }
    li:nth-of-type(even){
      margin:0 0 1rem 0.5rem;
      height:45rem;
    }
    .post{
      font-family: FuturaBT-Book,sans-serif;
      background: #fff;
    clear: both;
    line-height: 28px;
    padding: 30px 30px 15px;
    }
    
    .post h3{
      font-family: FuturaBT-Heavy,sans-serif;
    font-size: inherit;
    font-size: 24px;
    line-height: 32px;
    margin: 10px 0 20px;
    }
    
  }
  @media (min-width:900px) {
    ul{
      margin: 2.5rem 8rem;
    }
    }
    @media (min-width:1300px){

    li:first-child {
    height: 44rem;
    margin: 0 1rem 1rem 0;
}
li {
    width: calc(50% - 1rem);
    padding: 0;
  }
  li:nth-of-type(even) {
    margin: 0 0 2rem 1rem;
    height: 45rem;
  }
li:nth-of-type(2n+3) {
    margin: -1rem 1rem 2rem 0;
    height: 45rem;}

  }
  @media (min-width:1400px){
 
     ul {
    margin: 0 8rem;
  }
 
   
    
  }
  

`;
