import React from 'react'

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Categories from '../../DATA/Categories'

import './Home.css'


const Home = () => {
    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Quiz Settings</span>
                <div className="settings__select">
                    <TextField style={{ marginBottom: 25 }} label='Enter Your Name' variant='outlined' />


                    <TextField

                        select
                        label='Select Category'
                        variant='outlined'
                        style={{ marginBottom: 30 }}

                    >
                        {Categories.map((cat) => {
                            return (<MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>)
                        })}



                    </TextField>
                </div>
            </div>


            <img src="/quiz.svg" alt="quiz img" className='banner' />
        </div>
    )
}

export default Home