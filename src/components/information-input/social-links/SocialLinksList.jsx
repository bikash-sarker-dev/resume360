import React, { useState } from "react";
import SocialLinkForm from "./SocialLinkForm";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import LivePreview from "../live-preview/LivePreview";
import SectionHead from "../../header/section-head/SectionHead";

const SocialLinksList = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addSocialLink = (link) => {
    setSocialLinks([...socialLinks, link]);
  };

  return (
    <div className="p-4">
      <SectionHead
        subTitle={"Add your Social Links"}
        title={"Add Social Links"}
      />
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-full text-white bg-r-primary py-2 px-5"
        >
          Add Social Link
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Material UI Table */}
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
              <TableRow>
                <TableCell>Platform</TableCell>
                <TableCell>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {socialLinks.map((social, index) => (
                <TableRow key={index}>
                  <TableCell>{social.platform}</TableCell>
                  <TableCell>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#1976d2", textDecoration: "underline" }}
                    >
                      {social.link}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
              {socialLinks.length === 0 && (
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    No Social Links Added
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <LivePreview></LivePreview>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <SocialLinkForm
          addSocialLink={addSocialLink}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SocialLinksList;
