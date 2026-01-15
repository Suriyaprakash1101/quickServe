



// import React from 'react'
// import Header from './Header'
// import { HiShieldCheck, HiPlusCircle } from "react-icons/hi2";
// import {
//     FaPaintBrush,
//     FaTools,
//     FaBolt,
//     FaFaucet,
//     FaCode,
//     FaClock,
//     FaCalendarWeek,
//     FaCalendarAlt,
//     FaCalendar,
//     FaCheck
// } from "react-icons/fa";

// const Home = () => {
//     return (
//         <div>
//             <Header />

//             {/* HERO SECTION */}
//             <div className="mt-5 flex flex-col items-center text-center bg-blue-100 p-4">
//                 <h1 className="p-6 font-bold text-5xl text-gray-500">
//                     Get Help Fast. Give Service Easily.
//                 </h1>
//                 <p className="pb-4">
//                     Find skilled people near you, Or offer your service and warn money.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button className="bg-blue-400 p-3 border-white border-2 rounded-full text-white">
//                         Get Started
//                     </button>
//                     <button className="bg-white p-3 border-blue-400 border-2 rounded-full text-blue-400">
//                         Offer service
//                     </button>
//                 </div>
//             </div>

//             {/* POPULAR SERVICES */}
//             <div className="pt-7 flex flex-col items-center">
//                 <p className="font-bold text-3xl text-center mb-6">
//                     Popular Services
//                 </p>

//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
//                     <ServiceCard icon={<FaCode />} label="Software & IT" />
//                     <ServiceCard icon={<FaPaintBrush />} label="Design" />
//                     <ServiceCard icon={<HiShieldCheck />} label="Cyber Security" />
//                     <ServiceCard icon={<FaTools />} label="Home Repair" />
//                     <ServiceCard icon={<FaBolt />} label="Electrical" />
//                     <ServiceCard icon={<FaFaucet />} label="Plumbing" />
//                     <ServiceCard icon={<HiPlusCircle />} label="More Services" />
//                 </div>

//                 <p className="flex justify-center p-4">
//                     Choose the service as you need...
//                 </p>
//             </div>

//             {/* HOW IT WORKS */}
//             <div className="bg-gray-50 py-10">
//                 <p className="font-bold text-3xl text-center mb-10">
//                     How It Works
//                 </p>

//                 <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4">
//                     <StepCard
//                         step="1"
//                         title="Search"
//                         desc="Find professionals by service and location quickly"
//                     />
//                     <StepCard
//                         step="2"
//                         title="Choose"
//                         desc="Select the right person based on skills and reviews"
//                     />
//                     <StepCard
//                         step="3"
//                         title="Pay"
//                         desc="Agree on hourly, daily, or monthly payment terms"
//                     />
//                     <StepCard
//                         step="4"
//                         title="Done"
//                         desc="Work completed, review the service and provider"
//                     />
//                 </div>
//             </div>

//             {/* INFO STRIP */}
//             <div className="bg-blue-100 p-7 text-center">
//                 <p>
//                     QuickServe connects people who need help with people who can help.
//                 </p>
//             </div>

//             {/* FLEXIBLE PAYMENT */}
//             <div className="bg-white py-10">
//                 <p className="text-center font-bold text-3xl mb-8">
//                     Flexible Payment
//                 </p>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center px-4">
//                     <PaymentCard
//                         icon={<FaClock />}
//                         title="Hourly"
//                         desc="Ideal for small tasks and quick fixes"
//                     />
//                     <PaymentCard
//                         icon={<FaCalendarWeek />}
//                         title="Daily"
//                         desc="Perfect for one-day projects and assignments"
//                     />
//                     <PaymentCard
//                         icon={<FaCalendar />}
//                         title="Weekly"
//                         desc="Suitable for multi-day jobs requiring focus"
//                     />
//                     <PaymentCard
//                         icon={<FaCalendarAlt />}
//                         title="Monthly"
//                         desc="Best for long-term projects and contracts"
//                     />
//                 </div>
//             </div>

