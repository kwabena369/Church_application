import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// Define an interface for the user model
interface User_there {
  userpassword: string;
  firstname: string;
  lastname: string;
  _id: number;
  userProfile: string;
  token: string | null;
}
//   for the other side we do not have t
import user_here from '~/server/models/user';

export default defineEventHandler(async (event) => {
  try {
    const isthere_one = await readBody(event);
    // Find the user by email
    const user: User_there | null = 
    await user_here.findOne({ useremail: isthere_one.useremail });

    if (user) {
      // console.log(user)
      // Compare the provided password with the stored hashed password
      const isPasswordValid = 
      await bcrypt.compare(isthere_one.userpassword, user.userpassword);

      //  console.log(isPasswordValid)
      if (isPasswordValid) {
        // Generate a JWT token for the user
        const id_payload = {
          id: user._id,
        };
         
        const env_thing = useRuntimeConfig();
        const token_now: string = jwt.sign(id_payload,
           env_thing.my_screct || 'default_secret',
            { expiresIn: '4h' });
        user.token = token_now;

        return {
          result: true,
          id: user._id,
          userProfile: user.userProfile,
          firstname: user.firstname,
          lastname: user.lastname,
          token: user.token,
          message: 'sweer_home',

        };
      } else {
        return {
          result: false,
          message: 'Password_Not',
        };
      }
    } else {
      return {
        result: false,
        message: 'Not_User',
      };
    }
  } catch (err) {
    console.error(err);
    return {
      result: false,
      message: 'Password_Not',

    }
  }
});
