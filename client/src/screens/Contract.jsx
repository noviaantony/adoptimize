import React from "react";
import { useState } from "react";
import {
  Space,
  Typography,
} from "antd";
import "./../App.css";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


const Contract = () => {

  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target.result);
        };
      } else {
        setPdfFile(null);
      }
    } else {
      console.log("please select");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };
  const newplugin = defaultLayoutPlugin();

  return (
    <Space direction="vertical table">
      <Typography.Title
        // level={4}
        className="font-nunito font-bold font-6x mt-5"
      >
        Adoption Contract Upload
      </Typography.Title>

      <div>
        <form onSubmit={handleSubmit} className="font-nunito mb-6">
          <input
            class="w-62 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-xl"
            id="file_input"
            type="file"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-gray-700 ml-3 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-md font-nunito text-sm px-10 py-2 text-md mt-6"
          >
            Upload PDF
          </button>
        </form>
        <div className="pdf-container mt-20 ml-60">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            {viewPdf && (
              <>
                <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
              </>
            )}
            {!viewPdf && <>No PDF</>}
          </Worker>
        </div>
      </div>

      <button
        class="bg-gray-700 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-sm px-10 py-2 text-xl mt-8"
      >
        Save Information
      </button> 
    </Space>
  );
};

export default Contract;
