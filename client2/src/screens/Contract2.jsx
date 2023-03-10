import React, { Component } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { useEffect, useState } from "react";
import {
  Avatar,
  Rate,
  Space,
  Table,
  Typography,
  Tag,
  Dropdown,
  message,
  Button,
} from "antd";
import { HolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./../App.css";
import { Document, Page, pdfjs } from "react-pdf";
import lesson2 from "./lesson2.pdf";

class App extends Component {
  
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Space direction="vertical table">
        <Typography.Title
          // level={4}
          className="font-nunito font-bold font-6x mt-5"
        >
          Adoption Contract Upload
        </Typography.Title>

        <nav>
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-white hover:text-[#F7AF7A]  focus:z-10 focus:ring-4 focus:ring-gray-200 "
            onClick={this.goToPrevPage}
          >
            Prev
          </button>

          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-white hover:text-[#F7AF7A]  focus:z-10 focus:ring-4 focus:ring-gray-200 "
            onClick={this.goToNextPage}
          >
            Next
          </button>
        </nav>

        <div style={{ width: 600 }}>
          <Document file={lesson2} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Space>
    );
  }
}

export default App;
