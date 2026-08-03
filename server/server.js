const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const multer = require("multer");

// const { GoogleGenAI } = require("@google/genai");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const jobsRoute = require("./routes/job");
const axios = require("axios");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// =============================
// Gemini Configuration
// =============================
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// =============================
// Multer Configuration
// =============================
const upload = multer({
  dest: "uploads/",
});

// =============================
// Swagger Configuration
// =============================
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HourHire API",
      version: "1.0.0",
      description: "AI Powered Job Portal APIs",
    },
     servers: [
      {
        url: process.env.VERCEL_URL 
          ? `https://${process.env.VERCEL_URL}` 
          : "http://localhost:5000",
      },
    ],
  },
  apis: ["./server.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// =============================
// Routes
// =============================
app.use("/api/jobs", jobsRoute);

/**
 * @swagger
 * /api/find-jobs:
 *   post:
 *     summary: Upload Resume
 *     tags:
 *       - Jobs
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Resume uploaded successfully
 */
app.post("/api/find-jobs", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required.",
      });
    }

    // Read uploaded file
    const pdf = require("pdf-parse");
    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdf(dataBuffer);

    const prompt = `
      You are an expert technical recruiter.

      Analyze the following resume and return ONLY valid JSON.

      Resume:
      ${pdfData.text}

      Return JSON in this exact format:

      {
        "name": "",
        "role": "",
        "experience": "",
        "location": "",
        "skills": [],
        "searchQuery": "",
        "seniority": "",
        "resumeScore": 0,
        "strengths": [],
        "weaknesses": [],
        "missingSkills": [],
        "recommendations": []
      }

      Rules:
      - Return only JSON.
      - Do not wrap in markdown.
      - Do not explain anything.
      `;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0,
    });
    const aiText = response.choices[0].message.content;
    const candidate = JSON.parse(
      aiText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
    );

    const jobsResponse = await axios.get(
      "https://jsearch.p.rapidapi.com/search-v2",
      {
        params: {
          query: 'Full Stack AI Engineer India',
          page: "4",
          num_pages: "1",
          country: "in",
          date_posted: '3days'
        },
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'x-rapidapi-host': 'jsearch.p.rapidapi.com',
          'Content-Type': 'application/json'
        }
      }
    );
    const jobs = jobsResponse.data.data.jobs;

    const matchPrompt = `
      You are an expert technical recruiter.

      Candidate Profile:
      ${JSON.stringify(candidate)}

      Jobs:
      ${JSON.stringify(
      jobs.map((job, index) => ({
        id: index + 1,
        title: job.job_title,
        company: job.employer_name,
        description: job.job_description?.slice(0, 1500),
        location: job.job_city,
        employmentType: job.job_employment_type,
      }))
    )}

      Compare the candidate with each job.

      Return ONLY valid JSON in this format:

      [
        {
          "id": 1,
          "matchScore": 95,
          "reason": "Excellent React and TypeScript match",
          "missingSkills": ["Docker"]
        }
      ]

      Rules:
      - matchScore must be between 0 and 100.
      - Return one object for every job.
      - Do not explain anything.
      - Return only JSON.
      `;

    const matchResponse = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: matchPrompt,
        },
      ],
      temperature: 0,
    });
    const cleanResponse = matchResponse.choices[0].message.content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const matchedJobs = JSON.parse(cleanResponse);

    const finalJobs = jobs.map((job, index) => {
      const match = matchedJobs.find((m) => m.id === index + 1);

      return {
        ...job,
        matchScore: match?.matchScore || 0,
        reason: match?.reason || "",
        missingSkills: match?.missingSkills || [],
      };
    });
    finalJobs.sort((a, b) => b.matchScore - a.matchScore);

    res.json({
      success: true,
      candidate,
      jobs: finalJobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =============================
// Test Gemini
// =============================
app.get("/api/test-ai", async (req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Say Hello from Gemini API",
    });

    res.json({
      success: true,
      response: response.text,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =============================
// Start Server
// =============================
if (require.main === module) {
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📄 Swagger Docs: http://localhost:${PORT}/api-docs`);
});
}
module.exports = app;