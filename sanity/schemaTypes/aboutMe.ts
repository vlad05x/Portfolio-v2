export default {
    name: "aboutMe",
    title: "About Me",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Section Title",
            type: "string",
            initialValue: 'About Me'
        },
        {
            name: "avatar",
            title: "Avatar",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: 'headline',
            title: 'Headline (Name)',
            type: 'string',
            description: 'Example: Hello, I\'m Vlad Honcharenko'
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ 
                type: "block", 
                marks: {
                    decorators: [
                        { title: 'Strong', value: 'strong' }, 
                        { title: 'Emphasis', value: 'em' },
                    ]   
                }

             }],
        }
    ]
}