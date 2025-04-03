import * as React from 'react';
import { TextField, Button, MenuItem } from "@mui/material";
import { useState, useContext } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { ResumeContext } from '../../../contextApi/resume-context/ResumeContext';



const PersonalInfo = () => {
    const { resumeData, updateSection } = useContext(ResumeContext);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateSection('personalInfo', {
            ...resumeData.personalInfo,
            [name]: value
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
            setFileName(file.name);
            updateSection('personalInfo', {
                ...resumeData.personalInfo,
                profileImage: imageURL,
                imageName: file.name
            });
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setFileName("");
        updateSection('personalInfo', {
            ...resumeData.personalInfo,
            profileImage: null,
            imageName: ""
        });
    };

    return (
        <>
            <div className='grid grid-cols-1'>
                <div className='md:grid grid-cols-2 gap-4 px-4 space-y-5 mt-5'>
                    <TextField
                        className='w-full'
                        required
                        name="fullName"
                        label="Full Name"
                        onChange={handleChange}
                        helperText="Please enter your full name"
                    />
                    <TextField
                        className='w-full'
                        required
                        name="jobTitle"
                        label="Job Title"
                        onChange={handleChange}
                        helperText="Please enter your job title"
                    />
                    <div className="md:flex flex-col row-span-3 justify-center items-center border-2 border-dashed border-r-accent rounded-lg text-center">
                        {!image ? (
                            <>
                                <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                                    <FiUploadCloud className="text-gray-500 text-5xl" />
                                    <p className="font-semibold mt-2">Upload file</p>
                                    <p className="text-xs text-gray-500">PNG, JPG, SVG, WEBP, and GIF are allowed.</p>
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    id="image-upload"
                                />
                            </>
                        ) : (
                            <div className="flex flex-col items-center gap-2">
                                <img src={image} alt="Selected" className="w-32 h-32 object-cover rounded-lg" />
                                <p className="text-sm text-gray-500">{fileName}</p>
                                <Button variant="outlined" color="secondary" onClick={handleRemoveImage}>
                                    Remove Image
                                </Button>
                            </div>
                        )}
                    </div>

                    <TextField
                        className='w-full'
                        required
                        name="phone"
                        label="Phone Number"
                        type='number'
                        onChange={handleChange}
                        helperText="Please enter your phone number"
                    />
                    <TextField
                        className='w-full'
                        required
                        name="email"
                        label="Email"
                        type='email'
                        onChange={handleChange}
                        helperText="Please enter your email"
                    />
                    <TextField
                        className='col-span-2 w-full'
                        required
                        name="address"
                        label="Address"
                        onChange={handleChange}
                        helperText="Please enter your short address"
                    />
                    <TextField
                        className='col-span-2 w-full'
                        required
                        name="about"
                        label="About Me"
                        multiline
                        rows={4}
                        onChange={handleChange}
                        helperText="Please enter your about"
                    />
                    <div className='md:grid grid-cols-3 gap-4 col-span-2'>
                        <TextField
                            className='w-full'
                            required
                            name="dob"
                            label="Date of Birth"
                            onChange={handleChange}
                            helperText="Please enter your Date of Birth"
                        />
                        <TextField
                            className="w-full"
                            required
                            name="gender"
                            select
                            label="Gender"
                            value={resumeData.personalInfo.gender || ''}  // ✅ Add this line
                            onChange={handleChange}
                            helperText="Please select your gender"
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                        <TextField
                            className='w-full'
                            required
                            name="nationality"
                            label="Nationality"
                            onChange={handleChange}
                            helperText="Please enter your nationality"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalInfo;
