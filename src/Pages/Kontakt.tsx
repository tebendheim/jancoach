import React, { FormEventHandler } from 'react'

const Kontakt: React.FC = () => {
    const [state, setState] = React.useState({
        email: "",
        fName:"",
        lName:"",
        message:""
    })
    const handleSubmit = (event:any)=>{
        setState({
            ...state, [event.target.name]: event.target.value
        })
    }
    const handleChange = (event:any) => {
        setState({
            ...state, [event.target.name]: event.target.value
        })
    }
  return (
    <section>
        <h1></h1>
        <form onSubmit={handleSubmit} className="h-full w-full">
            <fieldset className='flex flex-col justify-between'>
                <label className='flex flex-col dark:text-white my-10'>
                    E-mail
                    <input className="w-1/4" type='email' value={state.email} name="email" onChange={handleChange}>
                    </input>
                </label>
                <label className='flex flex-col dark:text-white my-10 mx-auto'>
                    First Name
                    <input className="w-1/4" type='fName' value={state.fName} name="fName" onChange={handleChange}>
                    </input>
                </label>
                <label className='flex flex-col dark:text-white my-10'>
                    Last Name
                    <input className="w-1/4" type='lName' value={state.lName} name="lName" onChange={handleChange}>
                    </input>
                </label>
                <label className='flex flex-col dark:text-white my-10'>
                    Message
                    <input className="w-1/4" type='message' value={state.message} name="message" onChange={handleChange}>
                    </input>
                </label>

                    <div className="flex justify-center align-bottom bg-blue-300 w-full h-screen">
                        <div className="bg-red-300 h-32 w-32 my-auto"></div>
                        <div className="bg-red-600 h-32 w-32 my-auto"></div>
                        <div className="bg-red-900 h-32 w-32 my-auto"></div>
                        <div className="bg-red-100 h-32 w-32 my-auto"></div>
                    </div>
                
            </fieldset>
        </form>
    </section>
  )
}

export default Kontakt