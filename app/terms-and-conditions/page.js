"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white px-6  pb-10 pt-25">
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Terms & Conditions
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Please read these Terms and Conditions carefully before using CSW
          services. By accessing or using our services, you agree to be bound
          by these Terms.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid gap-8 px-6 lg:px-0">
        {/* 1. Introduction */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">Introduction</h3>
          <p className="text-gray-400 text-sm">
            Welcome to CSW. By accessing our website and using our services, you
            agree to comply with these Terms and Conditions. Please read them
            carefully before using our services.
          </p>
        </div>

        {/* 2. Services */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          <p className="text-gray-400 text-sm">
            CSW provides Web Development, App Development, Software Development,
            UI/UX Design, Digital Marketing, Graphic Design, Research, and
            Analytics services. All services are subject to these Terms.
          </p>
        </div>

        {/* 3. User Responsibilities */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">User Responsibilities</h3>
          <p className="text-gray-400 text-sm">
            Users must provide accurate information and use our services
            responsibly. You must not misuse our services or attempt to gain
            unauthorized access.
          </p>
        </div>

        {/* 4. Payment and Billing */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">Payment and Billing</h3>
          <p className="text-gray-400 text-sm">
            To get started, the client has to advance 40% of the entire project
            fee and the rest after completion (Mutually Agreed). The payment has
            to be made within 3 days of the invoice date. Failure to pay may
            cost additional fees or even project termination and seizure of
            project assets.
          </p>
        </div>

        {/* 5. Intellectual Property */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">Intellectual Property</h3>
          <p className="text-gray-400 text-sm">
            All intellectual property created by CSW, including code, designs,
            and content, remains the property of CSW unless explicitly
            transferred through a contract.
          </p>
        </div>

        {/* 6. Limitation of Liability */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">
            Limitation of Liability
          </h3>
          <p className="text-gray-400 text-sm">
            CSW shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services. Our
            total liability is limited to the fees paid for the services.
          </p>
        </div>

        {/* 7. Privacy Policy */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
          <p className="text-gray-400 text-sm">
            We respect your privacy. Please refer to our Privacy Policy for
            details on how we collect, use, and protect your personal
            information.
          </p>
        </div>

        {/* 8. Changes to Terms */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">Changes to Terms</h3>
          <p className="text-gray-400 text-sm">
            CSW may update these Terms at any time. Continued use of our
            services after changes constitutes acceptance of the updated Terms.
          </p>
        </div>

        {/* 9. Project Terms */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">Project Terms</h3>
          <p className="text-gray-400 text-sm">
            The project has to be completed within the mutually agreed timeline.
            If the client extends the project timeline for whatever reason, that
            should be agreed upon mutually. If not agreed by us, we may
            terminate the project, seize the project assets (developed by us)
            and may not return the advance fee (if the incident happens within
            15 days of the project&apos;s start).
          </p>
        </div>

        {/* 10. Governing Law */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          <h3 className="text-xl font-semibold mb-2">Governing Law</h3>
          <p className="text-gray-400 text-sm">
            These Terms are governed by the laws of the jurisdiction in which
            CSW operates. Any disputes will be resolved under these laws.
          </p>
        </div>
         {/* 11. Refund and Return */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            }}
          />
          
          <h3 className="text-xl font-semibold mb-2">Refund and Return</h3>
<p className="text-gray-400 text-sm mb-3">
  We provide a 15-day refund policy, but there are some terms.
</p>
<ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
  <li>
    The 3rd party products (Domain, Hosting, Business Email, App Publishing etc.)
   won&apos;t be refunded.
  </li>
  <li>
    To avail a refund client has to inform within 15 days from the project starting
    period. The payment will be sent to the client within 30 days of the date the
    claim is made.
  </li>
  <li>
    The project assets developed by us won&apos;t be provided but contents or assets
    provided to us by the client will be returned.
  </li>
</ul>

        </div>
      </section>
    </div>
  );
}
