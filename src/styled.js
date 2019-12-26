import React from "react";
import styled, {keyframes} from "styled-components";

export const Header = styled.div `

@media (max-width: 620px) {
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
    border: 1px solid black;
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
		border: 1px solid #fab131;
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

`;

export const Body = styled.div `
margin: 0 auto;
  max-width: 1260px;
  background: #f9f8f6;
	width:92%;
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
  //   width: 100%;

	// 	color:white;
	
	 transition: all 0.8s ease-in-out;
	}
}
`;

export const Img = styled.img `
  width: 100%;
  margin: 0 auto;
	heigt: 5rem;
`;
export const Wrap = styled.div `
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
	padding:4rem;
	text-align:center;
h1{
	font-family: FuturaBT-Heavy,sans-serif;
    font-size: 45px;
    color: #272c2f;
    line-height: 1.1;
}
h3{
	font-family: FuturaBT-Heavy,sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    opacity: .4;
    text-transform: uppercase;
    line-height: 21px;
    margin: 15px 0 0;
}
}
.top{
	padding:0;
	margin:0;
	min-height: 500px;
	background-image:url("https://wealthsimple-grow.ghost.io/content/images/2019/12/MsEtiquette-1-2.jpg");
	background-size: cover;
	background-position:center;
}
`;
export const Article = styled.div `
.ggvysP{
	margin: 0 auto;
    max-width: 1260px;
    width: 92%;
    background: #f9f8f6;
		}
.post{background: #fff;
    line-height: 28px;
    padding: 30px 30px 15px;
 
  margin: ${
    props => props.eachArticle ? "0 2rem" : "0"
};
		border: 1px solid blue;}
		
	& > div > div{
		border: 1px solid red;
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
	

`;
