import React, {useEffect, useState} from 'react'
import axios from 'axios'



export const Contact = () => {

    useEffect(()=>{
        getContacts()
    },[])
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState (false)

    const getContacts = async () => {
        try {
            const res = await axios.get ("https://randomuser.me/api/?results=12")
            setContacts(res.data.results) 
            console.log(res.data.results)
            setLoading(true)

        } catch (err) {
                alert(err.message);
        }
    }
  return (
    <div className='container mx-auto'>
        {loading && contacts.map((contac)=> (
            <div key={contac.login.uuid}>
                {contac.name.first}
                {contac.gender}
                {contac.login.username}
                <h1> age: {contac.registered.age} </h1>
                 </div>
        ))}
    </div>
  )
}
