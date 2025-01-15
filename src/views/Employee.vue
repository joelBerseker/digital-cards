<template>
  <div class="employee-card">
    <div class="card-header">
      <img :src="empresa.logo" alt="Logo de la Empresa" class="company-logo" />
      <h1>{{ empresa.nombre }}</h1>
    </div>

    <div class="card-body">
      <div class="employee-photo-wrapper">
        <img
          v-if="empleado.foto"
          :src="empleado.foto"
          alt="Foto del Empleado"
          class="employee-photo"
        />
        <div v-else class="photo-placeholder">
          {{ empleado.nombre }}
        </div>
      </div>
      <h2>{{ empleado.nombre }}</h2>
      <p class="position">{{ empleado.puesto }}</p>

      <div class="social-links">
        <a
          v-for="(url, red) in empleado.redes"
          :key="red"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', red]" />
        </a>
      </div>

      <div class="contact-buttons">
        <a :href="`tel:${empleado.telefono}`" class="btn call">📞 Llamar</a>
        <a :href="`mailto:${empleado.correo}`" class="btn email"
          >📧 Enviar Correo</a
        >
        <a
          :href="`https://wa.me/${empleado.whatsapp}`"
          target="_blank"
          class="btn whatsapp"
          >💬 Enviar mensaje</a
        >
      </div>
    </div>

    <div class="card-footer">
      <div class="footer-links">
        <a href="#" class="share">Compartir</a>
        <a href="/" class="web">Web</a>
        <a href="#" class="qr">QR</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import employeesData from "@/data/employee.json";
import companyData from "@/data/company.json";

const route = useRoute();
const empleado = ref({});
const empresa = companyData[0];

onMounted(() => {
  const empleadoId = route.params.empleado;
  empleado.value = employeesData.find((emp) => emp.id == empleadoId);
});
</script>

<style scoped>
.employee-card {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  text-align: center;
  font-family: Arial, sans-serif;
  position: relative;
}

/* Header Styles */
.card-header {
  background: #000000;
  color: #ffd700;
  padding: 20px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.company-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}

/* Body Styles */
.card-body {
  margin-top: -20px;
}

.employee-photo-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 10px; /* Centrar y añadir espacio inferior */
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
}

.employee-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #ffd700;
  margin-bottom: 10px;
  object-fit: cover; /* Recorta la imagen manteniendo las proporciones */
  object-position: center; /* Centra el recorte */
  display: block;
}

h2 {
  font-size: 1.5rem;
  color: #333333;
}

.position {
  color: #777777;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
}

.social-links a {
  font-size: 24px;
  color: #000;
  transition: color 0.3s, transform 0.3s;
}

.social-links a:hover {
  color: #ffd700; /* Color dorado al pasar el cursor */
  transform: scale(1.2); /* Ampliación ligera */
}

/* Contact Buttons */
.contact-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  display: block;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  color: #ffffff;
}

.btn.call {
  background: #007bff;
}

.btn.email {
  background: #28a745;
}

.btn.whatsapp {
  background: #25d366;
}

/* Footer Styles */
.card-footer {
  margin-top: 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.footer-links a {
  text-decoration: none;
  color: #007bff;
  font-size: 0.9rem;
}
</style>
