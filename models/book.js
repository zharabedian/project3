const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  serialNumber: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  history: { type: String, required: true },
  medications: { type: String, required: true },
  allergies: { type: String, required: true },
  eContactName: { type: String, required: true },
  eContactPhoneNumber: { type: String, required: true },
  eContactEmail: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
