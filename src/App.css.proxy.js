// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h1 {\r\n    font-size: 4.5em;\r\n    font-weight: 500;\r\n    margin-bottom: 0;\r\n}\r\np {\r\n    font-size: 1.6em;\r\n    font-weight: 300;\r\n    line-height: 1.4;\r\n    max-width: 28em;\r\n}\r\n\r\np {\r\n    display: block;\r\n    margin-block-start: 1em;\r\n    margin-block-end: 1em;\r\n    margin-inline-start: 0px;\r\n    margin-inline-end: 0px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: #121314;\r\n    position: relative;\r\n}\r\n\r\n\r\nelement.style {\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: #121314;\r\n    position: relative;\r\n}\r\nuser agent stylesheet\r\na:-webkit-any-link {\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\np {\r\n    font-size: 1.6em;\r\n    font-weight: 300;\r\n    line-height: 1.4;\r\n    max-width: 28em;\r\n}\r\nbody {\r\n    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: calc(10px + 0.33vw);\r\n    -webkit-font-smoothing: antialiased;\r\n    padding: 5vh 10vw;\r\n    color: #121314;\r\n}\r\na:hover:after {\r\n    top: 0%;\r\n}\r\na:after {\r\n    content: '';\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 60%;\r\n    left: -0.1em;\r\n    right: -0.1em;\r\n    bottom: 0;\r\n    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);\r\n    background-color: rgba(79, 192, 141, 0.5);\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}