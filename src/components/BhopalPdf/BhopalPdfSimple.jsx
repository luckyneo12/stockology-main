import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import './BhopalPdf.css';

const BhopalPdfSimple = () => {
  const pdfUrl = '/Stockology Brochure A3 Final Print bhopal.pdf';

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Stockology_Brochure_Bhopal.pdf';
    link.click();
  };

  return (
    <div className="pdf-container">
      <div className="pdf-header">
        <h1>Stockology Brochure - Bhopal</h1>
        <div className="pdf-controls">
          <button onClick={downloadPdf} className="control-btn download-btn">
            <ArrowDownTrayIcon className="w-5 h-5" />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>

      <div className="pdf-viewer">
        <div className="pdf-content" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '400px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1rem', color: '#333' }}>
              Stockology Brochure
            </h2>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
              Click the download button to view our comprehensive brochure
            </p>
            <button 
              onClick={downloadPdf} 
              style={{
                backgroundColor: '#e53e3e',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '0 auto'
              }}
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
          
          <div style={{ 
            border: '2px dashed #ccc', 
            padding: '2rem', 
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            <p style={{ color: '#666', margin: 0 }}>
              PDF Viewer temporarily unavailable. Please download the brochure to view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhopalPdfSimple;
