const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const profileData = {
  profilePicture: 'http://localhost:3000/images/walterwhite.jpg',
  name: 'Walter White',
  location: 'Umhlanga, Durban',
  hourlyRate: 450,
  bio: '25 years experience in Angular development', 
  skills: ['Angular', 'JavaScript', 'CSS', 'HTML'],
  portfolio: ['http://localhost:3000/images/mtn.png', 'http://localhost:3000/images/vodacom.png', 'http://localhost:3000/images/stdbank.jpg', 'http://localhost:3000/images/fnb.png', 'http://localhost:3000/images/absa.png'],
  portfolioBio: 'The below links will take you the work I have done for these companies',
  socialMedia: ['http://localhost:3000/images/instagram.jpg', 'http://localhost:3000/images/linkedin.png', 'http://localhost:3000/images/x.jpg'],
  contact: { email: 'walterwhite@breakingbad.com', phone: '+2708882200' }
};

app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
