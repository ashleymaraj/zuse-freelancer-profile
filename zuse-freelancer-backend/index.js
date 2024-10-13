// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const profileData = {
  profilePicture: "",
  name: 'Walter White',
  location: 'Umhlanga, Durban',
  hourlyRate: 450,
  bio: '20 years experience in Angular development', 
  skills: ['Angular', 'JavaScript', 'CSS', 'HTML'],
  portfolio: "",
  portfolioBio: 'The below links will take you the work I have done for these companies',
  socialMedia: "",
  contact: { email: 'walterwhite@breakingbad.com', phone: '+2708882200' }
};

app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
