export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "githubUrl",
      title: "Github URL",
      type: "url",
    },
    {
      name: "demoUrl",
      title: "Demo URL",
      type: "url",
    },
    {
      name: "longDescription",
      title: "Long Description",
      type: "text",
    },
  ],
};
