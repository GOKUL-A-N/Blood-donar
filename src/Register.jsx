import React,{useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {useDispatch , useSelector} from "react-redux"
// import {  } from 'react-router-dom'
import { addDonar } from './DonarReducer'

const Register = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [bg,setBg] = useState('')
  const donar = useSelector((state) => state.donar)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(addDonar({id: donar[donar.length-1].id + 1,name,email,phone,bg}))
    navigate('/getblood')
  }

  return (
    <div>
     <div class="container  mx-auto my-10 w-1/3 border border-purple-500 bg-white">
  <div class="p-5 space-y-5  shadow-xl">
    <h4 class="text-center text-3xl">Register For Blood Donation</h4>

    <form>
      <div class="grid grid-cols-2 gap-5">
        <input
          type="text"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Full Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Phone"
          onChange={e => setPhone(e.target.value)}
        />
        <input
          type="text"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Blood Group"
          onChange={e => setBg(e.target.value)}
        />
      </div>
      <input
        type="submit"
        onClick={handleChange}
        value="Enroll"
        class="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
      />
    </form>
  </div>
</div>
     <div className="flex items-center justify-center">
     <Link to="/getblood" className='bg-red-500 hover:bg-red-600 p-2 rounded  '>Need Blood</Link>
     </div>
    </div>
  )
}

export default Register