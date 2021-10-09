<template>
	<div class="content">
		<router-view @addObjectToScene="addObjectToScene" />
	</div>
</template>

<script>
import animation from "@/mixins/animation";
export default {
	name: "App",
	mixins: [animation],
};
</script>

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
	position: absolute;
	@include full-viewport;
	font-size: 1.6rem;
	color: $color-light-faded;
}
</style>
