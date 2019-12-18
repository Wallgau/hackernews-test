import React from "react";
import styled from "styled-components";

export const Header = styled.div`
@media (max-width: 768px) {
	
  display: flex;
	background:white;
	z-index:15;
	position:fixed
	
	top:0;
	justify-content:space-between;
	margin: 0;
	padding: 1.3rem 0
	margin-left: auto;
    margin-right: auto;
    max-width: 1490px;
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
		    
	
  .w {
    border: 1px solid black;
		background:black
    border-radius: 50%;
		padding:0.3rem
		height:1.5rem;
		width:1.5rem;
		font-size: 1.6rem;
		font-weight:600;
    color: white;
		margin:0;
		
		
  }
	.hamburger{
		border: 1px solid #fab131;
		background-color: #fab131;
		border-radius: 50%;
		 color: white;
		 padding:0.3rem;
		 margin-left: 51%;
		 
	}
	}
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1260px;
	margin:0
  padding: 0;
  background: #f9f8f6;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 auto;
`;

export const Article = styled.div`
  width: 90%;
  margin: auto;
`;
