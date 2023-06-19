
const Header = () => {
    return (
        <div className="sticky top-0">
            
            <div className="navbar bg-white font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content shadow-xl bg-base-100 rounded-box w-80 h-auto mx-8 text-center ">
                        <li><a to="/home" className="hover:text-orange-500 mx-auto">Home</a></li>
                        <li><a to="/about" className="hover:btn-error mx-auto">About</a></li>
                        <li><a to="/profile" className="hover:btn-error mx-auto">Profile</a></li>
                        <li><a to="/protfolio" className="hover:btn-error mx-auto">Protfolio</a></li>
                        <li><a to="/testimonial" className="hover:btn-error mx-auto">Testimonial</a></li>
                        <li><a to="/blog" className="hover:btn-error mx-auto">Blog</a></li>
                        <li><a to="/contact" className="hover:btn-error mx-auto">Contact</a></li>
                        
                    </ul>
                    
                    </div>
                        <div className="navbar-center hidden lg:flex">
                        <a className="btn btn-ghost normal-case font-buld text-orange-500 ml-24 text-xl">Protfolio</a>
                        </div>
                </div>
                <div className=" navbar-center hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1">
                    
                        <li><a to="/home" className="hover: text-orange-500 ">Home</a></li>
                        <li><a to="/about" className="hover:link-error ">About</a></li>
                        <li><a to="/profile" className="hover:link-error ">Profile</a></li>
                        <li><a to="/protfolio" className="hover:link-error">Protfolio</a></li>
                        <li><a to="/testimonial" className="hover:link-error">Testimonial</a></li>
                        <li><a to="/blog" className="hover:link-error ">Blog</a></li>
                        <li><a to="/contact" className="hover:link-error">Contact</a></li>
                    
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <a className="btn btn-ghost normal-case text-xl">Protfolio</a>
                </div>
                </div>
                
        </div>
    );
};

export default Header;