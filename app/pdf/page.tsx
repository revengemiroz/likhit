"use client";

import { useState } from "react";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfExtractor() {
  const [extractedText, setExtractedText] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument(arrayBuffer).promise;
      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(" ");
        text += pageText + "\n";
      }
      console.log({ text });
      setExtractedText(text);
      const status = extractNamesFromText(text);
      console.log({ status }, status[0]);
    } else {
      console.error("Please upload a valid PDF file");
    }
  };
  const extractNamesFromText = (text) => {
    const namesArray = [];
    const pattern =
      /(ERN\d+[A-Z])\s+([\w\s.]+?)\s+(M|F)\s+\d{2}-\d{2}-\d{2}-\d{5}/g;

    let match;
    while ((match = pattern.exec(text)) !== null) {
      const name = match[2].trim(); // Extract the name from the match
      namesArray.push(name);
    }

    return namesArray;
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileUpload} />
      {extractedText && (
        <div>
          <h2>Extracted Text:</h2>
          <pre>{extractedText}</pre>
        </div>
      )}
    </div>
  );
}
