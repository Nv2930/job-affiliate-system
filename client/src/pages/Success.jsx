import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Success() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])

    return (
        <>
            {
                loading == true ? <div className='successDivLoad'>
                    <h1 style={{ fontSize: 'x-large' }}>publishing...</h1>
                </div> :
                    <div className='successContainer'>
                        <div className='successDiv'>
                            <img src="/public/check.png" alt="" style={{ width: '60px' }} />
                            <h1 style={{ fontSize: 'xx-large' }}>Successfully Published </h1>
                        </div>
                    <Link to={'/admin/form'} style={{alignSelf:'center', paddingLeft:'5em'}}>go back</Link>
                </div>
            }
        </>
    )
}

export default Success