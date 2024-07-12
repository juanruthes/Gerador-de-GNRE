const XLSX = require("xlsx");
const workbook = XLSX.readFile(
  "C:\\Users\\juan.santos\\Desktop\\Gerador de GNRE\\static\\data\\arquivo-nao-contribuinte\\Não Contribuintes.xlsx"
);
const sheet = workbook.Sheets["Nome da Planilha"];
const json = XLSX.utils.sheet_to_json(sheet);

// faça algo com os dados JSON, como transformar em HTML e exibir na página
console.log(json);
