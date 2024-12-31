import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { RxUpload } from "react-icons/rx";
import { CiCircleRemove } from "react-icons/ci";
import { FaDisplay } from "react-icons/fa6";
import { BiHide } from "react-icons/bi";
import '../styles/UploadExcel.css';

const UploadExcel = () => {
  const [file, setFile] = useState(null);
  const [displaySheet, setDisplaySheet] = useState(false);
  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('excelData');
    if (storedData) {
      setExcelData(JSON.parse(storedData));
      setDisplaySheet(true);
    }
  }, []);

  const onDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setExcelData(data);
      localStorage.setItem('excelData', JSON.stringify(data));

      // Fetch to send the file to backend
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
      fetch('http://127.0.0.1:5000/upload-excel', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response from Flask API:', data);
          alert('Sheet Uploaded successfully');
          // Handle response data as needed
        })
        .catch(error => {
          console.error('Error sending file to Flask API:', error);
          alert('Error sending file to Flask API:', error);
          // Handle error
        });
    };
    reader.readAsBinaryString(acceptedFiles[0]);
    setFile(acceptedFiles[0]);
    setDisplaySheet(true); // Display the sheet immediately after upload
  };

  const removeSheet = () => {
    localStorage.removeItem('excelData');
    setExcelData([]);
    setDisplaySheet(false);
    setFile(null);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className='TotalSheet'>
      {!displaySheet && (
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <RxUpload />
          <p>Drag 'n' drop an Excel file here, or click to select one</p>
        </div>
      )}
      {file && !displaySheet && (
        <div className='OnDisplaySection'>
          <p>File Uploaded: {file.name}</p>
          <button onClick={() => setDisplaySheet(true)} id='disheet'>
            <FaDisplay style={{ fontSize: '24px', verticalAlign: 'middle' }} /> Display Sheet
          </button>
        </div>
      )}
      {displaySheet && (
        <div className='excelTable'>
          <table>
            <thead>
              <tr>
                {excelData[0] && excelData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className='buttonGroup'>
            <button onClick={() => setDisplaySheet(false)} id='hidsheet'>
              <BiHide style={{ fontSize: '24px', verticalAlign: 'middle' }} /> Hide Sheet
            </button>
            <button onClick={removeSheet} id='rmsheet'>
              <CiCircleRemove style={{ fontSize: '24px', verticalAlign: 'middle' }} /> Remove Sheet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadExcel;
