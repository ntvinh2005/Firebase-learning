import React, { useEffect } from "react";
import NavbarElement from "./NavbarElement";
import AddFolder from "./AddFolder";
import AddFile from "./AddFile";
import Folder from "./Folder";
import File from "./File";
import FolderBreadCrumb from "./FolderBreadCrumb";
import { useFolder } from "../../contexts/FolderContext";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { folderId } = useParams();
  const { folder, childFolders, childFiles } = useFolder(folderId);
  console.log(folder);
  console.log(childFiles)

  return (
    <div>
      <NavbarElement></NavbarElement>
      <Container fluid>
        <h1>DASHBOARD</h1>
        <div className="d-flex align-items-center">
          <FolderBreadCrumb currentFolder={folder}></FolderBreadCrumb>
          <AddFolder currentFolder={folder} />
          <AddFile currentFolder={folder}></AddFile>
        </div>

        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childfolder) => (
              <div
                key={childfolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childfolder}></Folder>
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr/>}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childfile) => (
              <div
                key={childfile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childfile}></File>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
