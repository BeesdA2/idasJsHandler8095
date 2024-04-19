const { handleConsumeWebserviceExcelToJSON } = require("../../../../Productie/ExcelToJson/js/consumeWebservice.js");

async function consumeExcelToJson  (req, res)  {
  
 
  let externalPartner  = req.query.externalPartner;
  console.log('externalPartner ' + externalPartner);
  let pathFile   = req.query.pathFile;
  
  //console.log('pathFile ' + pathFile);
  
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeExcelToJson externalPartner: ' +externalPartner + ' pathFile: ' + pathFile );
 
   
   
  var resolve =  await handleConsumeWebserviceExcelToJSON(externalPartner, pathFile);
  return resolve;	
  
};

module.exports = {
  consumeExcelToJson: consumeExcelToJson
  };