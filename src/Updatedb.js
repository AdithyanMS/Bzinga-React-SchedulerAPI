import axios from "axios"
import React, { useState } from "react";

const Updatedb = () => {
  const [name, setName] = useState(parseInt(1));
  const [cnt, setCount] = useState(parseInt(10));
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duratn, setDuration] = useState(parseInt(15));
  const [intervl, setInterval] = useState(parseInt(15));

  const updateUrl = "http://localhost:8080/schedule/dbUpdate"
  const sendUpdate = (e) => {
      e.preventDefault();
      console.log(name,cnt,startTime,endTime,duratn,intervl)
      axios.post(updateUrl,{
        id:name,
        count:cnt,
        startime:startTime,
        duration:duratn,
        interval:intervl,
        endtime:endTime,
      }).then((res) =>{
          console.log(res)
      },error =>{
          console.log("error: ",error)
      })
  }
  return (
    <div className="Updatedb">
        <h2>Update DB</h2>
        <form>
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
            {/* <input
            type="text"
            placeholder="spot"
            value={name}
            onChange={(e) => setName(e.target.value)}
            /> */}
            <br></br>
            <br></br>
            <label>
                Items in a set:
            </label>
            <input
            type="number"
            placeholder="10"
            value={cnt}
            onChange={(e) => setCount(parseInt(e.target.value))}
            />
            <br></br>
            <br></br>
            <label>
                Start Time:
            </label>
            <input
            type="text"
            placeholder="2022-04-01 09:00:00"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            />
            <br></br>
            <br></br>
            <label>
                End Time:
            </label>
            <input
            type="text"
            placeholder="2022-04-10 09:00:00"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            />
            <br></br>
            <br></br>
            <label>
                Duration in minutes:
            </label>
            <input
            type="number"
            placeholder="15"
            value={duratn}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            />
            <br></br>
            <br></br>
            <label>
                Interval in minutes:
            </label>
            <input
            type="number"
            placeholder="15"
            value={intervl}
            onChange={(e) => setInterval(parseInt(e.target.value))}
            />
            <br></br>
            <br></br>
            <button onClick={sendUpdate}>Submit</button>
        </form>
    </div>
  );
};

export default Updatedb;
