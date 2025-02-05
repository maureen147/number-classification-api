import { classifyNumber } from "../utils/classifyNumber.js";
import express from "express";

const router = express.Router();

const classifyNumberController = async (req, res) => {
    const { number } = req.query;
    const num = Number(number);

    if (!number) {
        return res.status(400).json({ error: true, number: "" });
    }
    if (isNaN(num)) {
        return res.status(400).json({ number, error: true });
    }

    try {
        const result = await classifyNumber(num);
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: true, message: error.message || "Internal Server Error" });
    }
};
router.get("/classify-number", classifyNumberController)

export default router;
