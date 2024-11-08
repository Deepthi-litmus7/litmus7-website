import React from "react";

const Video = () => {
  const url =
    "https://s3-figma-videos-production-sig.figma.com/video/1283745328613488998/TEAM/2ddd/df23/-474c-4e7c-b224-2a6c9032db3e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R307i37CPNfCqSFZ6EpOtdnR-ZCHWyEaiRJCgyV0NtF6B~BOp7gn~McwX-GBvAmKZKvZM8mEZ~48fKLJbWYXdlRHCWur5tE32oK9FPIYwruGMFkKf7KgacpacFZk9Axy4fIoSJI3wzVB78vGXA2TJSJCHRzIXqs-~3RXSz83uxx7ADN9cDHT3suG81yRZ0zyNjrlWHac-IJ-a2-hwhmLnGMEm1qZkXuyW2pQvGU6y9ts51KEYbXgs8SKVpfyLaNrpHpzGZC0abtoaB7~eSHKoNYzcxyTrADK4sVctFlYRXhKjQCPwHnU4~UQ06UpB2TYObiCwZZihv27NQrZSomYqw__";
  return (
    <div>
      <video
        controls
        className="w-[1337px]  top-[-1477px] left-[-23351px] gap-0 rounded-[35.28px] text-white "
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};
export default Video;
