import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "../../api";
import { signUp } from "../../redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async (e) => {
    console.log("bhai");
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const response = await googleAuth({
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });
      console.log('bhai')
      console.log(response);
      if(response.status===200){
        dispatch(signUp(response.data));
        alert('You are authenticated Successfully')
        navigate('/');
      }else{
        console.log(response);
        alert('Some Error Occured Try Again!!');
      }
    } catch (error) {
      alert("Could not sigin with Google");
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 w-full mt-2 p-2 rounded-md text-lg text-white hover:opacity-95"
    >
      Continue With Google
    </button>
  );
};

export default OAuth;
