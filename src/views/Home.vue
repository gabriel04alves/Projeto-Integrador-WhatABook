<template>
  <v-container pa-8 fluid>
    <h1 class="h1">WhatABook</h1>

    <v-divider></v-divider>
    <v-container pa-8 fluid>
        <v-row >
            <v-col>
                <h2 class="py-4">Em destaque</h2>
                <v-row>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://github.com/Veenturini/ProjetoIntegrador/blob/main/old_login/images/LogoBook.png?raw=true" height="200px"></v-img>
        <v-card-title>
        Titulo
        </v-card-title>
        <v-card-subtitle>
        Subtitulo
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem condimentum, semper erat et, blandit nibh."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://images-na.ssl-images-amazon.com/images/I/61owA5ey3iL._SX324_BO1,204,203,200_.jpg" height="200px"></v-img>
        <v-card-title>
        A revolução dos bichos
        </v-card-title>
        <v-card-subtitle>
         George Orwell (Autor)
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://images-na.ssl-images-amazon.com/images/I/51feD87yuEL._SX321_BO1,204,203,200_.jpg" height="200px"></v-img>
        <v-card-title>
        1984
        </v-card-title>
        <v-card-subtitle>
         George Orwell (Autor)
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://images-na.ssl-images-amazon.com/images/I/51VJAhhUsHL._SX332_BO1,204,203,200_.jpg" height="200px"></v-img>
        <v-card-title>
        Homenagem à Catalunha
        </v-card-title>
        <v-card-subtitle>
         George Orwell (Autor)
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "George Orwell foi um dos escritores que, como Hemingway e Saint-Exupéry, lutou pela República na Guerra Civil Espanhola; o que viu ali marcaria a sua defesa radical da liberdade, refletida nas obras Revolução dos bichos e 1984."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    
    
    
    </v-col>
    </v-row>
    </v-col>
    </v-row>
    </v-container>
    <v-container pa-8 fluid>
        <v-row><h2 class="py-4">Indicações</h2></v-row>
        <v-row>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://github.com/Veenturini/ProjetoIntegrador/blob/main/old_login/images/LogoBook.png?raw=true" height="200px"></v-img>
        <v-card-title>
        Titulo
        </v-card-title>
        <v-card-subtitle>
        Subtitulo
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem condimentum, semper erat et, blandit nibh."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://github.com/Veenturini/ProjetoIntegrador/blob/main/old_login/images/LogoBook.png?raw=true" height="200px"></v-img>
        <v-card-title>
        Titulo
        </v-card-title>
        <v-card-subtitle>
        Subtitulo
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem condimentum, semper erat et, blandit nibh."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://github.com/Veenturini/ProjetoIntegrador/blob/main/old_login/images/LogoBook.png?raw=true" height="200px"></v-img>
        <v-card-title>
        Titulo
        </v-card-title>
        <v-card-subtitle>
        Subtitulo
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem condimentum, semper erat et, blandit nibh."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://github.com/Veenturini/ProjetoIntegrador/blob/main/old_login/images/LogoBook.png?raw=true" height="200px"></v-img>
        <v-card-title>
        Titulo
        </v-card-title>
        <v-card-subtitle>
        Subtitulo
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem condimentum, semper erat et, blandit nibh."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
        </v-row>
    </v-container>
        <v-container pa-8 fluid>
        <v-row><h2 class="py-4">Genero X</h2></v-row>
        <v-row>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://github.com/Veenturini/ProjetoIntegrador/blob/main/old_login/images/LogoBook.png?raw=true" height="200px"></v-img>
        <v-card-title>
        Titulo
        </v-card-title>
        <v-card-subtitle>
        Subtitulo
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem condimentum, semper erat et, blandit nibh."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://github.com/Veenturini/ProjetoIntegrador/blob/main/old_login/images/LogoBook.png?raw=true" height="200px"></v-img>
        <v-card-title>
        Titulo
        </v-card-title>
        <v-card-subtitle>
        Subtitulo
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem condimentum, semper erat et, blandit nibh."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://github.com/Veenturini/ProjetoIntegrador/blob/main/old_login/images/LogoBook.png?raw=true" height="200px"></v-img>
        <v-card-title>
        Titulo
        </v-card-title>
        <v-card-subtitle>
        Subtitulo
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem condimentum, semper erat et, blandit nibh."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
    <v-col>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://github.com/Veenturini/ProjetoIntegrador/blob/main/old_login/images/LogoBook.png?raw=true" height="200px"></v-img>
        <v-card-title>
        Titulo
        </v-card-title>
        <v-card-subtitle>
        Subtitulo
        </v-card-subtitle>
        <v-card-actions>
        <v-btn color="orange lighten-2" text>Mais</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem condimentum, semper erat et, blandit nibh."
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    </v-col>
        </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>

<style>

</style>