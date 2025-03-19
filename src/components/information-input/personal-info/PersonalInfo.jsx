import * as React from 'react';
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const PersonalInfo = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setFileName(file.name);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setFileName("");
    };

    return (
        <>
        <h2 className="text-2xl font-bold mb-4">Add Personal Info</h2>
            <div className='md:grid grid-cols-2 gap-4 px-4 space-y-5'>
                <TextField
                    className='w-full'
                    required
                    id="outlined-required"
                    label="Full Name"
                    defaultValue=""
                    helperText="Please enter your full name"
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
                                accept="image/png, image/jpg, image/jpeg, image/svg, image/webp, image/gif"
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
                    id="outlined-required"
                    label="Phone Number"
                    defaultValue=""
                    type='number'
                    helperText="Please enter your phone number"
                />
                <TextField
                    className='w-full'
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    type='email'
                    helperText="Please enter your email"
                />
                <TextField
                    className='col-span-2 w-full'
                    required
                    id="outlined-required"
                    label="Address"
                    defaultValue=""
                    helperText="Please enter your short address"
                />
                <TextField
                    className='col-span-2 w-full'
                    required
                    id="outlined-required"
                    label="About Me"
                    defaultValue=""
                    helperText="Please enter your about"
                    multiline
                    rows={4} // Adjust the number of rows as needed
                />
                <div className='md:grid grid-cols-3 gap-4 col-span-2'>
                    <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Date of Birth"
                        defaultValue=""
                        helperText="Please enter your Date of Birth"
                    />
                    <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Gender"
                        defaultValue=""
                        helperText="Please enter your gender"
                    />
                    <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Nationality"
                        defaultValue=""
                        helperText="Please enter your nationality"
                    />
                </div>
            </div>
        </>
    );
};

export default PersonalInfo;