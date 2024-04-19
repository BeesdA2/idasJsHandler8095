const { handleConsumeWebserviceCsvToJSON } = require("../../../../Productie/CsvToJson/js/consumeWebservice.js");

async function consumeCsvToJson  (req, res)  {
  
 
  let externalPartner  = req.query.externalPartner;
  //console.log('externalPartner ' + externalPartner);
  let pathFile   = req.query.pathFile;
  
  //console.log('pathFile ' + pathFile);
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeCsvToJson externalPartner: ' +externalPartner + ' pathFile: ' + pathFile );
 
   
   
  var resolve =  await handleConsumeWebserviceCsvToJSON(externalPartner, pathFile);
  return resolve;	
  
};

module.exports = {
  consumeCsvToJson: consumeCsvToJson
  };