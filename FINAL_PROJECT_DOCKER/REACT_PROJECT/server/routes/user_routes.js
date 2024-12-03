import { Router } from "express";
import dotenv from 'dotenv';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { verifyToken } from "../Middleware/auth.js";


dotenv.config();
const userRoute = Router();
const secretkey=process.env.secretkey;


const userSchema = new mongoose.Schema({
    UserName: { type: String, unique: true },
    FirstName: String,
    LastName: String,
    Password: String,
    email: String,
    UserType: String
})
const User = mongoose.model('userdetails', userSchema);


const paymentSchema = new mongoose.Schema({
    Cardno: String,
    ExpiryDate: String,
    Cvv:String,
    UserName:String,
    Email: String,
    Phone: String,
    Date: String,
    Time: String,
    VehicleBrand: String,
    Address: String
})
const Payment = mongoose.model('paymentdetails', paymentSchema);



const bookingSchema = new mongoose.Schema({
    UserName: { type: String },
    Email: String,
    Phone: String,
    Date: String,
    Time: String,
    VehicleBrand: String,
    Address: String
    
})
export const Booking = mongoose.model('bookingdetails', bookingSchema)

const profileSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    UserName: { type: String },
    Phone: String,
    Email: String,
    Pincode: String,
    Address: String
})
const Profile = mongoose.model('profiledetails', profileSchema)

const messageSchema = new mongoose.Schema({
    UserName: { type: String },
    Email: String,
    Subject: String,
    Message: String
})
const Messagee = mongoose.model('messagedetails', messageSchema)




mongoose.connect('mongodb://mongodb:27017/BIKE-SERVICE-PROJECT')


userRoute.post('/signup', async (req, res) => {

    let UserType = '';

    try {
        const data = req.body;
        const { FirstName,
            LastName,
            UserName,
            Password,
            email
        } = data;
        const newP = await bcrypt.hash(Password, 10)
        const existingUser = await User.findOne({ UserName: UserName });
        const emptyUser = await User.find();
        console.log(emptyUser);


        if (emptyUser.length > 0) {
            UserType = 'user'
        } else {
            UserType = 'admin'
        }


        if (existingUser) {
            res.status(400).json({ message: "data already saved" })
        }
        else {
            const newUser = new User({
                FirstName: FirstName,
                LastName: LastName,
                UserName: UserName,
                UserType: UserType,
                Password: newP,
                email: email
            });
            console.log(newUser)
            //save user to mongodb
            await newUser.save();
            res.status(201).json({ message: "User registered succesfully" })
        }
    }
    catch (error) {
        res.status(500).json(error);
    }

})

userRoute.post('/login', async (req, res) => {
    const { UserName, Password } = req.body;
    // console.log(req.body)
    const result = await User.findOne({ UserName: UserName });
    // console.log(result.UserType);
    if (!result) {
        // console.log(result.UserType);

        console.log("User Not Found");
        return res.status(400).json({ error: "User not found" });
    }
    const isvalid = await bcrypt.compare(Password, result.Password);
    console.log(isvalid);
    if (!isvalid) {
        return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ UserName: UserName,UserType:result.UserType }, secretkey, { expiresIn: "1h" });
    console.log(result.UserName);


    console.log(token);
    // console.log(token.UserType);


    res.cookie("AuthToken", token, { httpOnly: true });
    res.json(result.UserType);
});

