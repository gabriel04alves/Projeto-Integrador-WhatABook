<template>
  <v-app>
    <v-app-bar app color="orange lighten-4" elevation="1">
      <v-app-bar-nav-icon @click.stop="sidebar =! sidebar"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-icon>mdi-account</v-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="sidebar" >
      <v-list dense color="orange lighten-4">
        <v-list-item>
          <v-list-item-title>
            <h2 class="what">WhatABook</h2>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
      <v-list-item >
        <v-list-item-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>Faça login</v-list-item-content>
      </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{item.title}}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app class="py-3"><span class="caption">WhatABook &copy;2022</span></v-footer>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      sidebar: false,
      items: [
        { title: "Início", icon:"mdi-book-open-page-variant", to: "/" },
        { title: "Categorias", icon:"mdi-bookshelf", to: "/categorias" },
        { title: "Salvos", icon:"mdi-bookmark-multiple", to: "/salvos" },
        { title: "Resenhas", icon:"mdi-comment-bookmark", to: "/minhas-resenhas" },
        { title: "Perfil", icon:"mdi-clipboard-account ", to: "/perfil" },
        { title: "Configurações", icon:"mdi-tune", to: "/configuracoes" },
        { title: "Sair", icon:"mdi-exit-to-app", to: "/login" },
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.what {
    font-family:  'Poppins', sans-serif;
}
</style>