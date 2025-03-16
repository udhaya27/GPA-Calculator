const express = require('express');
const app = express();
app.use(express.json());

app.post('/calculateGpa', (req, res) => {
    const scores = req.body;
    // Perform GPA calculation logic here
    const gpa = calculateGPA(scores); // Replace with your logic
    res.json({ gpa });
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});