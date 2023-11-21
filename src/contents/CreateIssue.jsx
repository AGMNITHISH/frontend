import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { BiSolidUserCircle } from "react-icons/bi";
import { Modal } from "antd";
import CreateForm from "../components/CreateForm";

const CreateIssue = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Create New issue"
        open={isModalOpen}
        footer={null}
        width="80%"
        onOk={handleOk}
        destroyOnClose={true}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <CreateForm />
      </Modal>
      <div className="inline-flex rounded-md shadow-sm mr-3 " role="group">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <IoIosPeople className="mr-2 text-lg " />
          All issues
        </button>

        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <BiSolidUserCircle className="mr-2 text-lg " />
          Your issues
        </button>
      </div>

      <button
        type="button"
        onClick={() => showModal()}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-1 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2"
      >
        New issue
      </button>
    </div>
  );
};

export default CreateIssue;
