<template>
  <div class="homepage">
    <!-- Hero Section -->
    <header class="hero-section d-flex align-items-center">
      <div class="container text-center text-lg-start d-flex justify-content-between flex-column flex-lg-row align-items-center">
        <!-- Text Content -->
        <div class="text-content">
          <h5 class="badge bg-primary text-uppercase py-2 px-4 mb-3">
             dolor sit • ipsum amet • Lorem 
          </h5>
          <h1 class="display-4 fw-bold mb-3">
            Lorem ipsum dolor sit amet<br />
            <span class="text-gradient">consectetuer adipiscing elit</span>
          </h1>
          <p class="lead " style="color: azure;">
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
             Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
              sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
          </p>
          <div class="buttons mt-4">
            <router-link to="/resume" class="btn btn-primary btn-lg me-3">Resume</router-link>
          </div>
        </div>

        <!-- Image Content -->
        <div class="image-content mt-5 mt-lg-0">
          <img
              src="https://freesvg.org/img/abstract-user-flat-4.png"
              alt="Profilfoto"
              class="img-fluid rounded-circle shadow"
          />
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section class="about-section py-5">
      <div class="container">
        <h2 class="text-primary text-center">About me</h2>
        <p class="text-muted text-center mt-3 mx-auto" style="max-width: 700px;">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
           nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
             Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
        </p>
        <div class="social-icons mt-4 text-center">
          <a href="https://de.linkedin.com/in/"  target="_blank" class="text-primary mx-2"><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    </section>

    <div class="contact-section bg-light ">
      <div class="container text-center mb-4">
        <h2 class="text-primary">Contact me</h2>
        <div class="row">
          <div class="col">
            <p class="mb-3">E-Mail:</p>
        <a href="mailto:email@email.com" class="btn btn-outline-primary">
          email@email.com
        </a>
          </div>
          <div class="col">
            <p class="mb-3">Telefon Number:</p>
            <a href="tel:1234567890" class="btn btn-outline-primary">
          123 456 7890
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
  width: 400px; 
  height: 400px; 
  object-fit: cover; 
  border: 5px solid white; 
  border-radius: 50%; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
}
</style>
