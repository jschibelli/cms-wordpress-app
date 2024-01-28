import { Html, Head, NextScript, Main} from "next/document";
import NavbarComponent from "../components/navbar";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavbarComponent />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
