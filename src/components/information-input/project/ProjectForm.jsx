import React, { useState } from "react";
import {
    TextField,
} from "@mui/material";

const ProjectForm = ({ addProject }) => {
    const [project, setProject] = useState({
        projectName: "",
        description: "",
        live: "",
        client: "",
        server: "",
        features: "",
    });

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const featureList = project.features.split("\n").filter(f => f.trim() !== "");
        addProject({ ...project, features: featureList });
        setProject({
            projectName: "",
            description: "",
            live: "",
            client: "",
            server: "",
            features: "",
        });
    };

    return (
        <>
            <div>
                <form className="grid grid-cols-2 gap-3" >
                    <TextField className="col-span-2" label="Project Name" name="projectName" value={project.projectName} onChange={handleChange} required helperText="Enter project name" />
                    <TextField className="col-span-2" label="Description" name="description" value={project.description} onChange={handleChange} multiline rows={3} required helperText="Enter description" />
                    <TextField label="Live Link" name="live" value={project.live} onChange={handleChange} helperText="Enter live link" />
                    <TextField label="Repo Link" name="client" value={project.client} onChange={handleChange} helperText="Enter repository link" />
                    <TextField className="col-span-2" label="Features (One per line)" name="features" value={project.features} onChange={handleChange} multiline rows={4} helperText="Enter each feature in a new line" />
                    < button className='col-span-2 cursor-pointer rounded-full text-white bg-r-primary py-2 px-5' onClick={handleSubmit} > Add </button>
                </form>

            </div>
        </>

    );
};

export default ProjectForm;
