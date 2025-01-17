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
          <font-awesome-icon :icon="['fab', red]" :class="red" />
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
import { useRouter, useRoute } from "vue-router";
import employeesData from "@/data/employee.json";
import companyData from "@/data/company.json";

const route = useRoute();
const empleado = ref({});
const empresa = ref({});

onMounted(() => {
  const empleadoId = route.params.empleado;
  const foundEmpleado = employeesData.find((emp) => emp.id == empleadoId);
  if (foundEmpleado) {
    empleado.value = foundEmpleado;
    empresa.value = companyData.find(
      (company) => company.id == empleado.value.company
    );
  } else {
    // Redirect to error page if employee not found
    const router = useRouter();
    router.push({
      name: "Error",
    });
  }
});
</script>
<style scoped>
/* Contenedor Principal */
.employee-card {
  max-width: 400px;
  width: 100%; /* Asegúrate de que ocupe todo el ancho disponible en móviles */
  height: 100vh; /* Ocupa toda la altura de la pantalla */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Espaciado para los elementos internos */
  align-items: center;
  padding: 20px;
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  border-radius: var(--br-v2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: var(--color-w);
  font-family: "Poppins", sans-serif;
  position: relative;
  overflow: hidden; /* Oculta cualquier contenido que sobresalga */
}

/* Encabezado */
.card-header {
  flex-shrink: 0; /* Evita que se reduzca al hacer espacio para otros elementos */
  text-align: center;
  padding: 10px 0;
  background: var(--color-2); /* Fondo negro */
  color: var(--color-1); /* Texto dorado */
  width: 100%; /* Ocupa todo el ancho */
  border-top-left-radius: var(--br-v2);
  border-top-right-radius: var(--br-v2);
}

.company-logo {
  width: 120px;
  height: auto;
  margin-bottom: 10px;
}

.card-header h1 {
  font-size: 1.8rem;
  font-family: "Lilita_One", sans-serif;
  color: var(--color-1); /* Dorado */
  margin: 0;
}

/* Foto del Empleado */
.employee-photo-wrapper {
  width: 150px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-w-v3);
}

.employee-photo {
  width: 150px;
  height: 200px;
  margin-bottom: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.card-body {
  flex: 1; /* Hace que ocupe el espacio restante entre el encabezado y el pie */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
}

/* Texto de Información */
h2 {
  font-size: 1.5rem;
  color: var(--color-principal);
}

.position {
  font-size: 1rem;
  color: var(--color-b-v3);
  margin-bottom: 20px;
}

/* Redes Sociales */
.social-links {
  display: flex;
  justify-content: center;
  gap: 15px; /* Espaciado entre íconos */
  margin: 10px 0;
}

.social-links a {
  font-size: 28px; /* Ajusta para móviles */
  color: var(--color-2);
}

.social-links a:hover {
  transform: scale(1.2);
}
.facebook {
  color: #135ca5;
}
.instagram {
  color: #e1306c;
}
.tiktok {
  color: #000;
}
.youtube {
  color: #ff0000;
}
.linkedin {
  color: #0077b5;
}

/* Botones de Contacto */
.contact-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  display: block;
  padding: 10px;
  border-radius: var(--br, 8px);
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  color: var(--color-1);
  transition: background-color 0.3s, transform 0.2s;
}

.btn:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

.btn.call {
  background-color: var(--color-2); /* Rojo */
}

.btn.email {
  background-color: var(--color-2); /* Verde Oscuro */
}

.btn.whatsapp {
  background-color: var(--color-2); /* Verde Claro */
}

/* Footer */
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
  color: var(--color-2);
  font-size: 0.9rem;
}
@media (max-width: 768px) {
  .employee-card {
    max-width: 100%;
    height: 100vh;
    padding: 10px;
    border-radius: 0;
  }

  .company-logo {
    width: 50px;
    height: 50px;
  }

  .employee-photo-wrapper {
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
  }

  .employee-name {
    font-size: 1rem;
    margin-top: 10px;
  }

  .btn {
    font-size: 0.9rem;
    padding: 8px;
  }
}
</style>
