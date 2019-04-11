<template>
    <nav class="sidebar-nav">
      <div slot="header"></div>
      <ul class="nav nav-pills flex-column">
        <template v-for="(item, index) in site.menu">
          <li class="nav-item" v-if="item.title" :key="index">
            <div class="nav-title">{{item.name}}</div>
          </li>
          <li class="devider" v-else-if="item.divider" :key="index"></li>

          <li
            class="nav-item nav-dropdown"
            :class="{open: item.open}"
            v-else-if="item.children"
            :key="index"
          >
            <div class="nav-link nav-dropdown-toggle" @click="toggle(item)">
              <i :class="item.icon"></i>
              {{item.name}}
              <b-badge v-bind="item.badge" v-if="item.badge">{{item.badge.text}}</b-badge>
            </div>
            <ul class="nav-dropdown-items">
              <li class="nav-item" v-for="child in item.children" :key="child.name">
                <div>
                  <component
                    :exact="child.exact"
                    :to="child.url"
                    :href="child.url"
                    :is="child.external?'a':'router-link'"
                    class="nav-link"
                    active-class="active"
                  >
                    <i :class="child.icon"></i>
                    {{child.name}}
                    <b-badge v-bind="child.badge" v-if="child.badge">{{child.badge.text}}</b-badge>
                  </component>
                </div>
              </li>
            </ul>
          </li>
          <li class="nav-item" v-else :key="index">
            <component
              :exact="item.exact || item.url === '/'"
              :to="item.url"
              :href="item.url"
              :is="item.external?'a':'router-link'"
              class="nav-link"
              active-class="active"
            >
              <i :class="item.icon"></i>
              {{item.name}}
              <b-badge v-bind="item.badge" v-if="item.badge">{{item.badge.text}}</b-badge>
            </component>
          </li>
        </template>
      </ul>
      <slot></slot>
    </nav>
</template>
<script>

import { mapState } from "vuex";
export default {
  name: "sidebar",

  computed: {
    ...mapState(["auth", "site"])
  },
  methods: {
    toggle(item) {
      this.$set(item, "open", !item.open);
    }
  }
};
</script>

<style lang="scss">
.sidebar {
  z-index: 999;
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 100vh;
  overflow: auto;
  letter-spacing: 1px;
  padding: 1rem;

  .site-logo {
    // border-radius: 1rem;
    // min-height:3em;
  }

  .nav-link {
    color: #666;
    display: flex;
    align-items: center;
    padding: 0.7rem 1rem;
    // border-radius: 2rem;
    // font-weight: 400;

    &:hover,
    &.active {
      // color: #333;
      // background: #eee;
    }
    i {
      margin-right: 1rem;
    }
  }
  .nav-title {
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #ced4da;
    padding: 1rem 1rem 0.5rem 0;
  }
}
</style>
