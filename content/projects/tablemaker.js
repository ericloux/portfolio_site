function tablemaker() {
    let content = "";

	content += `
	<div class="table-maker">
	Input: <textarea type="text" id="tabText" width="600px" height="300"></textarea><br>
	<div class="center-content"><input type="checkbox" id="header">Contains Header</div>
	<div class="center-content"><input type="button" id="convertButton" width="100px" value="Convert"></div><br>
	Output:<textarea type="text" id="tableText" spellcheck="false"></textarea>
	<div id="tableSpace"></div></div>

	`;

    document.getElementsByClassName("content")[0].innerHTML = content;

	document.getElementById("convertButton").addEventListener("click", function() {
		let textToParse = document.getElementById("tabText").value;
		let parsedText = "<table>"
		let headerLine = false;

		if (document.getElementById("header").checked) {
			headerLine = true;
			parsedText += "\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th>";
		} else {
			parsedText += "\r\n\t<tr>\r\n\t\t<td>";
		}

		for (let i = 0; i < textToParse.length; i++) {
			switch (textToParse.charCodeAt(i)) {
			case 9:
				while (textToParse.charCodeAt(i) == 9) {
					i++;
				} 
				i--;
				if (headerLine == true) {
					parsedText += "</th>\r\n\t\t\t<th>";
				} else {
					parsedText += "</td>\r\n\t\t<td>";
				}
				break;

			case 10:
				if (headerLine == true) {
					parsedText += "</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tr>\r\n\t\t<td>";
					headerLine = false;
				} else {
					parsedText += "</tr>\r\n\t<tr>\r\n\t\t<td>";
				}
				break;

			default:
				parsedText += textToParse[i];
			} 
		}
		parsedText += "</td>\r\n\t</tr>\r\n</table>";
		document.getElementById("tableText").value = parsedText;
		document.getElementById("tableSpace").innerHTML = parsedText;
	});
}

export {tablemaker};