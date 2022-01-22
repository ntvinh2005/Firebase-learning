import React from 'react';
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ROOT_FOLDER } from '../../contexts/FolderContext'

const FolderBreadCrumb = ({currentFolder}) => {
    let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER]
    if (currentFolder) path = [...path, ...currentFolder.path]
    return (
      <Breadcrumb className="flex-grow-1"  
      listProps={{ className: "bg-white pl-0 m-0" }}>
        {path.map((folder) => (
            <Breadcrumb.Item
                key={folder.id}
                linkAs={Link}
                linkProps={{
                    to: folder.id ? '/folder/'+folder.id : "/",
                }}
                className="text-truncate d-inline-block text-decoration-none"
                style={{ maxWidth: "200px" }}
                >
                    {folder.name}
                </Breadcrumb.Item>)
        )}

        {currentFolder && (<Breadcrumb.Item
        className="text-truncate d-inline-block text-decoration-none"
        style={{ maxWidth: "200px" }}
        active
        >
            {currentFolder.name}
        </Breadcrumb.Item>)}
      </Breadcrumb>
      )
};

export default FolderBreadCrumb;