//             {/* WHY CHOOSE */}
//             <div className="py-14 flex items-center justify-center">
//                 <div className="flex flex-col items-center w-full px-4">
//                     <p className="text-center font-bold text-3xl mb-10">
//                         Why Choose QuickServe?
//                     </p>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
//                         <WhyItem title="Easy to use" desc="Our platform is designed for simplicity, connecting you with services in just a few clicks." />
//                         <WhyItem title="Trusted People" desc="Access a community of vetted and highly-rated service providers." />
//                         <WhyItem title="Flexible Pay" desc="Choose payment options that fit your project needs and budget." />
//                         <WhyItem title="Safe Payment" desc="Secure payment system ensures your transactions are protected and reliable." />
//                         <WhyItem title="Nearby Services" desc="Find local experts who are available right in your neighborhood." />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const ServiceCard = ({ icon, label }) => (
//     <div className="w-32 h-32 flex flex-col items-center justify-center border rounded-xl shadow-sm hover:shadow-md transition hover:cursor-pointer">
//         <div className="text-3xl text-blue-400 mb-2">
//             {icon}
//         </div>
//         <p className="text-sm font-medium text-center">{label}</p>
//     </div>
// )

// const StepCard = ({ step, title, desc }) => (
//     <div className="w-74 bg-white p-6 rounded-xl shadow-sm text-center flex flex-col">
//         <div className="mx-auto mb-4 h-10 w-10 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold">
//             {step}
//         </div>
//         <p className="font-semibold mb-2">{title}</p>
//         <p className="text-sm text-gray-600">{desc}</p>
//     </div>
// )

// const PaymentCard = ({ icon, title, desc }) => (
//     <div className="w-56 p-5 flex flex-col items-center text-center border rounded-xl shadow-sm hover:shadow-md transition h-full">
//         <div className="text-3xl text-orange-600 mb-3">
//             {icon}
//         </div>
//         <p className="font-semibold mb-1">{title}</p>
//         <p className="text-sm text-gray-600">{desc}</p>
//     </div>
// )

// const WhyItem = ({ title, desc }) => (
//     <div className="flex items-start gap-3">
//         <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center mt-1">
//             <FaCheck className="text-white text-sm" />
//         </div>
//         <div>
//             <p className="font-semibold">{title}</p>
//             <p className="text-sm text-gray-600">{desc}</p>
//         </div>
//     </div>
// )

// export default Home


