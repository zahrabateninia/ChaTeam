import express from "express";
import {
  getAllContacts,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller";

const router = express.Router();
router.get("/contacts", protectedRoute, getAllContacts);
router.get("/chats", protectedRoute, getChatPartners); // ppl you've chatted with
router.get("/:id", protectedRoute, getMessagesByUserId); // all the messages between u and a chosen user
router.post("/send/:id", protectedRoute, sendMessage);

export default router;
