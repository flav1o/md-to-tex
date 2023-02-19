import { renderHtmlContent } from "~/constants/pdf.constants";

export const PdfService = {
  handlePrint: (previewerRef: any) => {
    const printContent = previewerRef?.current.cloneNode(true);
    const printStyles = `
     @media print {
        body * {
          visibility: hidden;
        }
        #print-content, #print-content * {
          visibility: visible;
        }
        #print-header {
          display: none;
        }
      }
    `;
    const printWindow = window.open("", "Print", "height=600,width=800");
    printWindow?.document.write(
      renderHtmlContent(printStyles, printContent.innerHTML)
    );
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
    printWindow?.close();
  },
};
