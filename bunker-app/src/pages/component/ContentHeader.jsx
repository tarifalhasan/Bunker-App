import React, { useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
const ContentHeader = ({ newFolder, uploadFolder, uploadFile, shareLink }) => {
  const [changeLayout, setChangeLayout] = useState(true);
  const handleChangeLayout = () => {
    setChangeLayout(!changeLayout);
  };

  return (
    <header className="flex  h-14 border-b-2 px-6 content_header z-40  justify-between items-center sticky top-0">
      <div className="flex items-center space-x-1">
        <ul className="flex items-center space-x-5">
          {newFolder}
          {uploadFolder}
          {uploadFile}
          {shareLink}
        </ul>
      </div>
      <div
        className="rounded-md py-2 cursor-pointer hover:bg-skin-lightGray px-3"
        onClick={handleChangeLayout}
      >
        {changeLayout ? <BiCategory size={20} /> : <FaListUl size={20} />}
      </div>
    </header>
  );
};

export default ContentHeader;
