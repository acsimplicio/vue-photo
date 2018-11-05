<template>
	<header class="main-header">
		<router-link class='link' :to="{ name: 'index'}">
			<div class='logo-container'>
				<svg class="cam-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="3.2"/>
					<path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
					<path d="M0 0h24v24H0z" fill="none"/>
				</svg>
				<span>Vue Photo</span>
			</div>
		</router-link>
		<router-link class='link' :to="{ name: 'edit-id'}">
			<button>
				<span>Adicionar foto</span>
				<svg class="add-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
					<path fill="none" d="M0 0h24v24H0V0z"/>
					<path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/>
				</svg>
			</button>
		</router-link>
	</header>
</template>

<script>
  export default {
  }
</script>

<style scoped>
	.link {
		text-decoration: none;
	}

	.main-header {
		background-color: #39c2c7;
		padding: 0 46px;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.main-header button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 135px;
		height: 30px;
		background-color: #187a7e;
		color: white;
		padding: 5px 10px;
		border-radius: 3px;
	}

	.logo-container {
		display: flex;
		align-items: center;
		font-size: 18px;
		color: black;
	}

	.logo-container .cam-icon {
		margin-right: 10px;
		fill: #187a7e;
	}

	.add-icon {
		fill: white;
	}

</style>