userRoute.get('/viewUser',  (req, res) => {
    try {
        const user = req.UserType;
        console.log("U",user)
        res.json({ user });
    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
})


userRoute.post('/Payment', async (req, res) => {
    const { Cardno,ExpiryDate, Cvv,UserName,Email,Phone,Date,Time,VehicleBrand,Address } = req.body
    {
        const newpayment = new Payment({
            Cardno: Cardno,
            ExpiryDate: ExpiryDate,
            Cvv:Cvv,
            UserName:UserName,
            Email: Email,
            Phone: Phone,
            Date: Date,
            Time: Time,
            VehicleBrand: VehicleBrand,
            Address: Address
        })
        await newpayment.save();
        res.status(200).json({ message: "payment Success" })
    }

});
// userRoute.post('/booking', async (req, res) => {
//     const payment = req.body;
//     const { UserName, Phone, Email, Location, VehicleBrand, Date, Time } = payment;
//     try{
//     const userexist = await User.findOne({ UserName: UserName })
//     console.log(userexist)

//     if (userexist) {
//         const existingBooking = await Booking.findOne({ Date, Time });
//         if (existingBooking) {
//             console.log("Service is already booked for this time slot.You Cant Book");
//             res.status(400).send("Service is already booked for this time slot.You Cant Book");
//             // console.log(existingBooking)
//         }
//         else {
//             const booking = new Booking({
//                 UserName: UserName,
//                 Phone: Phone,
//                 Email: Email,
//                 Location: Location,
//                 VehicleBrand: VehicleBrand,
//                 Date: Date,
//                 Time: Time
//             });
//             console.log(booking);

//             await booking.save();
//             res.status(200).json({ message: "Booked Successfully" })
//         }

//     }
//     else {


//         res.status(403).json("Information is not matching.Please Verify")
//         console.log("Information is not matching.Please Verify")
//     }
// }
// catch(error){
//     console.log(error)
// }

// });

userRoute.post('/booking', async (req, res) => {
    const payment = req.body;
    const { UserName, Phone, Email, Location, VehicleBrand, Date, Time } = payment;

    try {
        // Check if the user exists
        const userExist = await User.findOne({ UserName: UserName });
        console.log(userExist);

        if (userExist) {
            // Check if the time slot is already booked (across any user)
            const existingBooking = await Booking.findOne({ Date, Time });
            if (existingBooking) {
                console.log("Service is already booked for this time slot. You can't book.");
                res.status(400).send("Service is already booked for this time slot. You can't book.");
            } else {
                // Proceed with booking the service if the time slot is available
                const booking = new Booking({
                    UserName: UserName,
                    Phone: Phone,
                    Email: Email,
                    Location: Location,
                    VehicleBrand: VehicleBrand,
                    Date: Date,
                    Time: Time
                });

                console.log(booking);

                // Save the booking to the database
                await booking.save();
                res.status(200).json({ message: "Booked successfully" });
            }
        } else {
            // If user doesn't exist, return a 403 response
            res.status(403).json("Information is not matching. Please verify.");
            console.log("Information is not matching. Please verify.");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

userRoute.get('/viewpayment', async (req, res) => {
    try {
        const allpayments = await Payment.find();

        if (allpayments.length > 0) {
            console.log("All Payment and Booking Details :", allpayments);
            return res.json(allpayments); // Send services as JSON response
        } else {
            console.log("No Booking details available");
            return res.status(404).json({ message: "No Messages available" }); // Return a 404 response if no services are found
        }
    } catch (error) {
        console.error("Error fetching Messages:", error);
        return res.status(500).json({ message: "Error fetching Messages" }); // Handle error and send a 500 response
    }
});


            

      

userRoute.post('/profile', async (req, res) => {
    const payment = req.body;
    const { FirstName, LastName, UserName, Phone, Email, Pincode, Address } = payment;
    const exist = await User.findOne({ UserName })
    // console.log(exist)
    if (!exist) {
        res.send("You can create a account after signUp")
        console.log("You can create a account after signUp")
    }
    else {
        const profile = new Profile({
            FirstName: FirstName,
            LastName: LastName,
            UserName: UserName,
            Phone: Phone,
            Email: Email,
            Pincodete: Pincode,
            Address: Address
        })
        console.log(profile)
        await profile.save();
        res.status(200).json({ message: "Profile added successfully" })
    }
});
userRoute.patch('/updateprofile', async (req, res) => {
    const update = req.body;
    const { NewFirstName, NewLastName, UserName, NewPhone, NewEmail, NewPincode, NewAddress } = update;
    const exist = await User.findOne({ UserName: UserName })
    // console.log(exist);
    if (exist) {
        const updateprofile = await Profile.find({ UserName: UserName });
        if (updateprofile) {
            await Profile.updateOne({ UserName }, { UserName: UserName, FirstName: NewFirstName, LastName: NewLastName, Phone: NewPhone, Email: NewEmail, Pincode: NewPincode, Address: NewAddress })
            //  await updateprofile.save();
            res.status(200).json({ message: "Update Successfully" })

        }
        else {
            console.log("You cant update your profile.SignUP first");
            res.send("You cant update your profile.SignUp first");
        }
    }
    else {
        console.log("SignUp First");
        res.send("SignUp First")
    }
    //  console.log(exist) 

})
userRoute.post('/message', async (req, res) => {
    const usermessage = req.body;
    const { UserName, Email, Subject, Message } = usermessage;
    const exist = await User.findOne({ UserName })
    // console.log(exist)
    if (!exist) {
        res.send("You cant send message after signUp")
        console.log("You cant send message after signUp")
    }
    else {
        const messagedetails = new Messagee({
            UserName: UserName,
            Email: Email,
            Subject: Subject,
            Message: Message
        })
        console.log(messagedetails)
        await messagedetails.save();
        res.status(200).json({ message: "Successfully send message" })
    }
});


userRoute.get('/viewmessage', async (req, res) => {
    try {
        const allMessages = await Messagee.find({});

        if (allMessages.length > 0) {
            console.log("All Messages:", allMessages);
            return res.json(allMessages); // Send services as JSON response
        } else {
            console.log("No Messages available");
            return res.status(404).json({ message: "No Messages available" }); // Return a 404 response if no services are found
        }
    } catch (error) {
        console.error("Error fetching Messages:", error);
        return res.status(500).json({ message: "Error fetching Messages" }); // Handle error and send a 500 response
    }
});

userRoute.get('/viewuser', verifyToken, (req, res) => {
    try {
        const user = req.UserRole;
        console.log({ user });

        if (!user) {
            return res.status(404).json({ message: 'User role not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'User not authorized' });
    }
});

//admin view booking 

userRoute.get('/viewbooking', async (req, res) => {
    // const { UserName } = req.params; // Get the dishname from the URL parameter
    // const current = req.body;
    try {
        const fullbooking = await Booking.find({}); // Fetch all reservations
        if (fullbooking.length > 0) {

            res.status(200).json(fullbooking);
        } // Return all reservation data in JSON format
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving booking', error: error.message });
    }
});




userRoute.get('/logout', (req, res) => {
    res.clearCookie('AuthToken');
    res.send('logout successfully');
    console.log('logout successfully');
});
export { userRoute };