import { InstagramIcon, TikTokIcon, XBrandIcon } from '../../icons/icons'
import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="important-documents">
                {/* TODO: Will be replaced with real links */}
                <p>Policy</p>
                <span>&bull;</span>
                <p>Terms of Service</p>
                <span>&bull;</span>
                <p>Terms of Cookies</p>
            </div>
            <p>© 2025 Pull. All Rights Reserved.</p>
            <div className="social-media">
                <InstagramIcon strokeColor='var(--light-color-gray)' />
                <TikTokIcon strokeColor='var(--light-color-gray)' />
                <XBrandIcon strokeColor='var(--light-color-gray)' />
            </div>
        </footer>
    )
}