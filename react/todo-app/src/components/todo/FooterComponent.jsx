import { AuthContext } from './security/AuthContext'
import { useContext } from 'react';

function FooterComponent() {
    
    const authContext = useContext(AuthContext)

    
    return (
        <footer className="footer">
            <div className="container">
                Your Footer
            </div>
        </footer>
    )
}

export default FooterComponent