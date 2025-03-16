const express = require('express');
const cors = require('cors'); // Add CORS support
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// POST route for /calculateGpa
app.post('/calculateGpa', (req, res) => {
    const subjectData = req.body; // Array of subjects with credits and grades
    console.log('Received data:', subjectData);

    // Perform GPA calculation logic here
    let totalCredits = 0;
    let totalGradePoints = 0;

    subjectData.forEach(subject => {
        const credit = parseFloat(subject.credit);
        const grade = subject.grade;

        // Convert grade to grade points (example logic)
        const gradePoints = {
            'O': 10,
            'A+': 9,
            'A': 8,
            'B+': 7,
            'B': 6,
            'C': 5,
            'U': 0
        }[grade] || 0;

        totalCredits += credit;
        totalGradePoints += credit * gradePoints;
    });

    const gpa = totalGradePoints / totalCredits;
    res.json(gpa.toFixed(2)); // Send the calculated GPA back
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});