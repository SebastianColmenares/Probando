

function Imprimir() {
    const txtHTML = document.getElementById("texto").innerHTML;
    var pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a5',
        putOnlyUsedFonts:true
        });
    pdf.text(txtHTML, 20, 20);
    pdf.save('PruebaPDF.pdf');
}