import {User} from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async(req,res) =>{
    const {name,email,password} = req.body;
    try {
    if(!name || !email || !password){
        return res.status(400).json({message: 'All fields are required'});
    }
    const alreadyExists = await User.findOne({email});
    if(alreadyExists){
        return res.status(409).json({message: 'Email already registered'});
    }
    
    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    });
    res.status(201).json({
        message: 'User registered successfully',
        token: jwt.sign({userId: newUser._id}, process.env.JWT_SECRET || 'secret_key')
    
    });
    } catch(error){
        console.error('Registration error:', error);
        res.status(500).json({message: 'Server error'});
    }
}

export const login = async(req,res) =>{
    const {email,password} = req.body;

    try{

        if(!email || !password){
            return res.status(400).json({
                message: 'Email and password are required'
            });
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        res.status(200).json({
            message: 'Login successful',
            token: jwt.sign(
                {userId: user._id},
                process.env.JWT_SECRET || 'secret_key'
            )
        });

    }catch(error){

        console.error('Login error:', error);

        res.status(500).json({
            message: 'Server error'
        });
    }
}