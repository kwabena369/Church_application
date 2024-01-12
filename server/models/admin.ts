import mongoose from 'mongoose';
import bcrypt from 'mongoose-bcrypt';

// DB for the addmin
 
const Adminschema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  useremail: {
    type: String,
    required: true
  },
  userpassword: {
    type: String,
    required: true,
    bcrypt: true
  }, 
  userProfile: {
    type: String,
    default: 'default.jpg'
  },
//    for the special keyword
 Special_Code:{
     type:Number,
     default:null
 },
//   here is a kind of admin
 Kind_Admin:{
     type:String,
     default:"Minor"
 }
}, {
  timestamps: true,
  strict: true,
  strictQuery: true
});

Adminschema.plugin(bcrypt);

export default mongoose.models.Adminschema || mongoose.model('Admin', Adminschema);
