import React from "react";
import { Layout } from "../components/Layout";
import { GetStaticProps } from "next";
import RssParser from "rss-parser";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const cards = [
  {
    head: "Webシステム開発",
    body: "月10日以内での継続した稼働を提供します。サーバーサイドを中心に多数のプログラミング言語での開発実績があり、最新の環境での開発からレガシーな環境の改善まで幅広く行います。"
  },
  {
    head: "Webインフラ構築（AWS, GCP）",
    body: "単発または月10日以内での継続プランでインフラの構築を請け負います。クラウドネイティブかつ保守を行いやすい環境を提供します。"
  },
  {
    head: "Webインフラ保守",
    body: "定額でインフラなどの保守とチャットサポートを請け負います。"
  },
  {
    head: "技術顧問",
    body: "定額でチャットでの相談及び月１でのオンライン面談を請け負います。"
  }
];

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
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            なぞらぼ by nazo
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Webシステム開発の助け舟！開発はもちろん、インフラ構築や技術選定、チームメンバー育成から経営方針の相談まで幅広く御社の業務をサポート致します。まずはご相談下さい！
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button LinkComponent={Link} href="mailto:nazo@nazo.dev" variant="contained">今すぐ相談する</Button>
            <Button LinkComponent={Link} href="/profile" variant="outlined">プロフィールを見る</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { card.head }
                  </Typography>
                  <Typography>
                    { card.body }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  最近のアップデート
                </Typography>
                <Typography>
                  {items.map((item) => (
                    <List key={item.guid}>
                      <ListItem>
                          <ListItemIcon>{externalPageName(item.link)}</ListItemIcon>
                        <ListItemText>
                          <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
                        </ListItemText>
                      </ListItem>
                    </List>
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PagesIndex;
