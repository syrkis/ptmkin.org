<script>
    let address = "Calle Alhazred, 42 — 272314, Uqbar";
    let generalInquiries = "info@ptmkin.org";
    let artistSubmissions = "submissions@ptmkin.org";
    let pressContact = "press@ptmkin.org";
    let website = "www.ptmkin.org";
    let galleryHours = "Open from Monday to Friday, 10:00 AM to 6:00 PM, and Saturday, 11:00 AM to 4:00 PM. Closed on Sundays and public holidays.";
    let director = "Maximilian von Borchert";
    let curator = "Isabella Santiago";
    let galleryManager = "Victor Leblanc";
  </script>
  
  <main>
    <div class='logo-container'>
        <h1 class='logo'>Potemkin<br/>Contemporary</h1>
    </div>
    <div class="container">
      <div class="column">
        <h3>Address</h3>
        <p>{address}</p>
        <h3>Contact</h3>
        <p>
          <strong>General Inquiries:</strong> {generalInquiries}<br>
          <strong>Artist Submissions:</strong> {artistSubmissions}<br>
          <strong>Press Contact:</strong> {pressContact}<br>
          <strong>Website:</strong> <a href={"https://" + website}>{website}</a><br>
        </p>
      </div>
      <div class="column">
        <h3>Gallery Hours</h3>
        <p>{galleryHours}</p>
        <h3>Staff</h3>
        <p>
          <strong>Director:</strong> {director}<br>
          <strong>Curator:</strong> {curator}<br>
          <strong>Gallery Manager:</strong> {galleryManager}<br>
        </p>
      </div>
    </div>
  </main>
  
  <style>
    .logo {
        font-size: 3rem;
        text-align: center;
        padding: 4rem 0 2rem 0;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
      padding: 4rem;
    }
  
    .column {
      flex-basis: 45%;
    }
  
    h1 {
      font-size: 28px;
      margin-bottom: 20px;
      text-align: center;
    }
  
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  </style>
  