<template>
	<div class="content">
		<router-view />
	</div>
</template>

<style lang="scss">
@import "@/assets/scss/global.scss";

html,
body {
	font-size: 62.5%;
	border: 0;
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}

.content {
	font-size: 1.6rem;
}
</style>
