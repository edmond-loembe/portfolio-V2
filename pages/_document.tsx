import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Edmond Loembe</title>
        <meta name="description" content="Bienvenue sur le portfolio d'Edmond Loembe.
            Découvrez mes projets, mes compétences et mon expérience en développement web."
        />
        <link rel="icon" href="/images/moi_ia3.PNG" />
      </Head>
      <body className="font-primay">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
