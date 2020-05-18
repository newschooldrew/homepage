import React from 'react'
import { Document, Page, pdfjs,StyleSheet } from "react-pdf";
import img from '../../img/resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resumepage = () => {
    return (
      <div className="container">
      <Document 
        className="container"
        file={img}
      >
          <Page pageNumber={1}></Page>
      </Document>
      </div>
    )
}

export default Resumepage;