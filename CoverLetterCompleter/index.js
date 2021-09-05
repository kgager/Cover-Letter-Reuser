
function fillInCompany() {
    const coverLetter = document.getElementById("coverLetter").value;
    const companyName = document.getElementById("companyName").value;
    const updatedCoverLetter = coverLetter.replaceAll('🤑', companyName);
    document.getElementById("updatedCoverLetter").value = updatedCoverLetter
}

async function writePDF(letter) {
    if (letter === null || letter === "") {
        alert("No cover letter detected!")
    } else {
        const { PDFDocument, StandardFonts, rgb } = PDFLib
        const pdfDoc = await PDFDocument.create()
        const Helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
        const page = pdfDoc.addPage()
        const { height } = page.getSize()
        const fontSize = 12

        page.drawText(letter, {
            x: 50,
            y: height - 4 * fontSize,
            size: fontSize,
            font: Helvetica,
            maxWidth: 500,
            color: rgb(0,0,0),
            lineHeight: 20,
        })

        const pdfBytes = await pdfDoc.save()
        download(pdfBytes, "CoverLetter.pdf", "application/pdf");
    }
}

