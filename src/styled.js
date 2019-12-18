import React from "react";
import styled, {keyframes} from "styled-components";


export const Header = styled.div `

@media (max-width: 768px) {
	& > div{
		background:white;
		width:97%;
		max-width: 98%;
		z-index:15;
		position:fixed;
		padding:1.3rem;
		margin: 0 auto;
		top:0;
left:-0.6rem;
	}
	&>div>div{
		display:flex;
		justify-content:space-between;
	}
	nav{
		background:red;
		position:absolute;
		left:100%;
		height:100%;
		z-index:200;
		top:0;
		position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
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
		transition: all 10s ease; 
	}
	}
`;

export const Body = styled.div `
  width: 100%;
  max-width: 1260px;
	margin:0
  padding: 0;
  background: #f9f8f6;
	border: 2px solid black;
`;

export const Img = styled.img `
  width: 100%;
  margin: 0 auto;
`;

export const Article = styled.div `
 width:90%;
  margin: ${
    props => props.eachArticle ? "2rem auto" : "0 auto"
};
		border: 1px solid blue;
		
	& > div > div{
		border: 1px solid red;
		margin-bottom: 2rem
		background:white;
	}

`;
