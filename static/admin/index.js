import CMS from "netlify-cms-app";

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
      repo: "syrkis/ptmkin.org",
      site_domain: "ptmkin.org",
    },
    media_folder: "static/images",
    public_folder: "/images",
    collections: [
      {
        name: "posts",
        label: "Blog",
        folder: "src/lib/posts",
        create: true,
        slug: "{{slug}}",
        fields: [
          { name: "title", label: "Title", widget: "string" },
          { name: "date", label: "Date", widget: "datetime" },
          { name: "body", label: "Body", widget: "markdown" },
        ],
      },
    ],
  },
});

// Register Svelte components with Netlify CMS
CMS.registerPreviewTemplate("posts", ({ entry }) => {
  const { title, date, body } = entry.get("data").toJS();
  return `
    <div>
      <h1>${title}</h1>
      <p>${date}</p>
      <div>${body}</div>
    </div>
  `;
});