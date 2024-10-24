const serverUrl = "http://localhost:5000";

function includeHTML() {
  const includeList = document.querySelectorAll('*[include-html]')
  
  includeList.forEach((elm: HTMLDivElement) => {
    const file: string = elm.getAttribute('include-html');
    if (file) {
      const xhttp: XMLHttpRequest = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elm.outerHTML = this.responseText;}
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  })
}

function main() {
  console.log(serverUrl);
  includeHTML();
}

document.addEventListener("DOMContentLoaded", main);
