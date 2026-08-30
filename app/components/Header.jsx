import Link from 'next/link';

function Header() {
    return (
        <div id="header">
            <div id="mainlogo">
                <Link href="/" id="n3p">NIK.</Link>
                <div id="logocontent">
                    <Link href="/nik" className="logobutton">ABOUT ME</Link>
                    <Link href="/photos" className="logobutton">PHOTOS</Link>
                    <Link href="/projects" className="logobutton">PROJECTS</Link>
                </div>
            </div>
    
            <Link href="/contact" className="button">CONTACT ME</Link>
        </div>
    );
}

export default Header;