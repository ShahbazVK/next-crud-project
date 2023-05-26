import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/create.module.css'

const Create = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const createOperation = () => {
        axios.post('http://localhost:3000/api/users', { name, email, phone })
            .then((resp) => alert("Create operation completed"))
            .catch((err) => console.log(err))
    }
    return (
        <div className={styles.formBackground}>
            <h2 style={{ color: 'white' }}>Add a User</h2>
            <br />
            <input className={styles.input} onChange={(event) => setname(event.target.value)} value={name} placeholder='Name' type="text" />
            <br />
            <br />
            <input className={styles.input} onChange={(event) => setemail(event.target.value)} value={email} placeholder='Email' type="text" />
            <br />
            <br />
            <input className={styles.input} onChange={(event) => setphone(event.target.value)} value={phone} placeholder='Phone' type="text" />
            <br />
            <br />
            <button className={styles.buttonStyle} onClick={createOperation}>Add To Database</button>
        </div>
    )
}

export default Create