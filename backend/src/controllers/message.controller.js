import Message from "../modals/Message.js";
import User from "../modals/User.js";

export const getAllContacts = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getAllContacts controller", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMessagesByUserId = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: userToChatId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiver: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessagesByUserId controller", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user.id;
    const { text, image } = req.body;

    let imageUrl;
    if (image) {
      // todo
      // store the image in the cloud
      // and get the secure url and assign it to the imageUrl
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save(); // save it to the db

    res.status(201).json(newMessage); // 201: sth created successfully
    // todo: send message in real-time if user is online - socket.it
  } catch (error) {
    console.log("Error in sendMessage controller", error);
    res.status(500).json({ message: "Server error" });
  }
};
