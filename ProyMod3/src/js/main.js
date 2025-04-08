import '../style/main.css'

// MENSAJE ALEATORIO PARA EL H2 

  const messageArr = ["and a lot of effort", "and a lot of creativity", "and a lot of resilience", "and a lot of perseverance", "and a lot of inner work", "and a lot of sorority", "and a lot of focus"];

  const messageShown = document.querySelector("h2");

  const randomIndex = (Math.floor(Math.random() * messageArr.length));

  messageShown.innerText = messageArr[randomIndex];

  const title = document.querySelector("h1");

  title.appendChild(messageShown);

 //URLs

const API_BASE_URL = "https://reqres.in";

// funcion para inicio de sesion

  async function login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (!response.ok) {
        throw new Error("unexpected error");
      } else {
        console.log("Login successful", data);
        sessionStorage.setItem("token", data.token);
        return data.token;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  
  // evento manejador del formulario
  
  document
    .getElementById("logInForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
        
      const email = event.target.email.value;
      const password = event.target.password.value;

      const token = await login(email, password);
  
      if (token) {
        window.location.href = "dashboard.html";
      }
    });
  
  // evento manejador boton redireccion a registro
  
  document.getElementById("showRegister").addEventListener("click", () => {
    window.location.href = "register.html";
  });