import './Header.css'

function Header({ cartTotal, total }) {
    return (
        <header>
        <h1>My Shop</h1>
        <nav>
            <a href="#">Home</a> 
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <span>🛒 {cartTotal} - ${total}</span>
    </header>    
    )
}

export default Header