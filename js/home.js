// const token = localStorage.getItem("token");

// if (!token) {
//   window.location.href = "/index.html";
// } else {
//   try {
//     const parts = token.split(".");
//     const payload = parts[1];
//     const decodedString = atob(payload);
//     const decodedObject = JSON.parse(decodedString);
//     console.log(decodedObject);
//   } catch (error) {
//     console.error("Invalid token:", error);
//     localStorage.clear();
//     window.location.href = "/index.html";
//   }
// }

// const logOut = document.querySelector(".log-out");
// if (logOut) {
//   logOut.addEventListener("click", (event) => {
//     event.preventDefault();
//     localStorage.clear();
//     window.location.href = "/index.html";
//   });
// }

// const topbarClose = document.querySelector(".topbar__close");
// if (topbarClose) {
//   topbarClose.addEventListener("click", () => {
//     const topbar = document.querySelector(".topbar");
//     if (topbar) {
//       topbar.style.display = "none";
//     }
//   });
// }
