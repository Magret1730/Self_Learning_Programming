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
const PropertyPage = ({ params, searchParams }) => {
    return (
        <div>
            Property Page {params.id}
            {/* <p>{searchParams.name}</p> */}
        </div>
    );
}

export default PropertyPage;