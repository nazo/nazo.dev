import React from "react";
import { Layout } from "../components/Layout";
import marked from "marked";
import { GetStaticProps } from "next";

type Props = {
  markdown: string
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://gist.githubusercontent.com/nazo/a6042a1ce09ed470a63c9f37132fef7b/raw/portfolio.md");
  const markdown = await response.text();
  return {
    props: {
      markdown: marked(markdown)
    }
  };
};

const PagesProfile: React.FC<Props> = ({ markdown }: Props) => {
  return (
    <Layout>
      <div className="bg-gray-100 pt-10 w-full">
        <div className="mx-auto max-w-6xl">
          <div className="p-2 bg-gray-100 rounded">
            <div className="markdown-body" dangerouslySetInnerHTML={{__html: markdown}} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PagesProfile;
