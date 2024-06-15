import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './officerdashboard.css'




function DIGdashboard() {
    const [userdataDIG,setuserdataDIG]=useState([]);

    useEffect(()=>{
        featchusers();
    },[])

    const featchusers=async()=>{
       try{
        const Accesstoken=localStorage.getItem('Accesstoken');
        const config={
            headers:{
                Authorization:` ${Accesstoken}`
            }
        }
        const {data}=await axios.get('http://localhost:5006/DIG/getAll',config);
        setuserdataDIG(data.data);
        console.log(data.data);


       }catch(error){
        console.log(error)

       }
    }
    const formatDate=()=>{
        const date=new Date();
        return date.toLocaleDateString('en-GB')

    }
    
    
    

    return (
        <div className="usertable">
            <table class="table table-striped">
                <thead class="data">
                    <tr>
                        <th scope="col">District</th>
                        <th scope="col">Application Number</th>
                        <th scope="col">Renewal Type</th>
                        <th scope="col">EnrollmentNumber</th>
                        <th scope="col">Application Date</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {userdataDIG.map((userdataDIG)=>(
                        <tr>
                            <td>{userdataDIG.officeAddress.district}</td>
                            <td>{userdataDIG.applicationId}</td>
                            <td>{userdataDIG.TypeofRenewal}</td>
                            <td>{userdataDIG.enrollmentNumber}</td>
                            <td>{formatDate(userdataDIG.createdAt)}</td>
                            <td>
                                {userdataDIG.DIGcomments && userdataDIG.DIGcomments !==''?'Forwarded to IG':(
                                    <Link to={`/userdataDIG/${userdataDIG._id}`}>TakeAction</Link>
                                )}
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

           
        </div>
    )

}
export default DIGdashboard;