function visibleShare() {
  var x = document.getElementById("hiddenShare");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hideShare() {
  var x = document.getElementById("hiddenShare");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}
function copyUrl() {
  navigator.clipboard.writeText("https://rohitpradhan.com/");
  alert("Copied to clipboard ");
}
function facebook() {
    const url = window.location.href;
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
}
function twitter() {
    const url = window.location.href;
    shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
}
function linkedin() {
    const url = window.location.href;
    shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
}
function pinterest() {
    const url = window.location.href;
    shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
} 
function reddit() {
    const url = window.location.href;
    shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
}
function whatsapp() {
    const url = window.location.href;
    shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
}