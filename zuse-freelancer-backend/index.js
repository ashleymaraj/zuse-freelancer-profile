const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


const profileData = {
    "profilePicture": '/images/walterwhite.jpg',
    "id": 1,
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane.doe@example.com",
    "username": "janedoe_dev",
    "role": "freelancer",
    "is_active": true,
    "profile": {
        "id": 1,
        "user_id": 1,
        "job_title": "Full Stack Developer",
        "description": "Experienced full stack developer specializing in React and Django",
        "hourly_rate": 75,
        "bio": "I'm a passionate developer with 5 years of experience in building scalable web applications.",
        "availability": "Part-time",
        "city": "San Francisco",
        "state": "California",
        "country": "United States",
        "skills": [
            { "id": 1, "name": "React", "level": "Expert" },
            { "id": 2, "name": "Django", "level": "Expert" },
            { "id": 3, "name": "PostgreSQL", "level": "Intermediate" }
        ],
        "experiences": [ /*...*/],
        "education": [ /*...*/],
        "certifications": [ /*...*/],
        "portfolio_items": [
            { "id": 1, "title": "E-commerce Platform", "description": "Developed a fully functional e-commerce platform using React and Django", "url": "https://github.com/janedoe/ecommerce-platform" },
            { "id": 2, "title": "Another One", "description": "Developed a  functional e-commerce  using   Django", "url": "https://linkedin.com/janedoe/ecommerce-platform" }
        ],
        "reviews": [ /*...*/],
        "social_links": [
            { "id": 1, "platform": "LinkedIn", "url": "https://www.linkedin.com/in/janedoe" },
            { "id": 2, "platform": "GitHub", "url": "https://github.com/janedoe" }
        ],
        "created_at": "2023-01-01T00:00:00Z",
        "updated_at": "2023-06-15T12:30:00Z"
    },
    "subscription": { "id": 1, "plan": "Professional", "start_date": "2023-01-01", "end_date": "2024-01-01", "is_active": true }
};

app.get('/api/profile', (req, res) => {
    res.json(profileData);
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
