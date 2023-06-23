import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div id='navbar'>
            <header>
                <div>
                    <Link to='/'>
                        my list
                    </Link>
                    <Link to='/add-todo'>
                        add item
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar