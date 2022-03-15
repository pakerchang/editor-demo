<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";

</script>

<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<div class="switchEditor">
		<router-link to="/Quill">Quill</router-link>
		<router-link to="/Tiptap">Tiptap</router-link>
	</div>
	<div class="viewport">
		<router-view />
	</div>
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.switchEditor {
	margin: 20px 0;
	a {
		margin-right: 15px;
	}
}
</style>
