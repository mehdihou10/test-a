"use client";


export default function Home() {

  async function sendEmail(){

    try{

      const res = await fetch("/api/send",{
        method: "POST",
        body: JSON.stringify({email: "mehdihouari429@gmail.com"})
      });

      if(res.ok){

        alert("Congrats!!")

      } else{

        alert("Something went wrong");
      }

    } catch(err){

      console.log(err);
    }

  }


  return (
    
   <button 
   onClick={sendEmail}
   className="grid place-items-center bg-red-500 w-[120px] h-[40px] text-white">Send Email</button>
  );
}
