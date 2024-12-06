<template>
  <div class="homepage">
    <!-- Hero Section -->
    <header class="hero-section d-flex align-items-center">
      <div class="container text-center text-lg-start d-flex justify-content-between flex-column flex-lg-row align-items-center">
        <!-- Text Content -->
        <div class="text-content">
          <h5 class="badge bg-primary text-uppercase py-2 px-4 mb-3">
            Vertrieb • Kommunikation • Kundenerfolg
          </h5>
          <h1 class="display-4 fw-bold mb-3">
            Gemeinsam erreichen wir<br />
            <span class="text-gradient">Ihre geschäftlichen Ziele</span>
          </h1>
          <p class="lead " style="color: azure;">
            Mit umfassender Erfahrung im Account Management unterstütze ich Unternehmen dabei,
             ihre Kundenbasis zu erweitern, Markttrends zu analysieren und innovative Lösungen zu entwickeln,
              die zu nachhaltigem Wachstum führen.
          </p>
          <div class="buttons mt-4">
            <router-link to="/resume" class="btn btn-primary btn-lg me-3">Lebenslauf</router-link>
          </div>
        </div>

        <!-- Image Content -->
        <div class="image-content mt-5 mt-lg-0">
          <img
              src="https://res.cloudinary.com/dw1mdb80s/image/upload/f_auto,q_auto/v1/sev/p2zvdysuukglbmzyhbhh"
              alt="Profilfoto"
              class="img-fluid rounded-circle shadow"
          />
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section class="about-section py-5">
      <div class="container">
        <h2 class="text-primary text-center">Über mich</h2>
        <p class="text-muted text-center mt-3 mx-auto" style="max-width: 700px;">
          Ich bin Sevgi, eine kommunikative und zielorientierte Persönlichkeit. Im Vertrieb liegt meine Stärke darin,
           die richtigen Fragen zu stellen und dadurch passgenaue Lösungen für meine Kunden zu finden. Ich bin überzeugt,
            dass der Schlüssel zum Erfolg in einem selbst liegt – in der Kombination aus Sympathie, Respekt, Verständnis,
             Fleiß und Hartnäckigkeit. Meine Kunden stehen für mich an erster Stelle,
           und durch engagierten Service und stetige Betreuung baue ich langfristige, erfolgreiche Beziehungen auf.
        </p>
        <div class="social-icons mt-4 text-center">
          <a href="https://de.linkedin.com/in/sevgi-ciplak-736412293"  target="_blank" class="text-primary mx-2"><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    </section>

    <div class="contact-section bg-light ">
      <div class="container text-center mb-4">
        <h2 class="text-primary">Kontaktiere mich</h2>
        <div class="row">
          <div class="col">
            <p class="mb-3">E-Mail:</p>
        <a href="mailto:sevgiciplak@outlook.de" class="btn btn-outline-primary">
          sevgiciplak@outlook.de
        </a>
          </div>
          <div class="col">
            <p class="mb-3">Telefonnummer:</p>
            <a href="tel:01711268338" class="btn btn-outline-primary">
          +49 171 126 8338
        </a>
          </div>
        </div>
        
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
/* Hero Section */
.hero-section {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  padding: 100px 0;
}

.hero-section .text-content {
  max-width: 600px;
}

.hero-section .text-content h1 {
  line-height: 1.4;
}

.hero-section .image-content img {
  border: 5px solid white;
}

/* Gradient Text */
.text-gradient {
  background: linear-gradient(45deg, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  color: transparent;
}

/* Buttons */
.buttons .btn {
  padding: 10px 30px;
  font-size: 18px;
}

/* About Section */
.about-section {
  background-color: #f9f9f9;
}

.about-section h2 {
  font-size: 28px;
  font-weight: bold;
}

.about-section p {
  line-height: 1.8;
}

.social-icons a {
  transition: transform 0.3s ease;
}

.social-icons a:hover {
  transform: scale(1.2);
}
.hero-section .image-content img {
  width: 400px; /* Genişlik */
  height: 400px; /* Yükseklik */
  object-fit: cover; /* Görüntüyü düzgün kırpma */
  border: 5px solid white; /* Beyaz kenarlık */
  border-radius: 50%; /* Yuvarlak fotoğraf */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Hafif gölge */
}
</style>
