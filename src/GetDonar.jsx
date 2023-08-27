import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch , useSelector} from "react-redux"
import { deleteDonar } from './DonarReducer';


const GetDonar = () => {

  const donar = useSelector((state) => state.donar)
  // const dispatch

  const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteDonar({id:id}))
    }

  return (
    <div className='container'>
        <h2 className='text-center text-[32px] p-10 font-extrabold text-red-600'>Ready to Give Blood</h2>
        <Link to="/" className='btn btn-success my-3'>Register +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>EMail</th>
                    <th>Phone</th>
                    <th>Blood Group</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {donar.map((donars, index) => (
                    
                        <tr key={index}>
                        <td>{donars.id}</td>
                        <td>{donars.name}</td>
                        <td>{donars.email}</td>
                        <td>{donars.phone}</td>
                        <td>{donars.bg}</td>
                        <td>
                            {/* <Link to={`//${user.id}` } className='btn btn-sm btn-primary'>Edit</Link> */}
                            <button className='btn btn-sm btn-danger ms-2' onClick={() => handleDelete(donars.id)}>Delete</button>
                        </td>
                    </tr>
                    )
                )}
            </tbody>
        </table>
    </div>
  )
}

export default GetDonar