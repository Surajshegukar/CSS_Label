$(document).ready(function(){
    JsBarcode("#barcode", "websolutionstuff", {  
        lineColor: "black",
        width: 2,
        height: 100,
        displayValue: true
    });
    JsBarcode("#barcode-2", "1234567890", {  
        lineColor: "black",
        width: 6,
        height: 100,
        displayValue: true
    });
});
// function printDiv() { 
//     var divContents = document.getElementById("container").innerHTML; 
//     var a = window.open('', '', 'height=100px, width=700px'); 
//     a.document.write('<html>'); 
//     a.document.write(divContents); 
//     a.document.write('</body></html>'); 
//     a.document.close(); 
//     a.print(); 
// } 
function printDiv() {
    window.print();
  }