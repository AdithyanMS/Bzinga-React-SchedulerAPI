import axios from "axios"
import React, { useState } from "react";

const Schedule = () => {
  const FormData = require('form-data');
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState(parseInt(1));
  const [output, setOutput] = useState("");

  const uploadUrl = "http://localhost:8080/schedule/inputCSV"
  const scheduleUrl = "http://localhost:8080/schedule/generate"
  const downloadUrl = "http://localhost:8080/schedule/receiveCSV"

  const uploadFn = (e) => {
    e.preventDefault();
    console.log("Inside uploadFn")

    var formData = new FormData();
    formData.append("photo", selectedFile,selectedFile.name);
    console.log("name: ",selectedFile.name)

    axios.post(uploadUrl,formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) =>{
        console.log(res)
    },error =>{
        console.log("error: ",error)
    })
}

    const scheduleBtn = (e) =>{
        e.preventDefault();
        console.log("Inside scheduleBtn")
        axios.get(`${scheduleUrl}/${name}`).then((res) =>{
            console.log(res)
        },error =>{
            console.log("error: ",error)
        })

    }
    // const downloadBtn = (e) =>{
    //     e.preventDefault();
    //     console.log("Inside downloadBtn")
    //     axios.get(`${downloadUrl}/${output}`).then((res) =>{
    //         console.log(res)
    //     },error =>{
    //         console.log("error: ",error)
    //     })

    // }
    const downloadBtn = (e) =>{
        e.preventDefault();
        console.log("Inside downloadBtn")
        window.open(`${downloadUrl}/${output}`,'_blank')

    }
    return (
        <div>
            <h2>Scheduler</h2>
            <label>
                Upload CSV:
                <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                />
            </label>
            <button onClick={uploadFn}>Upload File</button>
            <br></br>
            <br></br>
            <label>
                Bid Type:
            </label>
            <select
            onChange={(e) => setName(parseInt(e.target.value))}>
                
            <option selected value={1}>Spot Bids</option>
            <option value={2}>Hourly Bids</option>
            <option value={3}>Twelve Hour Bids</option>
            <option value={4}>Twentyfour Hour Bids</option>
            <option value={5}>Elite Bids</option>

            </select>
            <button onClick={scheduleBtn}>Schedule</button>
            <br></br>
            <br></br>
            <label>
                Enter the name of output file:
                <input type="text" value={output} onChange={(e)=>setOutput(e.target.value)}></input>
            </label>
            <button onClick={downloadBtn}>Download CSV</button>
        </div>
    );
}

export default Schedule;