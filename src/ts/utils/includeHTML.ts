function includeHTML(file: string) {
  const includeElm: HTMLDivElement = document.querySelector(`*[include-html='${file}']`)
  if (file) {
    const xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) { includeElm.outerHTML = this.responseText; }
      }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
    return;
  }
}

export default includeHTML;