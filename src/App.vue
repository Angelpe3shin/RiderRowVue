<template>
    <div class="header">
      <router-link to="/">
          <img alt="BMW Logo" src="@/assets/logo.png" width="70" height="70">
      </router-link>
      BMW 800
    </div>
	<router-view>
		
	</router-view>
  <footer>
    <hr>
    Ангелина Петришин © 2023
  </footer>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  background: #c977f8;
  width: 100%;
}

.hr {
  height: 4px;
}

.logo {
  left: 1000px;
  width: 90px;
  top: 17px;
  z-index: 5;
  position: flex;
}

.menu {
  width: 250px;
}

.menu-fly {
  position: fixed;
}

.link-container {
  margin: 5px;
  display: flex;
}

.link-container a {
  width: auto;
  display: flex;
  align-items: center;
}

.link-container a:hover {
  width: 100%;
}

.center-block {
  display: flex;
}

.content {
  flex-wrap: wrap;
  flex: 1;
}

.bike-container {
  border: 3px rgb(193, 32, 196) solid;
  border-radius: 15px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column-reverse;
  margin: 5px;
}

.bike-container .name {
  border-bottom: 3px gray;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 5px;
}
.bike-container .name:hover {
  background-color: rgb(210, 138, 255);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.image-and-desc {
  display: flex;
  flex: 1;
}

.image-container {
  display: flex;
  align-items: center;
}
.image-container:hover {
  transform: scale(1.5);
}

.image-container img {
  max-width: 250px;
  max-height: 240px;
}

.additional-container {
  display: flex;
  border-top: 1px rgb(210, 138, 255);
}

.additional-container .action {
  flex: 1;
  background-color: rgb(161, 3, 219);
  margin: 1px;
  display: flex;
  justify-content: center;
}

.additional-container .action:first-child {
  border-top-left-radius: 15px;
  background-color: rgb(168, 52, 170);
}

.additional-container .action:last-child {
  border-top-right-radius: 15px;
  background-color: rgb(168, 52, 170);
}

.desc {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-left: 1px red solid;
}

.footer {
  font-size: 10px;
  display: flex;
  justify-content: center;
  color: rgba(185, 188, 179, 0.863);
}

.hot-key-block {
  display: none;
}

.hot-key {
  color: rgb(17, 212, 63);
  background-color: aqua;
  border: dashed red;
}

.main {
  font-size: 30px;
}

.inputtext {
  color: rgb(255, 0, 0);
}

.inputtype {
  color: rgb(177, 4, 245);
  border-color: rgb(131, 3, 170);
}

.page {
  display: none;
}

.page:target {
  display: flex;
}

.motorcycl {
  display: flex;
  flex-wrap: wrap;
}

.interview {
  flex-wrap: wrap;
}

.motorcyclist:target {
  display: flex;
}

.dopmenu {
  display: none;
  font-size: 15px;
  margin-left: 154px;
  top: 135px;
}

.dopmenu:target {
  display: flex;
}

.menu-group .dopmenu {
  display: none;
  position: fixed;
}
.menu-group:hover .dopmenu {
  display: block;
}

.newmotorcyclist {
  border: 2px rgb(180, 34, 165) solid;
  border-radius: 15px;
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 5px;
}
.newmotorcyclist .textmoto {
  overflow: scroll;
  padding: 5px;
  height: 350px;
  border-left: 2px rgb(180, 34, 165) solid;
}

.videochannel:target {
  display: flex;
}

.namemoto {
  border-bottom: 3px gray;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 5px;
}
.namemoto:hover {
  background-color: rgb(209, 29, 237);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.containerrmanual {
  border: 2px rgb(180, 34, 165) solid;
  border-radius: 8px;
  width: 600px;
  display: flex;
}
.containerrmanual .textmanual {
  overflow: scroll;
  padding: 5px;
  height: 350px;
  border-left: 2px rgb(180, 34, 165) solid;
}/*# sourceMappingURL=style.css.map */
</style>