
function fillInCompany() {
    const coverLetter = document.getElementById("coverLetter").value;
    const companyName = document.getElementById("companyName").value;
    const updatedCoverLetter = coverLetter.replaceAll('🤑', companyName);
    document.getElementById("updatedCoverLetter").value = updatedCoverLetter
}

function writePDF(letter) {
    console.log(jspdf)
    const doc = new jspdf.jsPDF({
        format: [100, 100]
    })
    doc.text(letter, 1, 1, 0, 1);
    doc.save("coverLetter.pdf");
}


