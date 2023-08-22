<template>
    <div class="container">
        <h1>Bienvenido a la Aplicación de Peluquería</h1>
        <p>Inicia sesión con tu cuenta de Google:</p>
        <button @click="google" id="google-login-button">Iniciar Sesión con Google</button>
    </div>
</template>
<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthStore } from '../stores/token'
export default {
    methods: {
        google() {
            console.log(useAuthStore().token)
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    useAuthStore().addToken(token, user)
                    this.$router.push({ path: '/' })
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });
        }
    }
}
</script>

<style>
.container {
    text-align: center;
}

#google-login-button {
    background-color: #FF5733;
    color: #ffffff;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#google-login-button:hover {
    background-color: #FF3A00;
}
</style>