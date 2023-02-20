import React, { useState } from 'react';

import trashImage from '../images/trash.svg';
import ContentHeader from './component/ContentHeader';

function Trash() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="relative overflow-y-hidden mt-[24px] w-full max-w-9xl mx-auto">
      {/* Page header */}

      <ContentHeader />
      <div className="border-b-2 px-4 flex justify-between items-center h-14">
        <h3 className="text-slate-900">Trash</h3>
      </div>

      {/* if trash is empty */}
      <div className="flex space-y-4 items-center flex-col justify-center h-[83%]">
        <img src={trashImage} alt="" />
        <h3 className="text-[1.4285714286em] text-slate-900 font-bold">
          No files or folders in trash
        </h3>
      </div>
    </div>
  );
}

export default Trash;
