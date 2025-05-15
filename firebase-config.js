<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAROT4K5u0QhJt4XEacwlYPkVCQ5nbf48A",
    authDomain: "edu-site-bd865.firebaseapp.com",
    projectId: "edu-site-bd865",
    storageBucket: "edu-site-bd865.firebasestorage.app",
    messagingSenderId: "726600217473",
    appId: "1:726600217473:web:4fb293375b92f42209ae80",
    measurementId: "G-VQEQQRYXVC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
