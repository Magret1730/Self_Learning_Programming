import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl">Welcome</h1>
            <Link href="/properties">Go to Properties</Link>
            {/* <Link href="/properties?name=test">Go to Properties</Link> */}
            {/* <Link href={{
                pathname: 'properties',
                query: { name: 'test' },
            }}>
                Go to Properties
            </Link> */}
        </div>
    );
}

export default HomePage;