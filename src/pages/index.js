import Video from "@/components/atoms/Video";
import Text from "@/components/atoms/Text";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-12 lg:p-20">
      <Text
        header="Digital Experience Design"
        Subheader="In The Age Of Intelligence"
        classNameHeader="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 text-gray-700"
        classNameSubHeader="text-lg md:text-xl lg:text-2xl mt-4 text-teal-700 italic font-serif tracking-wide"
      />
      <div className="flex justify-center items-center w-full max-w-5xl">
        <Video
          path={
            "https://s3-figma-videos-production-sig.figma.com/video/1283745328613488998/TEAM/2ddd/df23/-474c-4e7c-b224-2a6c9032db3e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R307i37CPNfCqSFZ6EpOtdnR-ZCHWyEaiRJCgyV0NtF6B~BOp7gn~McwX-GBvAmKZKvZM8mEZ~48fKLJbWYXdlRHCWur5tE32oK9FPIYwruGMFkKf7KgacpacFZk9Axy4fIoSJI3wzVB78vGXA2TJSJCHRzIXqs-~3RXSz83uxx7ADN9cDHT3suG81yRZ0zyNjrlWHac-IJ-a2-hwhmLnGMEm1qZkXuyW2pQvGU6y9ts51KEYbXgs8SKVpfyLaNrpHpzGZC0abtoaB7~eSHKoNYzcxyTrADK4sVctFlYRXhKjQCPwHnU4~UQ06UpB2TYObiCwZZihv27NQrZSomYqw__"
          }
          className="w-[1337px]  top-[-1477px] left-[-23351px] gap-0 rounded-[35.28px] text-white"
        />
      </div>
    </div>
  );
}
