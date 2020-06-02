import React from "react";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";
import { InfoVoice } from "../components/InfoVoice";
import { InfoOutput } from "../components/InfoOutput";
import { InfoContact } from "../components/InfoContact";
import { Logo } from "../components/Logo";
import { GetStaticProps } from "next";
import RssParser from "rss-parser";

type Props = {
  items: Array<RssParser.Item>
};

export const getStaticProps: GetStaticProps = async () => {
  const parser = new RssParser();
  const gistFeed = await parser.parseURL("https://gist.github.com/nazo.atom");
  const blogFeed = await parser.parseURL("https://nazo.hatenablog.com/feed");
  let items: Array<RssParser.Item> = [];
  if (gistFeed.items !== undefined) {
    items = items.concat(gistFeed.items);
  }
  if (blogFeed.items !== undefined) {
    items = items.concat(blogFeed.items);
  }
  return {
    props: {
      items: items.sort((a, b) => {
        if (a.pubDate === undefined || b.pubDate === undefined) { return 0; }
        const dateA = new Date(a.pubDate);
        const dateB = new Date(b.pubDate);
        if (dateA > dateB) { return -1; }
        if (dateA < dateB) { return 1; }
        return 0;
      }).slice(0, 10)
    }
  };
};

const PagesIndex: React.FC<Props> = ({ items }: Props) => {
  const externalPageName = (link: string | undefined) => {
    if (link === undefined) { return ""; }
    if (link.startsWith("https://gist.github.com/")) { return "Gist"; }
    else { return "Blog"; }
  };

  return (
    <Layout>
      <div className="bg-gray-100 pt-10">
        <div className="mx-auto max-w-6xl">
          <Logo></Logo>
          <div className="p-2 bg-gray-100 rounded">
            <div className="flex flex-col md:flex-row">
              <Profile></Profile>
              <div className="md:w-2/3">
                <div className="p-4">
                  <InfoVoice></InfoVoice>
                  <InfoOutput></InfoOutput>
                  <InfoContact></InfoContact>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 pt-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="pb-5 text-xl font-bold">最近のアップデート</h2>
          <div className="flex flex-col">
            {items.map((item) => (
              <div className="text-black text-left bg-gray-400 px-4 py-2 m-2" key={item.guid}>
                <span className="mx-5">{externalPageName(item.link)}</span>
                <a href={item.link} className="underline">{item.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PagesIndex;
