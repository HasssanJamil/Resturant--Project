import mongoose from "mongoose";
import validator from "validator";
// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLenght: [3, "first name must contain at least 3 character"],
        mixLenght: [30, "first name exceed 30 character"]

    },
    lastName: {
        type: String,
        required: true,
        minLenght: [3, "first name must contain at least 3 character"],
        mixLenght: [30, "first name exceed 30 character"]

    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
      },
    phone:{
        type: String,
        required: true,
        minLenght: [13, "Phone number must contain only 11 digits"],
        mixLenght: [11, "Phone number must contain only 11 digits"]
    },
    time:{
        type: String,
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);