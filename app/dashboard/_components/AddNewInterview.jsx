// "use client";
// import React from "react";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
// import { chatSession } from "@/utils/GeminiAIModal";
// import { LoaderCircle } from "lucide-react";
// import { MockInterview } from "@/utils/schema";
// import { v4 as uuidv4 } from "uuid";
// import { db } from "@/utils/db";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";
// import { useRouter } from "next/navigation";




// function AddNewInterview() {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [jobPosition, setJobPosition] = useState("");
//   const [jobDesc, setJobDesc] = useState("");
//   const [jobExperience, setJobExperience] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [jsonResponse, setJsonResponse] = useState([]);
//   const user = useUser();
//   const router = useRouter();

//   const onSubmit =async (e) => {
//     setLoading(true);
//     e.preventDefault();
    
//     console.log(jobPosition, jobDesc, jobExperience);
  
//     const InputPrompt="Job Postion: "+jobPosition+", Job Description: "+jobDesc+", Year of Experience: "+jobExperience+", Depends on this information please give me "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTIONS_COUNT+" interview question with Answer in Json Format, Give Question and Answer as fiel in JSON"
  
//     const result=await chatSession.sendMessage(InputPrompt);
//     const MockJsonResp=(result.response.text()).replace('```json','').replace('```','');
//     console.log(JSON.parse(MockJsonResp));
//     setJsonResponse(MockJsonResp);


//     if(MockJsonResp)
//     {
//     const resp=await db.insert(MockInterview)
//     .values({
//         mockId:uuidv4(),
//         jsonMockResp:MockJsonResp,
//         jobPosition:jobPosition,
//         jobDesc:jobDesc,
//         jobExperience:jobExperience,
//         createdBy:user?.primaryEmailAddress?.emailAddress,
//         createdAt:moment().format("YYYY-MM-DD HH:mm:ss")
//     }).returning({mockId:MockInterview.mockId});

//     console.log("Inserted ID:",resp);
//     }
//     else{
//     console.log("Error in generating question");
//     }
    

//     setLoading(false);

//   }
 

//   return (
//     <div>
//       <div
//         className="p-10 border rounded-lg bg-secondary
//       hover:scale-105 hover:shadow-md cursor-pointer transition-all"
//       onClick={() => setOpenDialog(true)}
//       >
//         <h2 className="font-bold text-lg text-center">+ Add New</h2>
//       </div>
//       <Dialog open={openDialog} >
        
//         <DialogContent className="max=w-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-2xl">Tell us more about your job interview</DialogTitle>
//             <DialogDescription>
//               <form onSubmit={onSubmit}>
//               <div>
//                   <h2>Add Details about your job position and job description and Experience</h2>
                  
//                   <div className="mt-7 my-3">
//                     <label>Job Role/Job Position</label>
//                     <Input placeholder="Ex : Full Stack Developer" required
//                     onChange={(event) => setJobPosition(event.target.value)}
//                     />
//                   </div>
//                   <div className="my-3">
//                     <label>Job Discription/ Tech Stack</label>
//                     <Textarea placeholder="Ex : React Angulat Nodejs etc." required
//                     onChange={(event) => setJobDesc(event.target.value)}
//                     />
//                   </div>
//                   <div className="my-3">
//                     <label>Years of Experince</label>
//                     <Input placeholder="5" type="number" required max="30" 
//                     onChange={(event) => setJobExperience(event.target.value)}
//                     />
//                   </div>

//               </div>
//               <div className="flex gap-5 justify-end">
//                 <Button type="button" variant="ghost" onClick={()=>setOpenDialog(false)} >cancel</Button>
//                 <Button type="submit" disabled={loading}>
//                 {loading?
//                   <>
//                   <LoaderCircle className="animate-spin"/>'generating question'
//                 </>:'start interview'
//                 }
//                 </Button>
//               </div>
//               </form>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default AddNewInterview;





"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Please sign in to continue.</div>;
  }

  if (!user?.primaryEmailAddress?.emailAddress) {
    return (
      <div className="p-10 border rounded-lg bg-secondary">
        <h2 className="font-bold text-lg text-center">
          Please ensure your email address is available in your profile to continue.
        </h2>
      </div>
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const InputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Year of Experience: ${jobExperience}, Depends on this information please give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTIONS_COUNT} interview questions with answers in JSON format. Give question and answer as fields in JSON.`;

      const result = await chatSession.sendMessage(InputPrompt);
      const MockJsonResp = result.response.text().replace('```json', '').replace('```', '');
      console.log(JSON.parse(MockJsonResp));
      setJsonResponse(MockJsonResp);

      if (MockJsonResp) {
        const resp = await db.insert(MockInterview)
          .values({
            mockId: uuidv4(),
            jsonMockResp: MockJsonResp,
            jobPosition: jobPosition,
            jobDesc: jobDesc,
            jobExperience: jobExperience,
            createdBy: user.primaryEmailAddress.emailAddress,
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
          })
          .returning({ mockId: MockInterview.mockId });

        console.log("Inserted ID:", resp);
        setOpenDialog(false); // Close the dialog
        router.push('/dashboard/interview/'+resp[0]?.mockId)  


      } else {
        console.error("Error in generating questions.");
      }
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-bold text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Tell us more about your job interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>Add Details about your job position, job description, and experience</h2>
                  <div className="mt-7 my-3">
                    <label>Job Role/Job Position</label>
                    <Input
                      placeholder="Ex: Full Stack Developer"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                      disabled={loading}
                    />
                  </div>
                  <div className="my-3">
                    <label>Job Description/Tech Stack</label>
                    <Textarea
                      placeholder="Ex: React, Angular, Node.js, etc."
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                      disabled={loading}
                    />
                  </div>
                  <div className="my-3">
                    <label>Years of Experience</label>
                    <Input
                      placeholder="5"
                      type="number"
                      required
                      max="30"
                      onChange={(event) => setJobExperience(event.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)} disabled={loading}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" /> Generating questions...
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;