import Image from "next/image";

const PropertyHeaderImage = ({ image }) => {
  return ( 
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            // src={`/images/properties/${image}`} // This works for images in the public folder
            src={`${image}`} // This works with cloudinary
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes='100vw'
            // fill
          />
        </div>
      </div>
    </section>
  );
}

export default PropertyHeaderImage;