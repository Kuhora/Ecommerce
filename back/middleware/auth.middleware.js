import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const protectRoute = async (req, res, next) => {
    try{
        const acessToken = req.cookies.acessToken;

        if(!acessToken){
            return res.status(401).json({ message: "Unauthorized - No acess no token provided"});
        }

        try{
            const decoded = jwt.verify(acessToken, process.env.ACESS_TOKEN_SECRET);
            const user = await User.findById(decoded.userId).select("-password");

            if(!user) {
            return res.status(401).json({ message: "User not found"});
        }
        req.user = user;

        next();
        } catch(error){
            if(error.name === "TokenExpiredError"){
                return res.status(401).json({ message: "Token expired"})
            }
            throw error;
        }
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        return res.status(401).json({ message: "Unauthorized - invalid acess token"});
    }
}


export const adminRoute = (req, res, next) => {
    if(req.user && req.user.role === "admin"){
        next()
    } else {
        return res.status(403).json({message: "Acess denied - Admin only"});
    }
}