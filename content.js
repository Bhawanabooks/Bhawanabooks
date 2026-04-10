export const productCategories = [
    {
        id: 'academic',
        title: 'Academic & Children\'s Books',
        desc: 'Comprehensive textbooks for all grades and a magical world of stories.',
        items: [
            'NCERT/CBSE Textbooks',
            'Local Curriculum Books',
            'Storybooks & Comics',
            'Exam Guides & Reference',
            'Children\'s Picture Books'
        ],
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6'
    },
    {
        id: 'stationery',
        title: 'Premium Stationery',
        desc: 'High-quality writing instruments and paper products for smooth learning.',
        items: [
            'Fountain Pens',
            'Ballpoint & Gel Pens',
            'Spiral Notebooks',
            'Planners & Journals',
            'Copy Paper (A4/Foolscap)',
            'Sticky Notes & Markers'
        ],
        image: 'https://images.unsplash.com/photo-1586075010633-2470ac2f54ad'
    },
    {
        id: 'art',
        title: 'Art & Craft Supplies',
        desc: 'Tools for budding artists and seasoned professionals.',
        items: [
            'Watercolor Sets',
            'Acrylic Paints',
            'Colored Pencils',
            'Sketchpads & Canvas',
            'Brushes & Drawing Tools',
            'DIY Craft Kits'
        ],
        image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634'
    },
    {
        id: 'sports',
        title: 'Sports & Games',
        desc: 'Physical education supplies and recreational equipment.',
        items: [
            'Footballs & Volleyballs',
            'Badminton Rackets',
            'Table Tennis Equipment',
            'Chess & Board Games',
            'Sports Training Gear'
        ],
        image: 'https://images.unsplash.com/photo-1461896704190-321aa806085a'
    },
    {
        id: 'office',
        title: 'Office & Corporate Supplies',
        desc: 'Professional materials for modern workplaces and businesses.',
        items: [
            'Office Stationery Kits',
            'Files & Folders',
            'Desk Organizers',
            'Corporate Gifts',
            'Bulk Paper Supplies'
        ],
        image: 'https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1'
    }
];

export const services = [
    {
        name: 'Color Printing',
        description: 'High-quality color printing for documents, posters, and marketing materials',
        icon: 'printer'
    },
    {
        name: 'Photocopying',
        description: 'Fast and reliable copying service for all document sizes',
        icon: 'copy'
    },
    {
        name: 'Spiral Binding',
        description: 'Professional binding for reports, thesis, and project submissions',
        icon: 'book'
    },
    {
        name: 'Lamination',
        description: 'Protect and preserve your important documents with lamination',
        icon: 'shield'
    },
    {
        name: 'Bulk Supply',
        description: 'Corporate and institutional supply solutions with competitive pricing',
        icon: 'package'
    }
];

export const storeInfo = {
    name: "Bhawana Books & Stationery Center",
    phone: "01-4531802",
    whatsapp: "+977 014531802",
    email: "info@bhawanabooks.com.np",
    address: "Hadigaun Marga, Pipal Bot-4, Kathmandu 44600, Nepal",
    established: 1997,
    yearsSince: new Date().getFullYear() - 1997,
    hours: {
        weekdays: "8:00 AM - 8:00 PM",
        saturday: "4:00 PM - 8:00 PM",
        note: "Open Daily"
    },
    location: {
        lat: 27.7152061,
        lng: 85.3323063
    }
};

export const testimonials = [
    {
        name: "Sagar M.",
        role: "Student",
        text: "I've been buying my textbooks here since primary school. Now I'm a university student, and I still rely on them for quality stationery.",
        initials: "SM",
        rating: 5
    },
    {
        name: "Anjali Rai",
        role: "School Administrator",
        text: "Excellent service for bulk school & office supplies. Their delivery is always on time and the prices are very competitive.",
        initials: "AR",
        rating: 5
    },
    {
        name: "Kiran P.",
        role: "Artist",
        text: "Found everything from textbooks to professional art supplies in one visit. Highly recommend Bhawana Books for anyone in Hadigaun/Dhumbarahi. 29 years of excellence!",
        initials: "KP",
        rating: 5
    }
];

export const whyChooseUs = [
    {
        title: "100% Authentic",
        description: "All products are genuine and directly sourced from authorized distributors.",
        icon: "check-circle"
    },
    {
        title: "Fast Delivery",
        description: "Bulk orders delivered quickly. Same-day pickup available for local customers.",
        icon: "truck"
    },
    {
        title: "Best Prices",
        description: "Competitive pricing with regular discounts and bulk order benefits.",
        icon: "tag"
    },
    {
        title: "Expert Support",
        description: "Knowledgeable staff ready to help you find exactly what you need.",
        icon: "users"
    }
];
