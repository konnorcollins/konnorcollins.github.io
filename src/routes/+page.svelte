<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="column">
	<img id="profile" class="pulse" src="assets/about/profile.jpeg" />
	<!-- pulse animation lifted from https://codepen.io/saigowthamr/pen/PowdZqy , MIT license-->
	<br />

	<div id="attention-grabber">
		<span class="bounce">&rarr;</span>
		<a href={resolve('/about')}>Resume</a>
	</div>

	<!-- Something could go here? -->
	<br />
	<br />
	<p>Welcome! This site is still under construction, please pardon the clutter!</p>
</div>

<style>
	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#profile {
		width: 10em;
		border-radius: 100%;
	}

	#attention-grabber > span {
		font-size: 24px;
	}

	#attention-grabber > a {
		font-size: 24px;
	}

	.pulse {
		animation: pulse-animation 2s infinite;
	}

	@keyframes pulse-animation {
		0% {
			box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
		}
		100% {
			box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
		}
	}

	.bounce {
		animation: bounce 2s infinite;
		float: left;
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateX(0);
		}
		40% {
			transform: translateX(-30px);
		}
		60% {
			transform: translateX(-15px);
		}
	}
</style>
