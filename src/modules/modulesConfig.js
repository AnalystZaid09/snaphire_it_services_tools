const modulesConfig = [
  {
    group: "Amazon",
    path: "/amazon",
    links: [
      // Sales & Core
      { name: "Amazon Sales Report", url: "https://sales-report-new.streamlit.app/" },
      // { name: "Amazon RIS Report", url: "https://risnewreport-24.streamlit.app/" },
      { name: "Amazon Daily P&L", url: "https://amazondailypl.streamlit.app/" },
      { name: "Amazon RIS New Report", url: "https://amazonr-is-new.streamlit.app/" },
      { name: "Amazon Monthly P&L", url: "https://amazon-monthlyp-l.streamlit.app/"},
      { name: "Amazon Daily P&L with Dyson", url:"https://amazondailypl-withdyson.streamlit.app/"},
      { name: "Amazon Month and Qtr Wise Sales Report", url:"https://amazonyeartothis.streamlit.app/"},

      // Stock & OOS
      //{ name: "Amazon OOS Report", url: "https://oos-amazon.streamlit.app/" },
      { name: "Amazon QWTT Stock", url: "https://amazonqwtt-stock.streamlit.app/" },
      { name: "Amazon OSS-Daywise", url: "https://oos-amazon-daywise.streamlit.app/" },
      { name: "Amazon OOS New Report", url: "https://amazon-oos-new.streamlit.app/" },
      { name: "Sales vs Return Report", url:"https://amazon-salesvsreturn.streamlit.app/"},

      // PO & Working
      { name: "Amazon PO Working", url: "https://amazon-poworking.streamlit.app/" },
    ],
  },

  {
    group: "Leakage Reconciliation",
    path: "/leakage-reconciliation",
    links: [
      // Returns & Refunds
      { name: "Only Refund Cross Check Report", url: "https://return-refund-report.streamlit.app/" },
      { name: "Return Report", url: "https://amazonreturnreportanalyzer.streamlit.app/" },
      { name: "Replacement Without Reimbursement", url: "https://replacement-without-reimbursement-report.streamlit.app/" },
      // { name: "Stock vs Inventory vs Return", url: "https://stockvsinventory-return.streamlit.app/" },

      // Support
      { name: "Amazon Support – NCEMI", url: "https://amazon-support-ncemi.streamlit.app/" },
      { name: "Amazon Support – Dyson", url: "https://amazon-support-dyson.streamlit.app/" },
      { name: "Amazon Support - Tramontina", url: "https://amazon-support-tramontina.streamlit.app/"},
      { name: "Amazon Support - Bergner", url: "https://amazon-support-bergner.streamlit.app/"},
      { name: "Amazon Support", url: "https://amazonsupport.streamlit.app/"},
      { name: "Reverse Logistic - FBA", url: "https://reverselogisticfba.streamlit.app/"},
      { name: "Reverse Logistic - Seller", url: "https://reverselogisticseller.streamlit.app/"},

      // PDF to Excel
      { name: "Amazon PDF to Excel", url: "https://amazon-pdf-excel.streamlit.app/" },
    ],
  },

  {
    group: "Flipkart",
    path: "/flipkart",
    links: [
      { name: "Flipkart Sales Report", url: "https://flipkartsalesreport-26.streamlit.app/" },
      // { name: "Flipkart RIS", url: "https://flipkart-ris.streamlit.app/" },
      // { name: "Flipkart OOS Report", url: "https://oos-flipkart.streamlit.app/" },
      { name: "Flipkart QWTT Stock", url: "https://flipkartqwtt-stock.streamlit.app/" },
      // { name: "Flipkart Sales vs Inventory vs Return", url: "https://flipkartstockvsinventoryvsreturn.streamlit.app/" },
      { name: "Flipkart OOS New Report", url: "https://flipkart-oos-new.streamlit.app/" },
      { name: "Flipkart RIS New Report", url: "https://flipkart-ris-new.streamlit.app/" },
      { name: "Flipkart P&L Report", url: "https://flipkart-p-l.streamlit.app/"},
    ],
  },

  {
    group: "Stock Movement",
    path: "/stock-movement",
    links: [
      // { name: "Stock Movement Report", url: "https://stockmovement-03.streamlit.app/" },
      { name: "Stock Movement New Report", url :"https://stock-movement-new.streamlit.app/"},
    ],
  },

  {
    group: "PO Reconciliation",
    path: "/po-reconciliation",
    links: [
      { name: "Dyson Reconciliation", url: "https://dysonreconciliation.streamlit.app/" },
      { name: "Hafele Reconciliation", url: "https://hafelereconciliation.streamlit.app/" },
      { name: "Sujata Reconciliation", url: "https://sujatareconciliation.streamlit.app/" },
      { name: "Panasonic Reconciliation", url: "https://panasonicrec.streamlit.app/" },
      { name: "Usha Reconciliation", url: "https://ushareconciliation.streamlit.app/" },
      { name: "Wonderchef Reconciliation", url: "https://wonderchef-reconiliation.streamlit.app/" },
      { name: "Tramontina Reconciliation", url: "https://tramontina-reconciliation.streamlit.app/" },
      { name: "Bajaj Reconciliation", url: "https://bajaj-reconciliation.streamlit.app/" },
      { name: "Trishna Reconciliation", url: "https://trishna-reconciliation.streamlit.app/" },
      { name: "Nokia Reconciliation", url: "https://nokia-reconciliation.streamlit.app/" },
      { name: "Glen Reconciliation", url: "https://glen-reconciliation.streamlit.app/" },
      { name: "Crompton Reconciliation", url: "https://crompton-reconciliation.streamlit.app/" }
    ],
  },
];

export default modulesConfig;
