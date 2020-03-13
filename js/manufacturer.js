 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDZ0Sq38TolDW0DQiTq1McC4vFykqHsL7o",
    authDomain: "new-major.firebaseapp.com",
    databaseURL: "https://new-major.firebaseio.com",
    projectId: "new-major",
    storageBucket: "new-major.appspot.com",
    messagingSenderId: "322192400420",
    appId: "1:322192400420:web:1eba47ae747093d43578b1",
    measurementId: "G-X3SSPN42BL"
  };

  firebase.initializeApp(firebaseConfig);

  var db=firebase.firestore();

//   const submitBtn=document.querySelector("#submit");
  
//   var typewaste1=document.querySelector("#gridRadios1");
//   let typewaste2=document.querySelector("#gridRadios2");
//   let typewaste3=document.querySelector("#gridRadios3");
//   let typewaste4=document.querySelector("#gridRadios4");
//   let typewaste5=document.querySelector("#gridRadios5");
//   let typewaste6=document.querySelector("#gridRadios6");
//   let typewaste7=document.querySelector("#gridRadios7");
//   let typewaste8=document.querySelector("#gridRadios8");

  function saveData() {
      
  var amount=document.getElementById("#amount").value;
  
   var nature=document.getElementById("#nature").value;
  
  var otherdetails=document.getElementById("#otherdetails").value;

db.collection("componentData").doc("formdata").set({
    amount:amount,
    nature:nature,
    otherdetails:otherdetails
}).then(function(){
    console.log("data saved");
}).catch(function(error){
    console.error("error",error);

});
  }

//   const db=firestore.collection("formdata");

//   submitBtn.addEventListener('click',function(){
//     let typewaste1Input=typewaste1.value;
//     let typewaste2Input=typewaste2.value;
//     let typewaste3Input=typewaste3.value;
//     let typewaste4Input=typewaste4.value;
//     let typewaste5Input=typewaste5.value;
//     let typewaste6Input=typewaste6.value;
//     let typewaste7Input=typewaste7.value;
//     let typewaste8Input=typewaste8.value;
    
    
//     let amountInput=amount.value;
    
//     let natureInput=nature.value;
    
//     let otherdetailsInput=otherdetails.value;
  
//     // access database
//     db.doc().set({
//         typewaste1:typewaste1Input,
//         typewaste2:typewaste2Input,
//         typewaste3:typewaste3Input,
//         typewaste4:typewaste4Input,
//         typewaste5:typewaste5Input,
//         typewaste6:typewaste6Input,
//         typewaste7:typewaste7Input,
//         typewaste8:typewaste8Input,
//         amount:amountInput,
//         nature:natureInput,
//         otherdetails:otherdetailsInput
//     }).then(function(){
//         console.log("data saved");
//     }).catch(function(error){
//         console.log("error");
        
//     });
//   });


