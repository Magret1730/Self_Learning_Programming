// CLIENT COMPONENT
// 'use client';  
// import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

// const PropertyPage = () => {
//     const router = useRouter();
//     // console.log(router);
//     const params = useParams();
//     const searchParams = useSearchParams();
//     const pathname = usePathname();

//     return (
//         <div>
//             <h1>Property Page</h1>

//             <h3>Property Page { params.id }</h3>

//             <p>Property Page { searchParams.get('name') }</p>

//             <p>Property Page { pathname }</p>

//             <button onClick={ () => router.replace('/') }>Go Home</button>
//         </div>
//     );
// }

// export default PropertyPage;


// SERVER COMPONENT
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyImages from "@/components/PropertyImages";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { convertToSerializableObject } from "@/utils/convertToObject";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButtons from "@/components/ShareButtons";
import PropertyContactForm from "@/components/PropertyContactForm";

const PropertyPage = async ({ params }) => {
    await connectDB();

    const param = await params;

    const propertyDoc = await Property.findById(param.id);

    const property = JSON.parse(JSON.stringify(propertyDoc));
    // const property = convertToSerializableObject(propertyDoc);
    if (!property) {
      return (
        <h1 className="text-center text-2xl font-bold mt-10">Property Not Found</h1>
      )
    }

    return (
      <>
        <PropertyHeaderImage image={property.images[0]} />
        <section>
          <div className="container m-auto py-6 px-6">
            <Link
              href="/properties"
              className="text-blue-500 hover:text-blue-600 flex items-center"
            >
              <FaArrowLeft className="mr-2"/> Back to Properties
            </Link>
          </div>
        </section>
        <section className="bg-blue-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
              <PropertyDetails property={property}/>
              <aside className="space-y-4">
                <BookmarkButton property={property}/>
                <ShareButtons property={property}/>
                <PropertyContactForm property={property}/>
              </aside>
            </div>
          </div>
        </section>
        <PropertyImages images={property.images} />
      </>

    );
}

export default PropertyPage;