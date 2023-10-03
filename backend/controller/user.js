import ErrorHandler from "../utils/errorHandler.js";
import User from "../model/User.js";
import path from "path";
import jwt from "jsonwebtoken";
import sendMail from "../utils/sendMail.js";
import sendToken from "../utils/jwtToken.js";

// register user
const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }
    const fileName = req.file.filename;
    const fileUrl = path.join(fileName.split(" ").join(""));

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };
    const activationToken = createActivationToken(user);
    const activationUrl = `http://localhost:3000/activation/${activationToken}`;

    try {
      await sendMail({
        email: user.email,
        subject: "Activate your account",
        text: `Hello ${user.name}, please activate your account by clicking on this link: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `Please check your email:-${user.email} to activate your account`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};

//create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_TOKEN, { expiresIn: "5m" });
};

// activate user
const activateUser = async (req, res, next) => {
  try {
    const { activationToken } = req.body;
    const newUser = jwt.verify(activationToken, process.env.ACTIVATION_TOKEN);
    if (!newUser) {
      return next(new ErrorHandler("Invalid token", 400));
    }
    let user = await User.findOne({ email: newUser.email });
    if (user) {
      return next(new ErrorHandler("User alredy exists", 400));
    }
    const { name, email, password, avatar } = newUser;
    user = await User.create({ name, email, password, avatar });
    sendToken(user, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

// login user
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("User does not exist.", 400));
    }
    const passMatch = await user.comparePassword(password);
    if (!passMatch) {
      return next(new ErrorHandler("Wrong password", 400));
    }
    sendToken(user, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

//get user
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(new ErrorHandler("User doesn't exists", 400));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export { register, activateUser, login, getUser };
