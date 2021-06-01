import { render } from '@testing-library/vue'
import Navbar from '@/components/Navbar.vue'

describe('Navbar', () => {
    it('renders navbar on initial', () => {
        render(Navbar)
    })
})