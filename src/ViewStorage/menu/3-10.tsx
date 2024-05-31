import React from "react";
import 'bsr-sau/dist/index.css'
import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";
import {CodeSnippetDotNet} from "../codeSnippetJavaScript";
/*-----------------------------------*/
const code = `

import React from 'react';
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'


function App() {

    const userData={
        name_file:'default_name.jpg',
        user_name:'ion100'
    }
    return (
        <div>
            <AvatarUploader
            
                style={{background:"#e5d7d7",padding:30}}
                
                styleCanvas={{background:"black"}}
                
                canvasSize={200}
                
                url={'/ContentApi/AvatarUpload'}
                
                serverError={(r) => {
                    alert("server\\n"+r)
                }}
                
                selectedFile={(file)=>{
                    if(file){
                        userData.name_file=file.name;
                    }
                    return true;
                }}
                
                clientError={(e) => {
                    alert("client\\n:" + e)
                }}
                
                callbackFormData={()=>{
                    return userData
                }}
                
                done={(dataFromServer)=>{
                    alert( "done: server response: "+dataFromServer)
                }}

            />

        </div>
    );
}

export default App;
`
/*-----------------------------------*/
export default function P3_10() {

    return (
        <>
            <p>1. Create project VS: <br/>
                template: Web-API ASP.NET Core, <br/>
                name of the solution in Linux specification format. <br/>
                <br/>
                2. Add project folder name: wwwroot. <br/>
                3. Add project folder name: my_app. <br/>
                4. Folder my_app - create solution React: npx create-react-app. <br/>
                5 Open folder my_app in WebStorm: npm install, npm install --save bsr-sau. <br/>
                6. File package.json add:"proxy": "http://localhost:5203" <br/>
                where http://localhost:5203 from file launchSettings.json VS solution.<br/>
                7. React folder solution add file: .env, content: BUILD_PATH='../wwwroot'<br/>
                The output files of the solution will be built in this folder, upon command: "build": "react-scripts
                build",<br/>
                8. VS Set up routing in the project:<br/>
                file: Program.cs<br/>
            </p>
            <div>
                <CodeSnippetDotNet code={`
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute( name: "default", pattern: "/");
});

app.Run();
                `}/>
                <p>Add controller:</p>
                <div>
                    <CodeSnippetDotNet code={`
[Route("/")]
public class ContentApiController : Controller
{
    class TempUserData
    {
        public string name_file { get; set; }
        public string user_name { get; set; }
    }


    [Route("/ContentApi/AvatarUpload")]
    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> ContentAvatarUpload()
    {
        TempUserData? userData;

        try
        {
            var dataF = this.Request.Form["data"];
            if (dataF.Count == 0) throw new Exception("require user data");

            var userDataJson = dataF[0];

            if (userDataJson == null) throw new Exception("user data empty");

            userData = JsonConvert.DeserializeObject<TempUserData>(userDataJson);

            if (userData == null) throw new Exception("User data json empty");

            var fileF = this.Request.Form["avatar"];

            if (fileF[0] != null)
            {
                var avatarPath = Path.Combine("avatars");
                if (Directory.Exists(avatarPath) == false)
                {
                    Directory.CreateDirectory(avatarPath);
                }

                var name = Path.Combine(avatarPath, userData.name_file);
                if (System.IO.File.Exists(name))
                {
                    System.IO.File.Delete(name);
                }

                await using var fs = new FileStream(name, FileMode.Create);
                await using var bw = new BinaryWriter(fs);

                var u = fileF[0]!.IndexOf(",", StringComparison.Ordinal);
                var ass = fileF[0]?.Substring(u + 1);
                var dataB = Convert.FromBase64String(ass);
                bw.Write(dataB);
            }
            else
            {
                throw new Exception("data file avatar - empty");
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return Ok(new { avatar = userData.name_file, text = "simpleText" });
    }
                    `}/>
                </div>
            </div>

            <p>React solution, change App file</p>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
            <p> <p>Run debug VS project, start React project.</p></p>
        </>
    )
}