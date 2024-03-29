
import CourseCardComponent from "@/components/Card/CourceCardComponent";
import ContentCardComponent from "@/components/Card/ContentCardComponent";;
import CarouselComponent from "@/components/Carousel/CarouselComponent";

export default function Home() {
  return (
    <>
    <main className="mt-[55px]">
      <CarouselComponent/>
        <h2 className="text-3xl font-bold my-10 ml-[200px]">Cources</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto w-max">
        <CourseCardComponent/>  
        <CourseCardComponent/>
        <CourseCardComponent/>
        <CourseCardComponent/>
        <CourseCardComponent/>
        <CourseCardComponent/>
        <CourseCardComponent/>  
        <CourseCardComponent/>
        </section>
        <h2 className="text-3xl font-bold my-10 ml-[200px]">Useful Contents</h2>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto w-max">
        <ContentCardComponent/>
        <ContentCardComponent/>
        <ContentCardComponent/>
        <ContentCardComponent/>
        </section>
    </main>
    </>
  );
}
