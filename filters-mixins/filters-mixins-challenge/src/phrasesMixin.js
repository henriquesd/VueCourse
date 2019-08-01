export default {
    computed: {
		phraseWithCommas() {
			return this.phrase.replace(/\s/g, ',')
		},
		phraseWithLength() {
			return this.phrase.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
}