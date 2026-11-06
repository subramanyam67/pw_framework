import * as XLSX from 'xlsx';

export class ExcelReader{
    static readExcel(filepath:string, sheetName?:string){
        const workbook = XLSX.readFile(filepath);
        const name = sheetName ?? workbook.SheetNames[0];
        const data = workbook.Sheets[name];

        return XLSX.utils.sheet_to_json(data);
    }
}