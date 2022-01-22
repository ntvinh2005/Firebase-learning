import React from "react";

const File = ({ file }) => {
  return (
    <div>
      <a
        href={file.url}
        target="_blank"
        className="btn btn-outline-dark text-truncate w-100"
      >
        {file.name}
      </a>
    </div>
  );
};

export default File;
