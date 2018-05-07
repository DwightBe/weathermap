import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    margin:0;
    padding:0;
    height: 100%;
    width: 100%;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    background-color: #D6DBDF;
    color: #6b8dba;
  }
  #root{
    height: 100%;
  }

  body.fontLoaded {
    font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a:link {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }
  h1, h2 {
    color: #1d3656;
  }

  p,
  label {
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
    font-size: 1em;
    @media (max-width: 767px) {
        font-size: 0.8em;
    }
  }

  button{
    border: none;
  	font-family: inherit;
  	font-size: inherit;
  	color: #6cb8e2;
    background-color: #e3edef;
  	cursor: pointer;
  	padding: 5px 5px;
  	display: inline-block;
  	text-transform: uppercase;
  	letter-spacing: 3px;
  	font-weight: 700;
  	outline: none;
  	position: relative;
  	-webkit-transition: all 0.3s;
  	-moz-transition: all 0.3s;
  	transition: all 0.3s;
  }

  button:after {
	   width: 100%;
	   height: 0;
	   top: 0;
     left: 0;
	   background: #fff;
  }

  button:hover,
    button:active {
  	color: #0e83cd;
  }

  button:hover:after,
    button:active:after {
  	height: 100%;
  }
  input {
			border: none;
			padding: 10px 15px;
			width: 400px;
			outline: none;
      font-size: 1.2em;
			line-height: 1.6;
  }
  .suggestion-item{
    backgroundColor: '#fafafa', cursor: 'pointer'
  }
  .suggestion-item--active{
    backgroundColor: '#fff', cursor: 'pointer'

  }


`;
