// this example declares the function at the top of the nuxt.config.js file
// const fs = require("fs").promises;
// const path = require("path");

let posts = [];

export const constructFeedItem = async (post, dir, hostname) => {
  //note the path used here, we are using a dummy page with an empty layout in order to not send that data along with our other content
  // const filePath = path.join(__dirname, `dist/rss/${post.slug}/index.html`);
  // const content = await fs.readFile(filePath, "utf8");
  const url = `${hostname}/${dir}/${post.slug}`;
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: "",
  };
};

export const create = async (feed, args) => {
  const [filePath, ext] = args;
  console.log(filePath);
  const hostname =
    process.NODE_ENV === "release"
      ? process.env.WEB_URL
      : "http://localhost:3000";
  feed.options = {
    title: "TFD Blog",
    description: "Blog Stuff!",
    link: `${hostname}/feed.${ext}`,
  };
  const { $content } = require("@nuxt/content");
  if (posts === null || posts.length === 0)
    posts = await $content(filePath).fetch();

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname);
    feed.addItem(feedItem);
  }
  return feed;
};
