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
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    occupation: document.getElementById("occupation").value,
    type: document.getElementById("type").value,
    contact: document.getElementById("contact").value,
  };

  const serviceID = "service_jzdfcs2";
  const templateID = "template_wv2kx8k";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("type").value = "";
        document.getElementById("occupation").value = "";
        console.log(res);
        alert("Your message sent successfully!!")
        window.location.replace("https://rohitpradhan.com/payment.html");

    })
    .catch(err=>console.log(err));

}