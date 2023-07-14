import mongoose from "mongoose";

mongoose.connect("mongodb+srv://brunovinicius082005:brunoCapita082005@cluster0.mieni6u.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection

export default db