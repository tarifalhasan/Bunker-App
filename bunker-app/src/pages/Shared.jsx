import React, { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import sharefileImage from '../images/sharefile.svg';
import InvoicesTable from '../partials/invoices/InvoicesTable';
import PaginationClassic from '../components/PaginationClassic';
import ContentHeader from './component/ContentHeader';
function Shared() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="px-4 sm:px-6 mt-[24px] w-full overflow-y-hidden max-w-9xl mx-auto">
      {/* Page header */}

      <ContentHeader
        shareLink={
          <li className=" rounded-md py-1 cursor-pointer hover:bg-skin-lightGray px-3">
            <FiLink />
          </li>
        }
      />
      <div className="border-b-2 px-6 flex justify-between items-center h-14">
        <h3 title="My file" className="text-slate-900">
          My Links
        </h3>
      </div>

      {/* if has file then return InvoicesTable &  PaginationClassic*/}
      {/* <InvoicesTable selectedItems={handleSelectedItems} /> */}

      {/* Pagination */}
      {/* <div className="mt-8">
        <PaginationClassic />
      </div> */}

      {/* if trash is empty */}
      <div className="flex space-y-4 items-center flex-col justify-center h-[83%]">
        <img src={sharefileImage} alt="" />
        <h3 className="text-[1.4285714286em] text-slate-900 font-bold">
          Share files with links
        </h3>
        <p>Create links and share your files with others.</p>
        <button
          type="button"
          className="focus:outline-none text-xl px-16 text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm  py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 "
        >
          Share file
        </button>
      </div>
    </div>
  );
}

export default Shared;
