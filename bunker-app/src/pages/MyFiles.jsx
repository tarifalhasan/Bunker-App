import React, { useState } from 'react';
import { FiFolderPlus } from 'react-icons/fi';
import { MdDriveFolderUpload } from 'react-icons/md';
import { BsFileEarmarkArrowUp } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';

import InvoicesTable from '../partials/invoices/InvoicesTable';
import PaginationClassic from '../components/PaginationClassic';
import ContentHeader from './component/ContentHeader';

function MyFiles() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="relative mt-[24px] flex flex-col flex-1  overflow-x-hidden">
      <main>
        <div className="  w-full max-w-10xl mx-auto">
          {/* Page header */}
          <ContentHeader
            newFolder={
              <li className=" rounded-md py-1 cursor-pointer hover:bg-skin-lightGray px-3">
                <label className="w-full flex flex-col items-center   rounded-lg shadow-lg tracking-wide   cursor-pointer  ">
                  <span className="">
                    <FiFolderPlus />
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </li>
            }
            uploadFolder={
              <li className=" rounded-md py-1 cursor-pointer hover:bg-skin-lightGray px-3">
                <label className="w-full flex flex-col items-center   rounded-lg shadow-lg tracking-wide   cursor-pointer  ">
                  <span className="">
                    <MdDriveFolderUpload />
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </li>
            }
            uploadFile={
              <li className=" rounded-md py-1 cursor-pointer hover:bg-skin-lightGray px-3">
                <label className="w-full flex flex-col items-center   rounded-lg shadow-lg tracking-wide   cursor-pointer  ">
                  <span className="">
                    <BsFileEarmarkArrowUp />
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </li>
            }
            shareLink={
              <li className=" rounded-md py-1 cursor-pointer hover:bg-skin-lightGray px-3">
                <FiLink />
              </li>
            }
          />
          <div className="border-b-2 px-6 flex justify-between items-center h-14">
            <h3 title="My file" className="text-slate-900">
              My files
            </h3>
          </div>
          {/* More actions */}
          <div className=" -z-10">
            {/* Table */}
            <InvoicesTable selectedItems={handleSelectedItems} />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyFiles;
