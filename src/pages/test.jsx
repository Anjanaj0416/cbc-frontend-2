import { createClient } from "@supabase/supabase-js";
import { useState } from "react"
import toast from "react-hot-toast";
import uploadMediaToSupabase from "../mediaUpload";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4eHZld292YWtzeHZtdGxpeW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MzgyNjgsImV4cCI6MjA1NjIxNDI2OH0.JxZKq-H7XZ5asob-Bl2zIKBDbwpNh-Tdq7IlNb_oO3E`

const url = "https://gxxvewovaksxvmtliymv.supabase.co"



export default function FileUploadTest(){
    async function handleUpload(){
        uploadMediaToSupabase(file).then((res) => {
            console.log(url)
        }).catch((err) => {
            console.log(err)
        })
    }


    const[file, setFile] = useState(null);
    return(
        <div>
            <h1>File Upload Test</h1>
            <input type="file" onChange={(e) =>(
                setFile(e.target.files[0])
            )}></input>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}