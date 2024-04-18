import * as React from "react"
import { Link } from "gatsby"

function romanize(num) {
  if (isNaN(num)) return NaN
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman
  return Array(+digits.join("") + 1).join("M") + roman
}

// No need to pass children explicitly into Layout, just place the content inside the Layout component when used, like this:
// <Layout>
//   <h1>My Page</h1>
// </Layout>
const Layout = ({ children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  let header = (
    <div className="header-container">
      <h1 className="main-heading">
        <Link to="/">Collisteru</Link>
      </h1>
      <div className="minor-header-links-container">
        <Link to="/about" className="minor-header-link">
          ABOUT
        </Link>
        <Link to="/software" className="minor-header-link">
          SOFTWARE
        </Link>
        <Link to="/writing" className="minor-header-link">
          WRITING
        </Link>
        <Link to={rootPath} className="minor-header-link">
          HOME
        </Link>
      </div>
    </div>
  )

  // Style the below div so that text is centered
  let footer = (
    <div style={{ textAlign: "center" }}>
      © {romanize(new Date().getFullYear())}
    </div>
  )

  return (
    <div className="global-wrapper">
      <head>
        {" "}
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
      </head>
      <header className="global-header">{header}</header>
      <main id="content">{children}</main>
      <div class="filler-150px"></div>
      <footer className="global-footer"> {footer}</footer>
    </div>
  )
}

export default Layout
