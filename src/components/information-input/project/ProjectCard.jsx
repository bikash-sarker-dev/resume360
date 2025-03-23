import {
    Card,
    CardContent,
    Typography,
    Divider,
  } from "@mui/material";
  
  const ProjectCard = ({ project }) => {
    return (
      <Card className="shadow-lg rounded-2xl h-fit">
        <CardContent>
          <Typography variant="h5" className="font-semibold text-gray-800">
            {project.projectName || "Project Name"}
          </Typography>
  
          {project.description && (
            <Typography variant="subtitle1" className="text-gray-600 mt-2">
              {project.description}
            </Typography>
          )}
  
          <Typography variant="body2" className="text-gray-500 mt-2">
            Live: <a href={project.live} target="_blank" rel="noreferrer" className="text-blue-600 underline">{project.live || "Live Link"}</a>
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            Client: <a href={project.client} target="_blank" rel="noreferrer" className="text-blue-600 underline">{project.client || "Client Repo"}</a>
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            Server: <a href={project.server} target="_blank" rel="noreferrer" className="text-blue-600 underline">{project.server || "Server Repo"}</a>
          </Typography>
  
          {project.features && (
            <>
              <Divider className="my-3" />
              <ul className="list-disc ml-5 text-gray-600">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </>
          )}
        </CardContent>
      </Card>
    );
  };
  
  export default ProjectCard;
  