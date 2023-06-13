import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class SandBox extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="shortcut icon" href="/img/favicon-32x32.png" type="image/png" /> */}
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
          <link rel="manifest" href="/img/site.webmanifest" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
} // ======================================================================

SandBox.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage; // Run the React rendering logic synchronously

  ctx.renderPage = () =>
    originalRenderPage({
      // Useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // Useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component
    }); // Run the parent `getInitialProps`, it now includes the custom `renderPage`

  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
