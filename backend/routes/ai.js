import express from "express";
import { processAIRequest } from "../services/aiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { action, text } = req.body;

    // Basic validation
    if (!action || !text) {
      return res.status(400).json({
        success: false,
        message: "Action and text are required.",
      });
    }

    const result = await processAIRequest({
      action,
      text,
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("AI Route Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while processing your request.",
    });
  }
});

export default router;
