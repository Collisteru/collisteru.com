import * as React from "react"

const Head = ({ children, quote }) => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5LGVYN17NL"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5LGVYN17NL');
        `}
      </script>
    </>
  )
}

export default Head
