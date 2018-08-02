var access_denied = window.location.search.includes("error=access_denied")
var has_code = window.location.search.includes("code=")

if (access_denied) {
  alert("Access Denied")
}

if (!has_code) {
  window.close();
}
