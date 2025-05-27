import cloudinary from "../lib/clodinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";


export const getUsersForSidebar =async(req, res) => {
    try {
        const loggedUserId = req.user?._id 
        const filteredUsers = await User.find({_id: {$ne: loggedUserId}}).select("-password")
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log('Error in getUsersForSidebar', error.message);
        res.status(500).json({message: 'Server Error'})
        
    }
}
export const getMessages = async(req, res) => {
    try{
        const {id: userToChatId} = req.params
        console.log(req.user);
        const myId = req.user._id
        const messages = await Message.find({
            $or: [
              {senderId: myId, receiverId: userToChatId},
              {senderId: userToChatId, receiverId: myId}
            ]
        })
        res.status(200).json(messages)
    }
    catch(error){
        console.log('error cought in get Messages function', error);
        res.status(500).json('Server Error')
    }
}
export const sendMessage = async(req, res) => {
    try {
        const {text, image} = req.body 
        const {id: receiverId} = req.params
        console.log('receiverId', receiverId);
        const senderId = req.user?._id 
       
        let imageURL ;
        if(image){
            // upload base64 image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageURL = uploadResponse.secure_url
            console.log('url of image', imageURL);

        }
        // after validation save new message from sender and receviver
        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image:imageURL
        })
        console.log(newMessage);
        await newMessage.save()
        // done: realtime functionality goes here by socket io
        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({message: "server Internal Error"})
    }
}