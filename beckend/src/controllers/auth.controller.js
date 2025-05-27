import cloudinary from "../lib/clodinary.js";
import { generateToken } from "../lib/utilis.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
export const signup = async(req, res) =>{
    const {fullName, email, password} = req?.body
   try{
    if(!fullName || !email || !password) return res.status(403).json({message: 'Every Field Required '})
    // hash password
   if(password.length < 6){
    return res.status(403).json({message: 'Password must be at least 6 character'})
   }
   const user = await User.findOne({email})
   if(user) return res.status(401).json({message: 'Email already exists'})
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
        fullName,
        email,
        password: hashedPassword
    })
    if(newUser) {
        // generate token
        generateToken(newUser._id, res)
        await newUser.save()
        res.status(201).json({
          _id: newUser._id,
          email: newUser.fullName,
          profilePic: newUser.profilePic  
        })
    }
    else{
        res.status(400).json({message: 'Invalid user data'})
        res.status(500).json({message: 'Internal server error'})
    }
   }
   catch(error){
    console.log(error, 'error in the singup controller');
   }
}
export const login = async(req, res) => {
    // res.send('login route');
    const {email, password} = req?.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(403).json({message: 'Forbidden Access'})
        }
        // check password 
        const isPasswordCorrect = bcrypt.compare(password, user?.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message: 'Invalid Crediential'})
        }
       generateToken(user?._id, res);

       res.status(200).json({
        _id: user?._id,
        fullName: user?.fullName,
        email: user?.email,
        profilePic: user?.profilePic
       })
        
    }
     catch (error) {
        console.log('Login error in controller', error.message);
        res.status(500).json({message: 'Internal server Error'})
    }
}
export const logout = (req, res) => {
    // res.send('logout route');
    try {
        res.cookie("jwt", "", {
            maxAge: 0
        })
        res.status(200).json({message: 'Logout Successfully'})

    } catch (error) {
        console.log('Logout  in controller', error.message);
        res.status(500).json({message: 'Internal server Error'})
        
    }
}
// function for update profile picture
export const updateProfile = async(req, res) => {
    try {
        const {profilePic} = req.body
        console.log(profilePic);
        const userId= req.user._id 
        if(!profilePic){
            return res.status(400).json({message: 'profile pic is required'})
        }
        const uploadResponse = await cloudinary.uploader.upload(profilePic)
        const updatedUser = await User.findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new: true})
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log('Update profile error', error);
    }
}
// function for check user is available
export const checkAuth = (req, res) => {
    try {
        // console.log(req.user);
      res.status(200).json(req.user)  
        
    } catch (error) {
        console.log('error in check auth route', );
        res.status(500).json({message: 'Internal Server Error'})
    }
}