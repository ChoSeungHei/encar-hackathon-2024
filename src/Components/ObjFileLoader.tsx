import React, { ChangeEvent, useState } from 'react';
import { ObjLoader } from '../renderer/ObjLoader'; // ObjLoader 클래스를 임포트합니다.

const ObjFileUploader: React.FC = () => {
  const [objLoader] = useState(new ObjLoader());  
  
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result;
      if (typeof text === 'string') {
        const objModel = objLoader.parse(text);        
        console.log('Parsed OBJ Model:', objModel);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".obj" />
    </div>
  );
};

export default ObjFileUploader;