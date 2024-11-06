// json2html.js
export default function json2html(data) {
    // Define table header
    const headers = ["Name", "Age", "Gender"];

    // Generate table HTML
    let html = `<table data-user="navneethan543@gmail.com">`;
    html += "<thead><tr>" + headers.map(header => `<th>${header}</th>`).join("") + "</tr></thead>";
    html += "<tbody>";

    // Generate table rows
    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
            html += `<td>${row[header] || ""}</td>`;  // Use empty string if property is missing
        });
        html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
}
