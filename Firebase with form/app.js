import{auth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword,signOut,
  sendEmailVerification, signInWithPopup ,GoogleAuthProvider, } from "./firebase.js"

//__________ signup_______

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user", user);
    }
     else {
      console.log("user no exist");
    }

  });

 // _______Signup____


let signup = () => {
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   createUserWithEmailAndPassword(auth, email , password)
       .then((res) => {
          console.log("user",res.user);
           console.log("Successfully signup",user);  
       })
       .catch((error) => {
           
           console.log("Error",error.code);

       });
};

let SignupBtn = document.getElementById("SignupBtn");
SignupBtn.addEventListener("click",SignupBtn);

// __________Logout_______

let logout =() => {

    logout(auth)
     .then(() => {
    console.log("Logout successfuly");

      }) 
      .catch((error) => {
        
      });
      
 }
  
  let LogoutBtn = document.getElementById("LogoutBtn");
  LogoutBtn.addEventListener("click",LogoutBtn);



  // Email verification sent


let verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click",() => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
   console.log("Sent");
    
  });
});

// // // ________Login With Google_______



let loginWithGoogle = () => {
  signInWithPopup(auth, googleProvider).then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log("token",token)
    console.log("user",user)


  }).catch((error) => {
    const errorCode = error.code;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("errorCode",errorCode,credential);
    
   });

 };

let googleBtn = document.getElementById("googleBtn");

 googleBtn.addEventListener("Click".loginWithGoogle);
 




