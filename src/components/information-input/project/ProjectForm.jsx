import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
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
                    <TextField className="col-span-2" label="Project Name" name="projectName" value={project.projectName} onChange={handleChange} required />
                    <TextField className="col-span-2" label="Description" name="description" value={project.description} onChange={handleChange} multiline rows={3} required />
                    <TextField label="Live Link" name="live" value={project.live} onChange={handleChange} />
                    <TextField label="Client Repo Link" name="client" value={project.client} onChange={handleChange} />
                    <TextField label="Server Repo Link" name="server" value={project.server} onChange={handleChange} />
                    <TextField className="col-span-2" label="Features (One per line)" name="features" value={project.features} onChange={handleChange} multiline rows={4} helperText="Enter each feature in a new line" />
                    < button className='cursor-pointer rounded-full text-white bg-r-primary py-2 px-5' onClick={handleSubmit} > Add </button>
                </form>

            </div>
        </>

    );
};

export default ProjectForm;
