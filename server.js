const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
// Middleware to parse request body as JSON
app.use(bodyParser.json());

// Project Uploads
app.post('/submit', (req, res) => {
    const projectData = req.body;
    console.log('Received data:', projectData);
    let projects = [];
    try {
        const data = fs.readFileSync('projects.json', 'utf8');
        projects = JSON.parse(data);
    } catch (err) {

    }
    projects.push(projectData);
    fs.writeFileSync('projects.json', JSON.stringify(projects, null, 2), 'utf8');

    res.json({ message: 'Form data submitted successfully!' });
});


//SIgn up 
app.post('/register', (req, res) => {
    const projectData = req.body;
    console.log('Received data:', projectData);
    let projects = [];
    try {
        const data = fs.readFileSync('users.json', 'utf8');
        projects = JSON.parse(data);
    } catch (err) {
        // If the file doesn't exist or is empty, do nothing
    }
    projects.users.push(projectData);
    fs.writeFileSync('users.json', JSON.stringify(projects, null, 2), 'utf8');

    res.json({ message: 'Form data submitted successfully!' });
});

//login
app.post('/login', (req, res) => {
    const { email, password } = req.body; // Assuming the email and password are provided in the request body

    try {
        const usersData = JSON.parse(fs.readFileSync('users.json', 'utf8'));
        const user = usersData.users.find((user) => user.email === email && user.password === password);

        console.log(user);
        if (user) {
            res.json({ message: "Login successful" });
        } else {
            // User not found, login failed
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        console.error('Error reading users.json:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
