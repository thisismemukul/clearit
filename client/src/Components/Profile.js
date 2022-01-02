import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState();
  
    useEffect(() => {
        const callProfilePage =async ()=>{
            // try {
                const res =await fetch('/profile',{
                    method:"GET",
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json",
                    },
                    credentials:"include"
                });
                const data = await res.json();
                console.log("profile"+data);
                if(!res.status === 200){
                    const error = new Error(res.error);
                    throw error;
                }
            // } catch (err) {
            //     console.log(err);
            //     navigate('/login');
            // }
        }
        callProfilePage();
        if(localStorage.getItem("jwtoken")==undefined){
            navigate('/login');
        }
    }, []);
    return (
        <>
            <h1>profile</h1>
        </>
    )
}

export default Profile;
