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
        },
        {
            name: "journey",
            title: "My Journey Timeline",
            type: "array",
            of: [
                {
                    type: "object",
                    title: "Timeline Entry",
                    fields: [
                        {
                            name: "period",
                            title: "Period",
                            type: "string",
                            description: 'Example: 9/2023 - Present'
                        },
                        {
                            name: "title",
                            title: "Position",
                            type: "string",
                            description: 'Example: Bachelor - Computer Science'
                        },
                        {
                            name: "company",
                            title: "Company",
                            type: "string",
                            description: 'Example: CNTU'
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "text"
                        }
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'period'
                        }
                    }
                }
            ]
        }
    ]
}