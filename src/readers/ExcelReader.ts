
import * as XLSX from 'xlsx';

export class ExcelReader{
    static readExcel(filePath:string, sheetName?:string){

        const workbook = XLSX.readFile(filePath);
        const name = sheetName ?? workbook.SheetNames[0];
        const data = workbook.Sheets[name];

        return XLSX.utils.sheet_to_json(data);
    }
}