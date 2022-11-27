import React from "react";
import { Layout } from "../components/Layout";
import { marked } from "marked";
import { GetStaticProps } from "next";
import Container from "@mui/material/Container";

type Props = {
  markdown: string
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://gist.githubusercontent.com/nazo/a6042a1ce09ed470a63c9f37132fef7b/raw/portfolio.md");
  const markdown = await response.text();
  return {
    props: {
      markdown: marked.parse(markdown)
    }
  };
};

const PagesProfile: React.FC<Props> = ({ markdown }: Props) => {
  return (
    <Layout>
      <Container maxWidth="md">
        <div className="markdown-body" dangerouslySetInnerHTML={{__html: markdown}} />
      </Container>
    </Layout>
  );
};

export default PagesProfile;
