<template>
  <v-container fill-height fluid text-center>
    <v-container>
      <v-row>
        <v-col class="text-center mx-auto pb-8"  cols="1" sm="4" offset="4">
          <h1 class="h1" >Bem vindo ao WhatABook</h1>
          <h2 class="h2">Seu catálogo de livros para ler e publicar resenhas!</h2>
        </v-col>
      </v-row>
      <v-row class="elevation-3 mx-auto rounded-xl">
        <v-col cols="auto orange lighten-5 rounded-xl rounded-r-0 ">
          <v-img max-height="275" max-width="350" src="@/assets/images/LogoBook.png"></v-img>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <v-form>
            <h2 class="h3">Faça login</h2>
            <v-text-field label="Email" v-model="user.email"></v-text-field>
            <v-text-field
              label="Senha"
              v-model="user.password"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
            ></v-text-field>
            <v-row>
                <v-col>
                    <v-btn color="#C9B79C" @click="login">Login</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <h3 class="h3">Acesse também usando:</h3>
                    <v-icon @click="loginGoogle" color="C9B79C">mdi-google</v-icon>
                </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar color="red" v-model="errorLogin" danger multline timeout="2000">
      Usuário ou senha inválidos
    </v-snackbar>

    <v-dialog v-model="novaConta" persistent max-width="300">
      <v-card>
        <v-card-title>Conta não encontrada.</v-card-title>
        <v-card-text>
          A conta não foi localizada. Deseja criar um nova conta com os dados
          informados?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="criarNovaConta">Sim</v-btn>
          <v-btn color="red darken-1" text @click="novaConta = false"
            >Não</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as fb from "@/plugins/firebase";
export default {
  data() {
    return {
      user: {},
      show: false,
      errorLogin: false,
      novaConta: false,
    };
  },
  methods: {
    reset() {
      this.user = {};
    },
    async loginGoogle() {
        await fb.auth.signInWithPopup(fb.googleProvider)
        this.$router.push({ name: "Home" });
    },
    async login() {
      try {
        await fb.auth.signInWithEmailAndPassword(
          this.user.email,
          this.user.password
        );
        this.$router.push({ name: "Home" });
      } catch (error) {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/wrong-password":
            this.errorLogin = true;
            break;
          case "auth/invalid-email":
            this.errorLogin = true;
            break;
          case "auth/user-not-found":
            this.novaConta = true;
            break;
          default:
            this.errorLogin = true;
            break;
        }
      }
    },
    async criarNovaConta() {
      this.novaConta = false;
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      this.login();
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Poppins:wght@100;200&display=swap');

.h1 {
  font-family:  'Poppins', sans-serif;
  font-size: 36px;
}

.h2 {
  font-family:  'Poppins', sans-serif;
  font-size: 15px;
}

.h3 {
  font-family: 'Nunito', sans-serif;
}

</style>