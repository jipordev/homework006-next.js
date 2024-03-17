
import JobCardComponent from "@/components/Card/JobCardComponent";

export default function Home() {
  return (
    <>
    <main className="mt-[100px]">
        <h2 className="text-3xl font-bold my-10 ml-[200px]">Useful Contents</h2>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto w-max">
            <JobCardComponent/>
            <JobCardComponent/>
            <JobCardComponent/>
            <JobCardComponent/>
            <JobCardComponent/>
            <JobCardComponent/>
            <JobCardComponent/>
        </section>
    </main>
    </>
  );
}
