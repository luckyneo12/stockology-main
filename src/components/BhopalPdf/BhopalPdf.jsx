import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import HTMLFlipBook from 'react-pageflip';
import './BhopalPdf.css';

const BhopalPdf = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pageImages, setPageImages] = useState([]);
  const pdfRef = useRef(null);
  const bookRef = useRef(null);

  const pdfUrl = '/Stockology Brochure A3 Final Print bhopal.pdf';

  useEffect(() => {
    let isMounted = true;
    
    const loadPdfJs = async () => {
      try {
        // Check if we're in browser environment
        if (typeof window === 'undefined') return;
        
        const pdfjsLib = await import('pdfjs-dist');
        
        // Set worker source before any PDF operations
        if (pdfjsLib.GlobalWorkerOptions) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.mjs`;
        }

        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/cmaps/`,
          cMapPacked: true,
        });
        
        const pdf = await loadingTask.promise;
        
        if (!isMounted) return;
        
        pdfRef.current = pdf;
        setTotalPages(pdf.numPages);

        // Render all pages to images (reasonable scale for clarity)
        const renderPages = async () => {
          if (!isMounted) return;
          
          const images = [];
          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            if (!isMounted) break;
            
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.6 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            await page.render({ canvasContext: context, viewport }).promise;
            images.push(canvas.toDataURL('image/png'));
          }
          
          if (isMounted) {
            setPageImages(images);
            setIsLoading(false);
          }
        };

        renderPages();
      } catch (error) {
        console.error('Error loading PDF:', error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadPdfJs();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const nextPage = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipPrev();
  };

  const goToPage = (pageNum) => {
    const idx = Math.max(0, Math.min(pageNum - 1, totalPages - 1));
    if (bookRef.current) bookRef.current.pageFlip().flip(idx);
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Stockology_Brochure_Bhopal.pdf';
    link.click();
  };

  if (isLoading) {
    return (
      <div className="pdf-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading Brochure...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pdf-container">
      <div className="pdf-header">
        <h1>Stockology Brochure - Bhopal</h1>
        <div className="pdf-controls">
          <button onClick={downloadPdf} className="control-btn download-btn">
            <ArrowDownTrayIcon className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>
      </div>

      <div className="pdf-viewer">
        <div className="page-navigation">
          <button onClick={prevPage} disabled={currentPage <= 0} className="nav-btn">
            <ChevronLeftIcon className="w-6 h-6" />
            Previous
          </button>

          <div className="page-info">
            <span>Page {currentPage + 1} of {totalPages}</span>
            <input
              type="number"
              min="1"
              max={totalPages}
              value={currentPage + 1}
              onChange={(e) => goToPage(parseInt(e.target.value))}
              className="page-input"
            />
          </div>

          <button onClick={nextPage} disabled={currentPage >= totalPages - 1} className="nav-btn">
            Next
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="pdf-content" style={{ overflow: 'hidden' }}>
          <HTMLFlipBook
            width={800}
            height={1120}
            size="stretch"
            minWidth={315}
            maxWidth={1200}
            minHeight={420}
            maxHeight={1680}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            onFlip={onFlip}
            className="flipbook-root"
            ref={bookRef}
          >
            {pageImages.map((src, idx) => (
              <div className="flip-page" key={idx} data-density="hard">
                <img src={src} alt={`Page ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>

      <div className="pdf-footer">
        <div className="page-thumbnails">
          {Array.from({ length: Math.min(10, totalPages) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`thumbnail-btn ${currentPage + 1 === pageNum ? 'active' : ''}`}
              >
                {pageNum}
              </button>
            );
          })}
          {totalPages > 10 && <span className="more-pages">... and {totalPages - 10} more</span>}
        </div>
      </div>
    </div>
  );
};

export default BhopalPdf;
