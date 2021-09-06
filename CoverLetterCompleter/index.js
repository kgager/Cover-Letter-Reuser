function fillInCompany() {
    const coverLetter = document.getElementById("coverLetter").value;
    const companyName = document.getElementById("companyName").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const updatedCoverLetter = coverLetter
       if(jobTitle.charAt(0).isVowel())
       {
         .replaceAll(' a JOB_TITLE', ' an ' + jobTitle);
       }
        .replaceAll('COMPANY_NAME', companyName)
        .replaceAll('JOB_TITLE', jobTitle);
    document.getElementById("updatedCoverLetter").value = updatedCoverLetter
}

function isVowel(x) {

    var result;

    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
    return result;
}

async function writePDF(letter) {
    if (letter === null || letter === "") {
        alert("No cover letter pasted! Check all text fields.")
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
