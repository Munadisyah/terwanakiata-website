function whatsapp() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var submit = document.getElementById("submit");

  if (!name || !phone || !message) {
    submit.disabled = true;
  } else {
    var url =
      "https://wa.me/6281364496579?text=" +
      "*Kritik atau Saran pada Website Resmi Kampung Terwana Kiata*%0a%0a" +
      "*Nama Pengirim:* " +
      name +
      "%0a" +
      "*No. Telepon/WhatsApp Pengirim:* " +
      phone +
      "%0a" +
      "*Kritik atau Saran Pengirim:* " +
      message;

    window.open(url, "_blank").focus();
  }
  return submit.disabled = false;
}