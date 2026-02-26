export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "object",
      fields: [
        {
          name: "image",
          type: "image",
          title: "Upload image",
        },
        {
          name: "url",
          type: "url",
          title: "Image URL",
        },
      ],
    },
    {
      name: "text",
      title: "Text",
      type: "text",
    },
  ],
};
