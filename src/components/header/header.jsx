import Image from "next/image";
import Link from "next/link";

export const Header = () => (
    <header>
        <div className="topNav">
            <Image src={'/images/vercel.svg'} width={50} height={50} alt='Header' />
            <nav >
                <ul>
                    <li>
                        <Link href='/' passHref legacyBehavior>Home </Link>
                    </li>
                    <li>
                        <Link href='/events'>Events </Link>
                    </li>
                    <li>
                        <Link href='/about-us'>About Us </Link>
                    </li>
                </ul>
            </nav>
        </div>
        <p className="title">Lorem ipsum dolor sit amet.</p>
    </header>
)