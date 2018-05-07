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

  input {
			border: none;
			padding: 10px 15px;
			width: 400px;
			outline: none;
      font-size: 1.2em;
			line-height: 1.6;
  }
  .autocomplete-dropdown-container{
    background-color: #ffffff;
    width: 430px;
    margin: 0 auto;
    z-index: 4;

  }
  .suggestion-item{
    background-color: #ededed;
    cursor: 'pointer';
    font-size: 1.2em;
    line-height: 1.5em;
  }
  .suggestion-item--active{
    background-color: #fafafa;
    cursor: 'pointer';
    font-size: 1.2em;
    line-height: 1.5em;
  }


`;
