<template>
<div id="mainapp-wrapper">
	<Bg/>
	<div class="split-flex">
		<SubHeader/>
				<Matches/>
	</div>
	</div>










	<!-- <div class="cta-row">
	<router-link :to="{name: 'Champions'}"  class="btn">
	<a> Champions </a>
	</router-link>
	<router-link :to="{name: 'Goals'}"  class="btn">
	<a> Goals  </a>
	</router-link>
	<router-link :to="{name: 'Shutouts'}"  class="btn">
	<a> Shutouts </a>
	</router-link>


	</div>

</div> -->
</template>

<script>
import Goals from '@/components/Goals'
import Shutouts from '@/components/Shutouts'
import Matches from '@/components/Matches'
import Champions from '@/components/Champions'
import Bg from '@/components/Bg'
import SubHeader from '@/components/SubHeader'

export default {
  name: 'App',
  components: {
		Bg,
		SubHeader,
		Goals,
		Champions,
		Shutouts,
		Matches
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	          font-family: 'Kreon', serif;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: #4D3F3F;
  color:#aaa;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.split-flex  {
display: flex;
	/* min-width: 100vw; */
	justify-content: space-between;
}

</style>
