// Show Grammar Table
function showGrammarTable() {
    const patterns = [
      "F1_A", "F1_B", "F1_D", "F1_M", "F1_E", "F1_N", "F1_C", "F1_L", "F1_H", "F1_F", "F1_G", "F1_T", "F1_J",
      "F1_K", "F1_S", "F1_R", "F1_I", "F1_P", "F1_Y", "F1_X", "F1_W", "F1_Z", "F1_Zc", "F2_A", "F2_B", "F2_C",
      "F3_A", "F3_B", "F4_A", "F4_B", "F4_D", "F4_G", "F5_A", "F5_B", "F6_A", "F6_B", "F7_A", "F7_B", "F7_C",
      
    ];
  
    document.querySelector('.content').innerHTML = `
      <img src="learning image.png" alt="Learning Image" class="header-image">
      <h1>Grammar</h1>
      <table>
        <thead>
          <tr>
            <th>Pattern</th>
            <th>Verb Pattern Table</th>
          </tr>
        </thead>
        <tbody>
          ${patterns.map(pattern => `
            <tr>
              <td>${pattern}</td>
              <td><a href="#" onclick="viewPattern('${pattern}'); return false;">View</a></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
}


// Open Form in a New Window
function viewPattern(pattern) {
    const newWindow = window.open("", "_blank", "width=500px,height=650px");
    if (!newWindow) {
        alert("Pop-up blocked! Please allow pop-ups for this website.");
        return;
    }
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title> ${pattern} Verb Pattern Table</title>
            <link rel = "stylesheet" href = "foo.css">

            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400..700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">


        </head>
        <body>
            <div id="formsContainer" style="display: flex; align-items: center; border:none" >
            </div>
 
            <script src="declarations.js" charset="utf-8" type="text/javascript"></script>
            <script src="foo.js" charset="utf-8" type="text/javascript"></script>
            <script src="fxnCalls.js" charset="utf-8" type="text/javascript"></script>

        </body>
        </html>
        `);
    newWindow.document.close();

    form = makeForm(pattern, newWindow); 
    // setUpForm(pattern, form); 

}
