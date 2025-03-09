import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4eHZld292YWtzeHZtdGxpeW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MzgyNjgsImV4cCI6MjA1NjIxNDI2OH0.JxZKq-H7XZ5asob-Bl2zIKBDbwpNh-Tdq7IlNb_oO3E`

const url = "https://gxxvewovaksxvmtliymv.supabase.co"

export default function uploadMediaToSupabase(file) {
    return new Promise((resolve, reject) => {
        if(file ==null){
            reject("file not added");
        }
        let fileName = file.name;
        const extension = fileName.split(".")[fileName.split(".").length - 1];
        if(extension != "jpg"&& extension != "png" ){
            reject("Please select an image file");
        }
        const supabase = createClient(url, key);
        const timestamp = new Date().getTime()
        fileName = timestamp + file.name + "." + extension
        supabase.storage.from("images").upload(fileName, file, 
            {
            cacheControl: "3600",    
            upsert: false,
        }).then((res)=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
        }).catch((err)=>{
            reject(err)
        })
    })

}


    