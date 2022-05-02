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
                    "62705051d6af6f229359ebd9",
                  title: "Sanity Studio",
                  name: "should-you-listen-studio",
                  apiId: "7c752fa3-2b20-44bd-a383-ff5aa9b0499b",
                },
                {
                  buildHookId: "62705051fb4c81228b0c50fa",
                  title: "Blog Website",
                  name: "should-you-listen",
                  apiId: "ba354f23-ba51-4d19-ba35-66115420be52",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ericflatt/should-you-listen",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://should-you-listen.netlify.app",
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
