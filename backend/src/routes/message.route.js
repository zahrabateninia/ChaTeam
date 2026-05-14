import express from "express";
import { getAllContacts, getMessagesByUserId } from "../controllers/message.controller";

const router = express.Router();
router.get("/contacts", protectedRoute, getAllContacts);
// router.get("/chats", getChatPartners); // ppl you've chatted with
router.get("/:id", getMessagesByUserId); // all the messages between u and a chosen user
// router.post("/send/:id", sendMessage);

export default router;
