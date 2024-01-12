import user from "~/server/models/user";


const useUser_staff = () => {
    // Function to generate a random 5-digit number
    const genRand_digit = () => {
      const min = 10000; // Minimum 5-digit number
      const max = 99999; // Maximum 5-digit number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

// fetching all the users
 const fetching_all_users =async ()=>{
  
   try {
      
    let users = await user.find();

    return {
      result : true,
      values:users
    }
     
   }catch(err){
    return{
       result : false,
        values:err
    }
   }
 
 }

  
    return {
      genRand_digit,
      fetching_all_users
    };
  };
  
  export default useUser_staff;
  