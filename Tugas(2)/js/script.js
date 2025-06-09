function handleSubmit() {
  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const message = document.getElementById("messageText").value.trim();
  const genderEls = document.getElementsByName("gender");
  let gender = "";

  for (let el of genderEls) {
    if (el.checked) {
      gender = el.value;
      break;
    }
  }

  // Validasi sederhana
  if (!name || !birthdate || !gender || !message) {
    alert("Mohon lengkapi semua kolom sebelum mengirim.");
    return false;
  }

  const now = new Date();
  const currentTime = now.toLocaleString(); // Bisa diganti dengan .toString()

  const outputHTML = `
    <p><strong>Waktu saat ini:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  document.getElementById("outputBox").innerHTML = outputHTML;

  return false; // Mencegah form reload
}
