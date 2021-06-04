import { render, screen } from '@testing-library/vue'
import Navbar from '@/components/Navbar.vue'

describe('Navbar', () => {
    it('renders navbar on initial load', () => {

        const $navbar = render(Navbar)

        expect($navbar.toBeInTheDocument)
    })
})