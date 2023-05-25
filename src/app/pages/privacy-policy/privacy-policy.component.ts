import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qabot-app-privacy-policy',
  standalone: true,
  template: `
  <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p class="mb-4">Effective Date: [Insert Date]</p>
        <p class="mb-4">This Privacy Policy describes how [Your Company Name] (also referred to as "we", "us", or "our") collects, uses, and shares information when you use our [website/app/service] (the "Service").</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">1. INFORMATION WE COLLECT</h2>
        <p class="mb-4">When you use our Service, we may collect the following types of information:</p>
        <ul class="list-disc pl-5 mb-4">
            <li><strong>Personal Information</strong>: This can include your name, email address, postal address, phone number, and other information you provide us when you use our Service.</li>
            <li><strong>Usage Information</strong>: This can include information about how you use our Service, such as the pages you visit, the time and duration of your visits, and other information related to your behavior on our Service.</li>
            <li><strong>Device and Technical Information</strong>: This can include information about the device and internet connection you use to access our Service, including your IP address, browser type, and other related information.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">2. HOW WE USE YOUR INFORMATION</h2>
        <p class="mb-4">We use the information we collect for various purposes, including:</p>
        <ul class="list-disc pl-5 mb-4">
            <li>To provide, maintain, and improve our Service.</li>
            <li>To communicate with you, including responding to your comments, questions, and requests.</li>
            <li>To send you technical notices, updates, security alerts, and support and administrative messages.</li>
            <li>To protect, investigate, and deter against fraudulent, unauthorized, or illegal activity.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">3. HOW WE SHARE YOUR INFORMATION</h2>
        <p class="mb-4">We do not sell your personal information to third parties. However, we may share your information in the following situations:</p>
        <ul class="list-disc pl-5 mb-4">
            <li>With service providers, subcontractors, and other third parties we use to support our business.</li>
            <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
            <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of [Your Company Name], our customers, or others.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">4. YOUR CHOICES</h2>
        <p class="mb-4">You have certain choices available to you when it comes toyour information:</p>
        <ul class="list-disc pl-5 mb-4">
            <li><strong>Account Information</strong>: You may review, correct, or modify information associated with your account by logging into your account and updating your profile information or by emailing us at [Your Email Address].</li>
            <li><strong>Cookies</strong>: Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">5. CHANGES TO THIS POLICY</h2>
        <p class="mb-4">We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">6. CONTACT US</h2>
        <p class="mb-4">If you have any questions about this Privacy Policy, please contact us at [Your Email Address].</p>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {}
