import Link from 'next/link';
function Navigation() {
    return (
        <div>
            <Link href="/">
                <a>Ana Sayfa</a>
            </Link>
            <Link href="/sade">
                <a>Sade Sayfa</a>
            </Link>
        </div>
    )
}
export default Navigation;
