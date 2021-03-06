import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          src="https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
