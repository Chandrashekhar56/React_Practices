import { useState } from "react";

const data=[
  {id:1,name:"Shekhar",age:21,check:false},
  {id:2,name:"Sachin",age:22,check:false},
  {id:3,name:"Mukul",age:19,check:false},
]

export default function Practices() {
  const [userData,setUserData]=useState(data);
  const [userInputData, setUserInputData]=useState({
    id:"",
    name:"",
    age:""
  });

  const handleAddUserOnChange=(e)=>{
    const {name,value}=e.target;
    setUserInputData((prev)=>({
        ...prev,
    id:userData.length+1,
    [name]:value,
    }));
  }

  const handleAddUserSaveOnClick=()=>{
    setUserData((prev)=>([
      ...prev,
      {id:userInputData?.id,name:userInputData?.name,age:userInputData?.age,check:false}
    ]));
    
    setUserInputData({
      name:"",
      age:""
    });
  }

  const handleEditOnClick=(index)=>{
    const updatedList=[...userData];
    updatedList[index]={...updatedList[index], check:true};
    setUserData(updatedList);
  }


  const handleEditSaveOnClick=(index)=>{
    const updatedList=[...userData];
    updatedList[index]={...updatedList[index],check:false};
    setUserData(updatedList);
  }

  const handleEditOnChange=(e,index)=>{
    const{name,value}=e.target;
    const updatedList=[...userData];
    updatedList[index]={...updatedList[index],[name]:value};
    setUserData(updatedList);
  }

  const handleDeleteOnClick=(commingindex)=>{
    const updated=userData.filter((_item,index)=> index !== commingindex);
    setUserData(updated);
  }

  return (
    <div className="App">
      <div style={{display:'flex',gap:"10px"}}>
      <input placeholder="name " onChange={(e)=>handleAddUserOnChange(e)} value={userInputData.name} name="name"/>
      <input placeholder="age " onChange={(e)=>handleAddUserOnChange(e)} value={userInputData.age} name="age"/>
      <button onClick={handleAddUserSaveOnClick}>Save</button>
      </div>
      {userData.map((item,index)=>(
        !item.check ?
        <div key={item.id} style={{display:"flex",gap:'10px', marginTop:'10px'}}>
          <strong>{item.id}</strong>
          <strong>{item.name}</strong>
          <strong>{item.age}</strong>
          <button onClick={()=>handleEditOnClick(index)}>Edit</button>
          <button onClick={()=>handleDeleteOnClick(index)}>Delete</button>
        </div>
         :
         <div style={{display:"flex",gap:"10px", marginTop:"20px"}}>
              <strong>{item.id}</strong>
              <input placeholder="name" value={item?.name} name="name" onChange={(e)=>handleEditOnChange(e,index)}/>
              <input placeholder="age" value={item?.age} name="age" onChange={(e)=>handleEditOnChange(e,index)}/>
              <button onClick={()=>handleEditSaveOnClick(index)}>Save</button>
              <button onClick={()=>handleDeleteOnClick(index)}>Delete</button>
         </div>
      ))}
    </div>
  );
}
