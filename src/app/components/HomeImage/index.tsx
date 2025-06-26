"use client";

function HomeImage() {
  return (
    <div
      className="w-full h-[30rem] md:h-[40rem] bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/home-image-ex.jpg')",
      }}
    />
  );
}

export default HomeImage;
