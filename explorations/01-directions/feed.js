import { posts } from "./posts.js";

for (const feed of document.querySelectorAll("[data-post-list]")) {
  for (const post of posts) {
    const item = document.createElement("article");
    item.className = "post";

    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = post.author.charAt(0);

    const content = document.createElement("div");
    content.className = "post-content";

    const byline = document.createElement("p");
    byline.className = "byline";

    const author = document.createElement("strong");
    author.textContent = post.author;

    const text = document.createElement("p");
    text.className = "post-text";
    text.textContent = post.text;

    byline.append(author);
    content.append(byline, text);

    if (post.location) {
      const location = document.createElement("p");
      location.className = "location";
      location.textContent = post.location;
      content.append(location);
    }

    if (feed.dataset.likeActions === "true") {
      const actions = document.createElement("div");
      actions.className = "post-actions";

      const like = document.createElement("button");
      like.className = "like-button";
      like.type = "button";
      like.setAttribute("aria-pressed", "false");
      like.textContent = "Like";
      like.addEventListener("click", () => {
        const isLiked = like.getAttribute("aria-pressed") === "true";
        like.setAttribute("aria-pressed", String(!isLiked));
        like.textContent = isLiked ? "Like" : "Liked";
      });

      actions.append(like);
      content.append(actions);
    }

    item.append(avatar, content);
    feed.append(item);
  }
}
