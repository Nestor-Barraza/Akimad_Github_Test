const token = localStorage.getItem('tokenGithub');
const headers = {
  'Accept': 'application/vnd.github.v3+json',
  'Content-Type': 'application/json'
}
if (token) headers.Authorization = `Bearer ${token}`

export const fetchData = async (uri) => {
  try {
    const responseAPI = await fetch(
      `https://api.github.com${uri}`, {
      method: 'GET',
      headers
    })
    if (responseAPI.status === 401) {
      localStorage.setItem("tokenGithub", "");
      alert("Token invalido o expirado.");
      window.location.reload();
    }
    return responseAPI.json();
  } catch (error) {
     console.log(error)
  }  
};


