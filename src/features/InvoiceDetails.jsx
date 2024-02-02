// invoice details page which is parent to all invoice components.
import { useState } from "react";
import InvoiceInfoHeader from "./InvoiceInfoHeader";
import TempInvoiceDetailsOutput from "./Temp/TempInvoiceDetailsOutput";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoicePDF from "./InvoicePDF";

const InvoiceDetails = () => {
  const [invoiceInfoHeader, setInvoiceInfoHeader] = useState({
    companyName: "",
    companyAddress: "",
    customerName: "",
    customerAddress: "",
    invoiceNumber: "",
    invoiceDate: "",
  });

  const handleInvoiceInfoHeaderChange = (name, value) => {
    setInvoiceInfoHeader({ ...invoiceInfoHeader, [name]: value });
  };
  const [rowItemData, setRowItemData] = useState([]);
  const handleRowDataChange = (data) => {
    setRowItemData(data);
  };
  return (
    <>
      {/*Invoice Info Header Start*/}
      <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
          <InvoiceInfoHeader
            invoiceInfoData={invoiceInfoHeader}
            onInvoiceInfoChange={(name, value) =>
              handleInvoiceInfoHeaderChange(name, value)
            }
          />
        </div>
      </div>
      {/*Invoice Info Header End*/}
      {/*InvoiceItemsTable Start */}
      <div className="card w-full bg-base-300 shadow-xl my-4">
        <div className="flex justify-center items-center m-6">
          <InvoiceItemsTable onRowDataChange={handleRowDataChange} />
        </div>
      </div>
      {/*InvoiceItemsTable ends */}
      {/*InvoicePDF Start */}
      <InvoicePDF
        invoiceInfoHeaderData={invoiceInfoHeader}
        invoiceItemsTableData={rowItemData}
      />
      {/*InvoicePDF Ends */}
      {/* TempInvoiceDetailsOutput start*/}
      <div className="card w-auto my-8 bg-neutral">
        <TempInvoiceDetailsOutput
          invoiceInfoHeaderData={invoiceInfoHeader}
          invoiceItemsTableData={rowItemData}
        />
      </div>
      {/* TempInvoiceDetailsOutput ends*/}
    </>
  );
};

export default InvoiceDetails;
