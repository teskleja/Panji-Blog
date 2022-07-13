export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62ce96fc85d60e69ea6281ab",
                  title: "Sanity Studio",
                  name: "panji-blog-studio",
                  apiId: "69b6e3b5-06b5-4975-a8f4-0e3f093f1d49",
                },
                {
                  buildHookId: "62ce96fdbc625d6f3ea085b6",
                  title: "Blog Website",
                  name: "panji-blog",
                  apiId: "8d1d5833-8e2b-437d-95f7-241b1aa36b8c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/teskleja/Panji-Blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://panji-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
