export default {
    name: "services",
    title: "Services",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            initialValue: "Services & Solutions",
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: "text",
        },

        /* ===== FIRST BLOCK ===== */
        {
            name: "cards",
            title: "Service Cards",
            type: "array",
            of: [
                {
                    type: "object",
                    title: "Service Category",
                    fields: [
                        {
                            name: "categoryTitle",
                            title: "Category Title",
                            type: "string",
                        },
                        {
                            name: "iconName",
                            title: "Category Icon",
                            type: "string",
                            description: "code2, database, smartphone, palette, zap, shield, globe, layout, server, cloud, cpu, barChart",
                        },
                        {
                            name: "items",
                            title: "Services",
                            type: "array",
                            of: [
                                {
                                    type: "object",
                                    title: "Service Item",
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
                                            name: "iconName",
                                            title: "Icon",
                                            type: "string",
                                            description: "code2, database, smartphone, palette, zap, shield, globe, layout, server, cloud, cpu, barChart",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        /* ===== SECOND BLOCK ===== */
        {
            name: "technologies",
            title: "Technologies & Tools",
            type: "array",
            of: [
                {
                    type: "object",
                    title: "Technology Group",
                    fields: [
                        {
                            name: "title",
                            title: "Group Title",
                            type: "string",
                            description: "Frontend / Backend / Other",
                        },
                        {
                            name: "iconName",
                            title: "Group Icon",
                            type: "string",
                            description: "code2, database, smartphone, palette, zap, shield, globe, layout, server, cloud, cpu, barChart",
                        },
                        {
                            name: "items",
                            title: "Technologies",
                            type: "array",
                            of: [
                                {
                                    type: "object",
                                    title: "Technology",
                                    fields: [
                                        {
                                            name: "name",
                                            title: "Name",
                                            type: "string",
                                        },
                                        {
                                            name: "description",
                                            title: "Description",
                                            type: "string",
                                        },
                                        {
                                            name: "iconName",
                                            title: "Icon",
                                            type: "string",
                                            description: "code2, database, smartphone, palette, zap, shield, globe, layout, server, cloud, cpu, barChart",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
