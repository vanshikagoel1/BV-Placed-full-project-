// const axios = require('axios')

const url = "http://localhost:8000/api/upload/uploadFile";
const fileInput = document.getElementById("resume");
const sid = document.getElementById("sid");
const button = document.getElementById("btn");
let file = null;
fileInput.onchange = () => {
  file = fileInput.files[0];
  // console.log(selectedFile);
};

button.addEventListener("click", () => {
  console.log(file);
  console.log(sid.value);

  const formData = new FormData();
  formData.append("pdf", file);
  console.log("hi")
  sendData(formData)
});

const sendData = async(formData) => {
    console.log("ss")
    try {
        const resp = await axios.post(url+`/${sid.value}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert(resp.data.message);
      } catch (error) {
        alert("Server Error");
        console.error(error);
      }
};