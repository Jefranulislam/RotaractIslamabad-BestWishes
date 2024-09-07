import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import templateImage from './templateimage.png';

const BannerGenerator = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [club, setClub] = useState('');
  const [image, setImage] = useState('');
  const bannerRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExport = async () => {
    if (bannerRef.current) {
      try {
        const canvas = await html2canvas(bannerRef.current);
        const img = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = img;
        link.download = 'custom-banner.jpg';
        link.click();
      } catch (error) {
        console.error('Error exporting image:', error);
        alert('Failed to export image. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">



<div id='exportTrigger' ref={bannerRef} className="relative w-full" style={{ aspectRatio: '3/4' }}>
  <div id='template' className="absolute inset-0">
    <img src={templateImage} alt='TemplateImage' className="w-full h-full object-cover" />
  </div>

  <div id='Information' className="absolute bottom-0 left-0 w-full h-1/2 flex justify-center items-center pb-10">
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="w-2/4 flex justify-center items-center mb-4">
        {image ? (
          <img src={image} alt="Uploaded banner" className="object-cover rounded-full w-full h-full" />
        ) : (
          <div className="w-1/2 h-1/2 bg-gray-200 rounded-full flex items-center justify-center">
            <p className="text-gray-500 text-[2vw]">No image</p>
          </div>
        )}
      </div>
      <div className="text-center">
        <h2 className="text-[2vw] ClashDisplay font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{name || 'Your Name'}</h2>
        <p className="text-[1vw] Clash text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{club || 'Your Club Name'}</p>
        <p className="text-[1vw] Clash text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{title || 'Your Title'}</p>
      </div>
    </div>
      </div>
    </div>




      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Enter your name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">Enter your Club Name</label>
          <input
            type="text"
            id="title"
            value={club}
            onChange={(e) => setClub(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your title"
          />
        </div>
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">Enter your title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your title"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-700">Upload image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      
      <button 
        onClick={handleExport} 
        className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Export Banner as JPG
      </button>

    </div>



  );


  
};

export default BannerGenerator;