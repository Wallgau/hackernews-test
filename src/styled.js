import React from "react";
import styled, {keyframes} from "styled-components";


export const Header = styled.div `

@media (max-width: 620px) {
	& > div{
		background: white;
    width: 90%;
    z-index: 15;
    position: fixed;
    padding: 1.3rem;
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
		margin-left:0.5rem;
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
		margin-right:0.5rem;
		
	}
	}
`;

export const Body = styled.div `
	margin: 0;
	padding: 0 20px;
  max-width: 1260px;
  background: #f9f8f6;
	nav{
		bottom: 0;
    right: -100%;
    top: 0;
    width: 100%;
    z-index: 200;
		background:#fab131;
	// 	position:absolute;
	// 	z-index:200;
  height: 100vh;
  //   top: 0%;
  //   left: 50%;
	// 	bottom: 0;
 transform: translateX(0%,0%);
  //   width: 100%;

	// 	color:white;
	
	 transition: all 0.8s ease-in-out;
	}
`;

export const Img = styled.img `
  width: 100%;
  margin: 0 auto;
	heigt: 5rem;

`;

export const Article = styled.div `
.ggvysP{
	margin: 0 auto;
    max-width: 1260px;
    width: 94%;
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
    font-weight: 100;
    letter-spacing: 1px;
    opacity: .4;
    text-transform: uppercase;
	}
	h3{
		font-family: FuturaBT-Heavy,sans-serif;
    font-size: inherit;
    font-weight: 100;
    font-size: 24px;
    letter-spacing: -.03em;
    line-height: 32px;
    margin: 10px 0 20px;
	}
	

`;
