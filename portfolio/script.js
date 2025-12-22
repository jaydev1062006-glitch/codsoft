// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// RESUME UPLOAD
const resumeUpload = document.getElementById("resumeUpload");
const fileName = document.getElementById("fileName");
const previewBtn = document.getElementById("previewBtn");
const downloadBtn = document.getElementById("downloadBtn");

let resumeURL = "";

resumeUpload.addEventListener("change", () => {
    const file = resumeUpload.files[0];

    if(file && file.type === "application/pdf"){
        fileName.textContent = file.name;
        resumeURL = URL.createObjectURL(file);
        previewBtn.disabled = false;
        downloadBtn.style.display = "inline-block";
        downloadBtn.href = resumeURL;
        downloadBtn.download = file.name;
    } else {
        alert("Only PDF allowed");
        resumeUpload.value = "";
    }
});

// Preview
previewBtn.addEventListener("click", () => {
    if(resumeURL){
        window.open(resumeURL, "_blank");
    }
});
