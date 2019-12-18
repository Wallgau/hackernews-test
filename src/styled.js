import React from "react";
import styled from "styled-components";

export const Header = styled.div`
@media (max-width: 768px) {
	
  display: flex;
  justify-content: space-between;
	background:white;
	z-index:15;
	position:fixed
	width:100%;
	top:0;
	padding: 1.3rem 0;
	
  .w {
    border: 1px solid black;
		background:black
    border-radius: 50%;
		padding:0.3rem
		height:1.5rem;
		width:1.5rem;
		text-align:center;
		font-size: 1.6rem;
		font-weight:600;
    color: white;
		margin: 0 5%;
		
  }
	.hamburger{
		border: 1px solid #fab131;
		background-color: #fab131;
		border-radius: 50%;
		 color: white;
		 padding:0.3rem;
		 margin: 0 10%;
	}
	}
`;

export const Img = styled.img`
  width: 90%;
  margin: 0 1rem;
`;

export const Article = styled.div`
  width: 70%;
  background: grey;
`;
