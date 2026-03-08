const date = "202408"; 
const time_period = "m";

const nbuUrl = new URL("https://bank.gov.ua/");

nbuUrl.pathname = "NBUStatService/v1/statdirectory/banks";

nbuUrl.searchParams.append("date", date);
nbuUrl.searchParams.append("period", time_period);
nbuUrl.searchParams.append("json", "");

console.log(nbuUrl.href);