<template>
  <v-app>
    <v-navigation-drawer temporary v-model="showDrawer" absolute>
      <v-list dense>
        <v-list-tile v-for="menu in menus" :key="menu.title" router :to="menu.link">
          <v-list-tile-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon 
      @click.native.stop="showDrawer = !showDrawer" 
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">Developers</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="menu in menus" :key="menu.title" router :to="menu.link">
          <v-icon left dark>{{ menu.icon }}</v-icon>
          {{ menu.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      menus : [
        { icon: 'list', title: 'Prodoucts', link: '/products' },
        { icon: 'plus_one', title: 'Add Product', link: '/products/add' },
        { icon: 'lock_open', title: 'Signin', link: '/signin' },
        { icon: 'person_add', title: 'Sign Up', link: '/signup' }
      ],
      showDrawer: false
    }
  },
  name: 'App'
}
</script>
