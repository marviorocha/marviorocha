<template>


  <section id="contact" class="py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-neutral mb-6">{{ strings.contact.title }}</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p class="mb-6">
            {{ strings.contact.description }}
          </p>

          <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
              </path>
            </svg>
            <span>marviorocha@marviorocha.com</span>
          </div>

          <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
              </path>
            </svg>
            <span><a target="_blank" href="https://wa.me/5522992058166?text=Falar%20com%20Marvio%20Rocha">+55 (22)
                99205-8166</a></span>
          </div>
        </div>

        <form id="contact-form" class="flex flex-col gap-4" @submit.prevent="submitForm" :action="formspreeUrl"
          method="POST">
          <div class="form-control">
            <input v-model="formData.name" type="text" name="name" :placeholder="strings.contact.label_name"
              class="input w-full input-bordered" :class="{ 'input-error': errors.name }" />
            <span v-if="errors.name" class="text-error text-sm mt-1">{{ errors.name }}</span>
          </div>

          <div class="form-control">


            <input v-model="formData.email" type="email" name="email" :placeholder="strings.contact.label_email"
              class="input w-full input-bordered" :class="{ 'input-error': errors.email }" />
            <span v-if="errors.email" class="text-error text-sm mt-1">{{ errors.email }}</span>

          </div>

          <div class="form-control">
            <textarea v-model="formData.message" name="message" :placeholder="strings.contact.label_mensagem"
              class="textarea w-full textarea-bordered" :class="{ 'textarea-error': errors.message }"
              rows="5"></textarea>
            <span v-if="errors.message" class="text-error text-sm mt-1">{{ errors.message }}</span>
          </div>

          <button type="submit" class="btn cursor-pointer btn-primary" :disabled="isSubmitting">
            <span v-if="isSubmitting">Enviando...</span>
            <span v-else>{{ strings.contact.button }}</span>
          </button>

          <div v-if="formStatus.success" class="alert flex gap-2 alert-success mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {{ strings.contact.sucess }}

          </div>

          <div v-if="formStatus.error" class="alert alert-error flex gap-2 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>

            {{ strings.contact.error }}
          </div>
        </form>
      </div>
    </div>
  </section>


</template>
<script setup>
import { ref, reactive } from 'vue'
const props = defineProps({
  strings: Object
});
const formspreeUrl = "https://formspree.io/f/marviorocha@marviorocha.com"

const formData = reactive({
  name: "",
  email: "",
  message: ""
})

const errors = reactive({
  name: "",
  email: "",
  message: ""
})

const isSubmitting = ref(false)
const formStatus = reactive({
  success: false,
  error: false
})

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateForm = () => {
  let isValid = true;
  errors.name = "";
  errors.email = "";
  errors.message = "";

  if (!formData.name.trim()) {
    errors.name = "O nome é obrigatório";
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = "O email é obrigatório";
    isValid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = "Por favor, insira um email válido";
    isValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = "A mensagem é obrigatória";
    isValid = false;
  }

  return isValid;
}

const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  formStatus.success = false;
  formStatus.error = false;

  try {
    const response = await fetch(formspreeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      formStatus.success = true;
      formData.name = "";
      formData.email = "";
      formData.message = "";
    } else {
      formStatus.error = true;
    }
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    formStatus.error = true;
  } finally {
    isSubmitting.value = false;
  }
}
</script>