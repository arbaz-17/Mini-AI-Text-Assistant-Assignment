import express from "express";
import { processAIRequest } from "../services/aiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { action, text, model } = req.body;

    // Basic validation
    if (!action || !text || !model) {
      return res.status(400).json({
        success: false,
        message: "Action, model and text are required.",
      });
    }

    const result = await processAIRequest({
      action,
      text,
      model,
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("AI Route Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to generate a response. Please try again or choose a different AI model.",
    });
  }
});

export default router;
