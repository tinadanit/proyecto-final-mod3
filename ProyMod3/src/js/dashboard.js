import '../style/dashboard.css'

function displayToken() {

    const token = localStorage.getItem("token");
  
    if (token) {
      console.log(token);
    } else {
      console.log("no hay token");
    }

  }
  
displayToken();
  
document.getElementById("logoutButton").addEventListener("click", () => {
  sessionStorage.removeItem("token");
  window.location.href = "/index.html";
});