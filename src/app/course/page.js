
import CourseCardComponent from "@/components/Card/CourceCardComponent";

export default function Home() {
  return (
    <>
    <main className="mt-[100px]">
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
    </main>
    </>
  );
}
