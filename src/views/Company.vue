<template>
  <div class="empresa-container">
    <!-- Encabezado de la Empresa -->
    <div class="empresa-header">
      <img
        :src="companyInfo.logo"
        alt="Logo de la Empresa"
        class="empresa-logo"
      />
      <h1 class="empresa-nombre">{{ companyInfo.nombre }}</h1>
      <p class="empresa-descripcion">{{ companyInfo.descripcion }}</p>
    </div>

    <!-- Listado de Empleados -->
    <div class="empleados-section">
      <h2 class="empleados-title">Nuestro Equipo</h2>
      <ul class="empleados-list">
        <li
          v-for="empleado in employeesList"
          :key="empleado.id"
          class="empleado-item"
        >
          <router-link :to="'/' + empleado.id" class="empleado-link">
            {{ empleado.nombre }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import company from "@/data/company.json";
import employees from "@/data/employee.json";

const employeesList = ref([]);

const companyInfo = company[0];
function filter() {
  return employees.filter((employee) => employee.company == company[0].id);
}
filter();
onMounted(() => {
  employeesList.value = filter();
});
</script>

<style scoped>
/* Contenedor principal */
.empresa-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--py-1);
  background: var(--color-c2);
  color: var(--color-b-v2);
  border-radius: var(--br-v2);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
}

/* Encabezado de la empresa */
.empresa-header {
  text-align: center;
  margin-bottom: 2rem;
}

.empresa-logo {
  width: 120px;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 3px solid var(--color-1);
  background: var(--color-w);
  padding: 0.5rem;
}

.empresa-nombre {
  font-size: 2.5rem;
  font-family: "Lilita_One";
  color: var(--color-1-v2);
  margin-bottom: 0.5rem;
}

.empresa-descripcion {
  font-size: 1.2rem;
  font-family: "Poppins";
  color: var(--color-b-v3);
  line-height: 1.6;
}

/* Sección de empleados */
.empleados-section {
  width: 100%;
  background: var(--color-w);
  padding: var(--p-1);
  border-radius: var(--br);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.empleados-title {
  font-size: 1.8rem;
  font-family: "Anton";
  color: var(--color-b);
  text-align: center;
  margin-bottom: 1.5rem;
}

.empleados-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.empleado-item {
  text-align: center;
}

.empleado-link {
  font-size: 1.2rem;
  font-family: "Poppins";
  font-weight: 500;
  color: var(--color-1-v3);
  text-decoration: none;
  transition: color 0.3s, transform 0.2s;
}

.empleado-link:hover {
  color: var(--color-1);
  transform: scale(1.05);
}
</style>
