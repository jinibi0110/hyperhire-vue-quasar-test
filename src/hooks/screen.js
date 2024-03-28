import { useQuasar } from 'quasar'
import { computed } from 'vue'

export default function useScreen () {
  const $q = useQuasar()

	const viewForSmallScreen = computed(() => {
		const screen = $q.screen
		const forXs = screen.xs
		const forSm = screen.sm

		if (forXs || forSm) {
			return true
		}

		return false
	})

	return {
		viewForSmallScreen
	}
}
