var access_denied = window.location.search.includes("error=access_denied")

if (access_denied) {
  alert("Access Denied")
}
window.close();
