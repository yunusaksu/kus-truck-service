document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("success") === "true") {
    // Eğer varsa, Bootstrap Pop-up penceresini otomatik olarak aç
    var myModal = new bootstrap.Modal(document.getElementById("successModal"));
    myModal.show();

    const cleanUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      window.location.hash;
    window.history.replaceState({ path: cleanUrl }, "", cleanUrl);
  }
});
