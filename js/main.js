window.copyPasswordToClipboard = function() {
  copyDivToClipboard("#password");
  $("#copy")[0].innerHTML = "Password copied <i class='fas fa-check'></i>";
  $("#copy").attr("class", "btn btn-success");
}

function copyDivToClipboard(containerid) {
    var range = document.createRange();
    range.selectNode($(containerid)[0]);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

$( document ).ready(function() {
	var hash = decodeURI(window.location.hash.substr(1));
	var split_hash_elements = hash.split("|<-n|p->|");
	console.log(split_hash_elements);
	var network = split_hash_elements[0];
	var password = split_hash_elements[1];
	console.log(network);
	console.log(password);
	$("#network").text(network);
	$("#password").text(password);
});
