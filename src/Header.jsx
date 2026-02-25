import './Header.css'

function Header({ cartTotal }) {
    return (
        <header>
        <h1>My Shop</h1>
        <nav>
            <a href="#">Home</a> 
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <span>🛒 {cartTotal}</span>
    </header>    
    )
}

export default Header