import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/getDetails.module.css'


const GetDetails = () => {
    const [data, setdata] = useState([])
    const [reload, setreload] = useState(false)
    const [dialog, setdialog] = useState(false)
    const [idToBeAltered, setidToBeAltered] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const deleteUser = (id) => {
        // console.log(id)
        axios.delete(`http://localhost:3000/api/users/${id}`)
            .then((resp) => {
                console.log(resp)
                setreload(true)
            })
    }
    const fillInputboxes = (id) => {
        setdialog(true)
        setidToBeAltered(id)
        data.find((user) => {
            if (user._id === id) {
                setemail(user.email)
                setphone(user.phone)
                setname(user.name)
            }
        })
    }
    const updateUser = () => {
        axios.put(`http://localhost:3000/api/users/${idToBeAltered}`, { name, email, phone })
            .then((resp) => {
                console.log(resp)
                setreload(true)
                setdialog(false)
            })
    }
    useEffect(() => {
        axios.get('http://localhost:3000/api/users')
            .then((resp) => {
                setdata(resp.data.data)
                console.log(resp.data.data)
            })
        return setreload(false)
    }, [reload])
    return (
        <div className={dialog ? styles.tableBackgroundColor : ''}>
            <dialog open={dialog} style={{ width: "50%", backgroundColor: "#F4FFEF", border: "1px dotted black", marginLeft: '5rem', padding: '2rem' }}>
                <h3>Update User</h3>
                <input className={styles.input} onChange={(event) => setname(event.target.value)} value={name} placeholder='Name' type="text" />
                <br />
                <br />
                <input className={styles.input} onChange={(event) => setemail(event.target.value)} value={email} placeholder='Email' type="text" />
                <br />
                <br />
                <input className={styles.input} onChange={(event) => setphone(event.target.value)} value={phone} placeholder='Phone' type="text" />
                <br />
                <br />
                <button className={styles.update} onClick={() => updateUser()}>Update</button>
                <button className={styles.closeDialog} onClick={() => setdialog(false)}>Close</button>
            </dialog>
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && data.map((el, key) => {
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{el.name}</td>
                                <td>{el.phone}</td>
                                <td>{el.email}</td>
                                <td><button style={{ backgroundColor: dialog ? 'black' : '', color: dialog ? 'gray' : '' }} className={styles.delete} disabled={dialog} onClick={() => deleteUser(el._id)}>Delete</button><button style={{ backgroundColor: dialog ? 'black' : '', color: dialog ? 'gray' : '' }} className={styles.update} disabled={dialog} onClick={() => fillInputboxes(el._id)}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br />
            <br />
        </div>
    )
}

export default GetDetails

