<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import emailjs from '@emailjs/browser';
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  successMessage: boolean;
}
interface SocialLink {
  href: string;
  icon: string[];
  ariaLabel: string;
}
export default {
  name: 'ContactView',
  components: {
    FontAwesomeIcon,
  },
  data(): ContactForm & { socialLinks: SocialLink[] } {
    return {
      socialLinks: [
        {
          href: 'https://www.linkedin.com/in/dominik-takáč-542666322/',
          icon: ['fab', 'linkedin'],
          ariaLabel: 'LinkedIn',
        },
        {
          href: 'mailto:dominik.takac1337@gmail.com',
          icon: ['fas', 'envelope'],
          ariaLabel: 'Email',
        },
        {
          href: 'https://www.github.com/imtaki',
          icon: ['fab', 'square-github'],
          ariaLabel: 'GitHub',
        },
      ],
      name: '',
      email: '',
      subject: '',
      message: '',
      successMessage: false,
    }
  },
  methods: {
    sendEmail(e: Event) {
      try {
        emailjs.sendForm('service_2tqg50d', 'template_jcniw7m', e.target, 'VuBqKM2ImAYO_2t3x', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        })
      } catch (error) {
        console.log(error);
        throw error;
      }
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.successMessage = true;

    },
  }


}
</script>

<template>
  <main>
    <div class="min-h-screen flex items-center">
      <div class="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center md:items-start gap-12">
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-5xl font-bold mb-6">Contact us</h1>
          <p class="text-lg text-gray-400 mb-8">
            We’d love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.
          </p>
          <div class="flex gap-7 justify-center md:justify-start">
            <a
              v-for="link in socialLinks"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
              :aria-label="link.ariaLabel"
              class="w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition-transform"
            >
              <FontAwesomeIcon class="text-5xl" :icon="link.icon" />
            </a>
          </div>
        </div>
          <div class="md:w-1/2 p-8 ">
          <form @submit.prevent="sendEmail">
            <div class="mb-6">
              <label htmlFor="name" class="block text-sm font-medium  text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                v-model="name"
                name="name"
                class="w-full p-3 border bg-gray-300 border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="mb-6">
              <label htmlFor="email" class="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                v-model="email"
                name="email"
                class="w-full p-3 border bg-gray-300 border-gray-300 rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="mb-6">
              <label htmlFor="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                v-model="subject"
                name="subject"
                class="w-full p-3 border border-gray-300 bg-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Subject"
                required
              />
            </div>
            <div class="mb-6">
              <label htmlFor="message" class="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                v-model="message"
                rows="5"
                class="w-full p-3 border border-gray-300 bg-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-3 px-6 border-black  bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
            >
            Send Message
            </button>
            <div v-if="successMessage" class="text-green-500 mt-4">Email sent succesfully!</div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>