import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qabot-app-pricing',
  standalone: true,
  template: ` <section
      class="bg-white
     pt-20
     lg:pt-[120px]
     pb-12
     lg:pb-[90px]
     relative
     z-20
     overflow-hidden"
    >
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span class="font-semibold text-lg text-blue-700 mb-2 block">
                Pricing Table
              </span>
              <h2
                class="font-bold
                    text-3xl
                    sm:text-4xl
                    md:text-[40px]
                    text-dark
                    mb-4"
              >
                Our Pricing Plan
              </h2>
              <p class="text-base text-slate-500">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              class="bg-white
                 rounded-xl
                 relative
                 z-10
                 overflow-hidden
                 border border-blue-700 border-opacity-20
                 shadow-pricing
                 py-10
                 px-8
                 sm:p-12
                 lg:py-10 lg:px-6
                 xl:p-12
                 mb-10"
            >
              <span class="text-blue-700 font-semibold text-lg block mb-4">
                Personal
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                $59
                <span class="text-base text-slate-500 font-medium">
                  / year
                </span>
              </h2>
              <p
                class="text-base text-slate-500
                    pb-8
                    mb-8
                    border-b border-[#F2F2F2]"
              >
                Perfect for using in a personal website or a client project.
              </p>
              <div class="mb-7">
                <p class="text-base text-slate-500 leading-loose mb-1">
                  1 User
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  All UI components
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Lifetime access
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Free updates
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Use on 1 (one) project
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  3 Months support
                </p>
              </div>
              <button
                class="w-full
                    block
                    text-base
                    font-semibold
                    text-blue-700
                    bg-transparent
                    border border-[#D4DEFF]
                    rounded-md
                    text-center
                    p-4
                    hover:text-white hover:bg-blue-700 hover:border-bg-blue-700
                    transition"
              >
                Choose Personal
              </button>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              class="
                 bg-white
                 rounded-xl
                 relative
                 z-10
                 overflow-hidden
                 border border-blue-700 border-opacity-20
                 shadow-pricing
                 py-10
                 px-8
                 sm:p-12
                 lg:py-10 lg:px-6
                 xl:p-12
                 mb-10
                 "
            >
              <span class="text-blue-700 font-semibold text-lg block mb-4">
                Business
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                $199
                <span class="text-base text-slate-500 font-medium">
                  / year
                </span>
              </h2>
              <p
                class="
                    text-base text-slate-500
                    pb-8
                    mb-8
                    border-b border-[#F2F2F2]
                    "
              >
                Perfect for using in a Business website or a client project.
              </p>
              <div class="mb-7">
                <p class="text-base text-slate-500 leading-loose mb-1">
                  5 Users
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  All UI components
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Lifetime access
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Free updates
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Use on 3 (Three) project
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  4 Months support
                </p>
              </div>
              <button
                class="
                    w-full
                    block
                    text-base
                    font-semibold
                    text-blue-700
                    bg-transparent
                    border border-[#D4DEFF]
                    rounded-md
                    text-center
                    p-4
                    hover:text-white hover:bg-blue-700 hover:border-bg-blue-700
                    transition
                    "
              >
                Choose Business
              </button>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              class="
                 bg-white
                 rounded-xl
                 relative
                 z-10
                 overflow-hidden
                 border border-blue-700 border-opacity-20
                 shadow-pricing
                 py-10
                 px-8
                 sm:p-12
                 lg:py-10 lg:px-6
                 xl:p-12
                 mb-10
                 "
            >
              <span class="text-blue-700 font-semibold text-lg block mb-4">
                Professional
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                $256
                <span class="text-base text-slate-500 font-medium">
                  / year
                </span>
              </h2>
              <p
                class="
                    text-base text-slate-500
                    pb-8
                    mb-8
                    border-b border-[#F2F2F2]
                    "
              >
                Perfect for using in a Professional website or a client project.
              </p>
              <div class="mb-7">
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Unlimited Users
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  All UI components
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Lifetime access
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Free updates
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  Use on Unlimited project
                </p>
                <p class="text-base text-slate-500 leading-loose mb-1">
                  12 Months support
                </p>
              </div>
              <button
                class="
                    w-full
                    block
                    text-base
                    font-semibold
                    text-blue-700
                    bg-transparent
                    border border-[#D4DEFF]
                    rounded-md
                    text-center
                    p-4
                    hover:text-white hover:bg-blue-700 hover:border-blue-700
                    transition
                    "
              >
                Choose Professional
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Pricing Section End -->`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {}
