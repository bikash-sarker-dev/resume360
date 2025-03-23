import {
    Card,
    CardContent,
    Typography,
    Divider,
  } from "@mui/material";
  
  const EducationCard = ({ education }) => {
    return (
      <Card className="shadow-lg rounded-2xl h-fit">
        <CardContent>
          <Typography variant="h5" className="font-semibold text-gray-800">
            {education.school || "School Name"}
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600">
            {education.degree || "Degree"} in {education.field || "Field of Study"}
          </Typography>
  
          <Typography variant="body2" className="text-gray-500 mt-2">
            {education.startMonth} {education.startYear} - {education.endMonth} {education.endYear || "Present"}
          </Typography>
  
          {education.grade && (
            <Typography variant="body2" className="text-gray-500 mt-2">
              Grade: {education.grade}
            </Typography>
          )}
  
          {education.description && (
            <>
              <Divider className="my-3" />
              <Typography variant="body2" className="text-gray-600">
                {education.description}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    );
  };
  
  export default EducationCard;
  