import React,{useEffect, useState} from 'react'
import { UserModel } from './models/typeOne';
import { UserService } from './services/UserService';

function ParentSix() {
    const [data, setData]= useState<UserModel []>([]);

    useEffect(()=>{
        const users= UserService.getAllUsers();
        setData(users);
    },[])
  return (
      <>
          <div>Class and Services</div>
          {
              data.length>0 ?(
                     data.map((item, index)=>(
                        <ul key={index}>
                            <li>Name:{item.name}</li>
                            <li>Contact:{item.contact}</li>
                            <li>Age:{item.age}</li>
                        </ul>
                    ))
                
              ) : (
                  <div> No Data Available </div>
              )
          }
          
      </>
  )
}

export default ParentSix