
function exportPDF(){

html2pdf().from(document.body).set({

margin:10,
filename:"mission_report.pdf",
html2canvas:{scale:2},
jsPDF:{unit:"mm",format:"a4"}

}).save()

}
