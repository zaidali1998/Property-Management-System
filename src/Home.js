import React, { useState } from 'react';


export default function Home() {

    const [ addProperty, setAddProperty] = useState({
        propertyname:"",
        description:"",
        size:""
    });

    const [ propertyList, setPropertyList] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value= e.target.value;
        //console.log(name, value);

        setAddProperty({...addProperty, [name] : value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(addProperty.propertyname && addProperty.description && addProperty.size ){

            const newRecord = { ...addProperty, id : new Date().getTime().toString()};
            setPropertyList([...propertyList, newRecord]);
            setAddProperty({propertyname:"", description:"", size:""});

        } else {
            alert("please fill out all the fields")
        }
        
    };

    const deleteItems = (id) => {
       alert("are you sure you want to delete?");
       setPropertyList((oldItems)=>{
            return oldItems.filter((currElem)=>{
                return currElem.id !== id;
            })
        })
    };
    
    return (
        <>
        <div>
            <h1>Property Managment System</h1>
        </div>
        <div>
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label htmlFor="propertyname">Property Name</label>
                <input type="text" autoComplete="off" value={addProperty.propertyname} onChange={handleInput} name="propertyname" id="propertyname" placeholder="Add propertyname..."  />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea type="text" autoComplete="off" value={addProperty.description} onChange={handleInput} name="description" id="description" placeholder="Add description..." ></textarea>
            </div>
            <div>
                <label htmlFor="size">Size of Property</label>
                <input type="text" autoComplete="off" value={addProperty.size} onChange={handleInput} name="size" id="size" placeholder="Add size..."  />
            </div>            

        <button type="submit">Add Property</button>
        </form>
        <table className="table">
        <thead>
            <tr>
                <th>NAME</th>
                <th>DESCRIPTION</th>
                <th>SIZE</th>
                <th>Action</th>
            </tr>
        </thead> 
        <tbody>    
        { propertyList.map((val) => {
           return (
               <tr key={val.id}>
                   <td>{val.propertyname}</td>
                   <td>{val.description}</td>
                   <td>{val.size}</td>
                   <td>
                   <button onClick={()=>{deleteItems(val.id)}}>Delete</button>
                   </td>
               </tr>
           )
           })
           }
        </tbody>
        </table>
        </div>
        </>
    )
}
