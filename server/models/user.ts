import mongoose from 'mongoose';
import bcrypt from 'mongoose-bcrypt';

const userSchema = new mongoose.Schema({
  
  firstname: {
    type: String,
    required: true
  },
 
  lastname: {
    type: String,
    required: true
  } ,
  useremail: {
    type: String,
    required: true
  },
  userpassword: {
    type: String,
    required: true,
    bcrypt: true
  }, 
  userphone: {
    type: Number,
  },
  
  userdate:{
    type:Date,
    require:true
  }
  ,

  userProfile: {
    type: String,
    default: 'default.jpg'
  }
}, {
  timestamps: true,
  strict: true,
  strictQuery: true
});

userSchema.plugin(bcrypt);

export default mongoose.models.User_Model || mongoose.model('User_Model', userSchema);
