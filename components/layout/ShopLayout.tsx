import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { NavBar, SideBar } from "../ui";

interface Props {
  title?: string;
  pageDescription: string;
  imageURL: string;
}

export const ShopLayout: FC<PropsWithChildren<Props>> = ({
  title = "Next-Ecommerce",
  pageDescription,
  imageURL,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageURL && <meta name="og:image" content={imageURL} />}
      </Head>

      <nav>
        <NavBar />
      </nav>

      <SideBar />
      
      <main
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}
      >
        {children}
      </main>

      {/* Footer footer */}
    </>
  );
};
