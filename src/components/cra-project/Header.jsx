import Logo from "../../assets/logo.svg";
import MenuBtn from "../../assets/icons/icon-hamburger.svg";
function MobileMenu() {
    return (
        <nav className="hidden" id="mobile-menu">
            <ul className="flex flex-col gap-[1.06rem] text-[#1B1D23] text-[2rem] font-bold leading-10 uppercase pt-[2.44rem] px-12 pb-[2.62rem] absolute top-24 left-8 bg-[#EEEFF4] w-[21.4375rem] h-[14.6875rem]">
                <li><a href="/portfolio " className="cursor-pointer">Portfolio</a></li>
                <li><a href="/about" className="cursor-pointer" >About Us</a></li>
                <li><a href="/contact" className="cursor-pointer" >Contact</a></li>
            </ul>
        </nav>
    );
}
function Header() {
    return (
        <header className="flex justify-between items-center p-8 relative ">
            <div className="flex justify-between items-center gap-[13.12rem]">
                <a href="/" className="">
                    <img src={Logo.src} alt="Arch Logo" />
                </a>
                <button type="button" className="cursor-pointer sm:hidden " id="menu-btn">
                    <img src={MenuBtn.src} alt="Open Menu" />
                </button>
            </div>
            <MobileMenu />
        </header>
    );
}

export default Header;

<script>
        document.addEventListener("DOMContentLoaded", () => {
        const menuBtn = document?.getElementById("menu-btn");
    const mobileMenu = document?.getElementById("mobile-menu");
        menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        });
    });


</script>