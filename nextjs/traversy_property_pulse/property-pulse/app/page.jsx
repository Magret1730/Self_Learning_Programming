// import Link from "next/link";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

const HomePage = () => {
    return (
        <div>
            {/* <h1 className="text-3xl">Welcome</h1> */}
            {/* <Link href="/properties">Go to Properties</Link> */}
            {/* <Link href="/properties?name=test">Go to Properties</Link> */}
            {/* <Link href={{
                pathname: 'properties',
                query: { name: 'test' },
            }}>
                Go to Properties
            </Link> */}

            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </div>
    );
}

export default HomePage;