<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand fw-bold">Personal Site</router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/resume" class="nav-link">Resume</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <main class="flex-grow-1">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-primary text-white text-center py-3 mt-auto">
      <div class="container">
        <p class="mb-0">© 2024 Personal Site. All Rights Reserved.</p>

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  background-color: #f8f9fa; 
  color: #333;
}


footer {
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

footer a:hover {
  text-decoration: underline;
}

a {
  color: inherit;
}

a:hover {
  color: rgba(255, 255, 255, 0.8);
}
</style>
