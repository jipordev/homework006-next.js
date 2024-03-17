import CstadLogo from "@/components/Logo/CstadLogoAboutUs";

export default function Home(){
    return (
        <>
            <main className="mt-[100px]">
                <section className="w-max container mx-auto">
                    <div className="w-[1000px] shadow-sm border-[1px] p-8">
                        <h3 className="tracking-widest text-[18px] font-semibold">_WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?</h3>
                        <p className="mt-3">CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide high-quality training with the latest methodology, and roadmap as well as the best choice for those who want to be an IT expert in Cambodia.</p>
                        <CstadLogo/>
                    </div>
                    <div className="w-[1000px] shadow-sm border-[1px] p-8 mt-14">
                        <h3 className="tracking-widest text-[18px] font-semibold">VISION</h3>
                        <p className="mt-3">Advanced IT Institute in Cambodia</p>
                    </div>
                    <div className="w-[1000px] shadow-sm border-[1px] p-8 mt-14">
                        <h3 className="tracking-widest text-[18px] font-semibold">MISSION</h3>
                        <ul className="list-disc mt-3 ml-6">
                            <li>
                            Provide the latest methodology with high quality training and mentoring
                            </li>
                            <li>
                            Build up the capacity and career of IT experts Cambodia
                            </li>
                            <li>
                            Consult and connect CSTAD trainees to top IT careers
                            </li>
                        </ul>
                    </div>
                    <div className="w-[1000px] shadow-sm border-[1px] p-8 mt-14">
                        <h3 className="tracking-widest text-[18px] font-semibold">SLOGAN</h3>
                        <p className="mt-3">Start your IT Career with CSTAD</p>
                    </div>
                    <h2 className="text-[darkblue] text-center mt-[40px] tracking-widest text-[24px] font-semibold">IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.</h2>
                    <div className="w-[1000px] shadow-sm border-[1px] p-8 mt-14">
                        <p className="mt-3">No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia</p>
                        <p className="mt-3">(+855) 95 990 910 | (+855) 93 990 910</p>
                        <p className="mt-3">Telegram Channel</p>
                        <p className="mt-3">Facebook</p>
                        <p className="mt-3">info.istad@gmail.com</p>
                        <p className="mt-3">www.istad.co</p>
                        <p className="mt-3">YouTube</p>
                    </div>
                </section>
            </main>
        </>
    )
}