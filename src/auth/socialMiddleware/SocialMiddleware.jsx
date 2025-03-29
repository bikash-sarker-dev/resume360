import React, { useState } from 'react'
import SectionHead from '../../components/header/section-head/SectionHead'
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function SocialMiddleware() {
    const {setUser, user} = useAuth();
    const navigate = useNavigate();
    const [conditions, setConditions] = useState(false);

    const handleSave = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const profession = form.profession.value;
        const email = form.email.value;
        const terms = true;

        const data = { name, profession, email, terms };
        // console.log(data);
        navigate('/')
    }
  return (
    <div className="card w-11/12 md:w-7/12 mx-auto">
    <div className="card-body">
        <SectionHead 
        subTitle={"Some important information that is neeeded"}
        title={"Information Form"} />
        <form onSubmit={handleSave}>
            <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <div className="relative">
                <input
                type="text"
                name="name"
                className="input w-full pr-10"
                placeholder="Enter Name"
                defaultValue={user.displayName}
                required
                readOnly
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                <i className="fa-solid fa-user"></i>
                </span>
                </div>
    
                <label className="fieldset-label">Profession</label>  
                <div className="relative">
                <input
                type="text"
                name="profession"
                className="input w-full pr-10"
                placeholder="Enter Your Profession"
                required
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                <i className="fa-solid fa-user-tie"></i>
                </span>
                </div>
    
                <label className="fieldset-label">Email</label>
                <div className="relative">
                <input
                type="email"
                name="email"
                className="input w-full pr-10"
                placeholder="Enter Your Email"
                defaultValue={user.email}
                required
                readOnly
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                <i className="fa-solid fa-envelope"></i>
                </span>
                </div>

                <div className="flex justify-between items-center mt-2">
                <label className="fieldset-label">
                <input
                type="checkbox"
                name="conditions"
                value={conditions ? "true" : "false"}
                className="checkbox"
                onClick={() => setConditions(!conditions)}
                required
                />{" "}
                I accept the Terms and Conditions
                </label>
                </div>
                {conditions ? (
                <>
                <button className="btn bg-r-accent mt-4 text-white">
                Save
                </button>
                </>
                ) : (
                <>
                <button disabled className="btn bg-r-accent mt-4 text-white">Save</button>
                </>
                )}
            </fieldset>
        </form>
    </div>
    </div>
  )
}
