# React Invoice Generator

This project is a React-based Invoice Generator that allows users to create and download invoices. It is designed with a modular architecture, featuring separate components for handling invoice details, item listing, and PDF generation.

## Features

- **Invoice Details**: Users can input and edit information such as company name, company address, customer name, customer address, invoice number, and invoice date.
- **Dynamic Invoice Items Table**: Add, edit, and delete invoice items, including item name, description, quantity, and price. The table calculates the total amount for each item.
- **PDF Generation**: Generate and download a PDF version of the invoice, including all details and items listed.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/javeria2108/React-Invoice-Generator
   cd React-Invoice-Generator
   npm install
   npm run dev
   ```
## Usage

Fill in the invoice information in the Invoice Info Header section.
Add items to the invoice by using the Add Row button in the Invoice Items Table section. You can edit item details directly in the table and delete rows as needed.
Once all details are filled in, click the Generate PDF button to create a PDF version of your invoice, which will then automatically download to your device.

## Components Overview

InvoiceDetails.jsx: Main container component that orchestrates the flow of data between child components.
InvoiceInfoHeader.jsx: Component for inputting basic invoice information.
InvoiceItemsTable.jsx: Component for managing invoice items, including adding, editing, and deleting rows.
InvoicePDF.jsx: Component for generating and downloading the invoice as a PDF document.

## Contributing
Contributions are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.