import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import { HiShieldCheck, HiPlusCircle } from "react-icons/hi2";
import {
    FaPaintBrush,
    FaTools,
    FaBolt,
    FaFaucet,
    FaCode,
    FaClock,
    FaCalendarWeek,
    FaCalendarAlt,
    FaCalendar,
    FaCheck
} from "react-icons/fa";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Header />

            {/* HERO SECTION */}
            <div className="mt-5 flex flex-col items-center text-center bg-blue-100 p-4">
                <h1 className="p-6 font-bold text-5xl text-gray-500">
                    {t("hero.heading")}
                </h1>
                <p className="pb-4">
                    {t("hero.sub")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-400 p-3 border-white border-2 rounded-full text-white">
                        {t("hero.getStarted")}
                    </button>
                    <button className="bg-white p-3 border-blue-400 border-2 rounded-full text-blue-400">
                        {t("hero.offerService")}
                    </button>
                </div>
            </div>

            {/* POPULAR SERVICES */}
            <div className="pt-7 flex flex-col items-center">
                <p className="font-bold text-3xl text-center mb-6">
                    {t("popularServices.title")}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                    <ServiceCard icon={<FaCode />} label={t("popularServices.softwareIT")} />
                    <ServiceCard icon={<FaPaintBrush />} label={t("popularServices.design")} />
                    <ServiceCard icon={<HiShieldCheck />} label={t("popularServices.cyberSecurity")} />
                    <ServiceCard icon={<FaTools />} label={t("popularServices.homeRepair")} />
                    <ServiceCard icon={<FaBolt />} label={t("popularServices.electrical")} />
                    <ServiceCard icon={<FaFaucet />} label={t("popularServices.plumbing")} />
                    <ServiceCard icon={<HiPlusCircle />} label={t("popularServices.moreServices")} />
                </div>

                <p className="flex justify-center p-4">
                    {t("popularServices.subtitle")}
                </p>
            </div>

            {/* HOW IT WORKS */}
            <div className="bg-gray-50 py-10">
                <p className="font-bold text-3xl text-center mb-10">
                    {t("howItWorks.title")}
                </p>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4">
                    <StepCard
                        step="1"
                        title={t("howItWorks.steps.1.title")}
                        desc={t("howItWorks.steps.1.desc")}
                    />
                    <StepCard
                        step="2"
                        title={t("howItWorks.steps.2.title")}
                        desc={t("howItWorks.steps.2.desc")}
                    />
                    <StepCard
                        step="3"
                        title={t("howItWorks.steps.3.title")}
                        desc={t("howItWorks.steps.3.desc")}
                    />
                    <StepCard
                        step="4"
                        title={t("howItWorks.steps.4.title")}
                        desc={t("howItWorks.steps.4.desc")}
                    />
                </div>
            </div>

            {/* INFO STRIP */}
            <div className="bg-blue-100 p-7 text-center">
                <p>{t("infoStrip")}</p>
            </div>

            {/* FLEXIBLE PAYMENT */}
            <div className="bg-white py-10">
                <p className="text-center font-bold text-3xl mb-8">
                    {t("flexiblePayment.title")}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center px-4">
                    <PaymentCard
                        icon={<FaClock />}
                        title={t("flexiblePayment.hourly.title")}
                        desc={t("flexiblePayment.hourly.desc")}
                    />
                    <PaymentCard
                        icon={<FaCalendarWeek />}
                        title={t("flexiblePayment.daily.title")}
                        desc={t("flexiblePayment.daily.desc")}
                    />
                    <PaymentCard
                        icon={<FaCalendar />}
                        title={t("flexiblePayment.weekly.title")}
                        desc={t("flexiblePayment.weekly.desc")}
                    />
                    <PaymentCard
                        icon={<FaCalendarAlt />}
                        title={t("flexiblePayment.monthly.title")}
                        desc={t("flexiblePayment.monthly.desc")}
                    />
                </div>
            </div>

            {/* WHY CHOOSE */}
            <div className="py-14 flex items-center justify-center">
                <div className="flex flex-col items-center w-full px-4">
                    <p className="text-center font-bold text-3xl mb-10">
                        {t("whyChoose.title")}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                        <WhyItem 
                            title={t("whyChoose.items.easyToUse.title")} 
                            desc={t("whyChoose.items.easyToUse.desc")} 
                        />
                        <WhyItem 
                            title={t("whyChoose.items.trustedPeople.title")} 
                            desc={t("whyChoose.items.trustedPeople.desc")} 
                        />
                        <WhyItem 
                            title={t("whyChoose.items.flexiblePay.title")} 
                            desc={t("whyChoose.items.flexiblePay.desc")} 
                        />
                        <WhyItem 
                            title={t("whyChoose.items.safePayment.title")} 
                            desc={t("whyChoose.items.safePayment.desc")} 
                        />
                        <WhyItem 
                            title={t("whyChoose.items.nearbyServices.title")} 
                            desc={t("whyChoose.items.nearbyServices.desc")} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const ServiceCard = ({ icon, label }) => (
    <div className="w-32 h-32 flex flex-col items-center justify-center border rounded-xl shadow-sm hover:shadow-md transition hover:cursor-pointer">
        <div className="text-3xl text-blue-400 mb-2">{icon}</div>
        <p className="text-sm font-medium text-center">{label}</p>
    </div>
);

const StepCard = ({ step, title, desc }) => (
    <div className="w-74 bg-white p-6 rounded-xl shadow-sm text-center flex flex-col">
        <div className="mx-auto mb-4 h-10 w-10 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold">
            {step}
        </div>
        <p className="font-semibold mb-2">{title}</p>
        <p className="text-sm text-gray-600">{desc}</p>
    </div>
);

const PaymentCard = ({ icon, title, desc }) => (
    <div className="w-56 p-5 flex flex-col items-center text-center border rounded-xl shadow-sm hover:shadow-md transition h-full">
        <div className="text-3xl text-orange-600 mb-3">{icon}</div>
        <p className="font-semibold mb-1">{title}</p>
        <p className="text-sm text-gray-600">{desc}</p>
    </div>
);

const WhyItem = ({ title, desc }) => (
    <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center mt-1">
            <FaCheck className="text-white text-sm" />
        </div>
        <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    </div>
);

export default Home;
