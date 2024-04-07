import { marked } from 'marked';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import remark from 'remark';
import html from 'remark-html';

const privacyPolicyContent = `
Terms of Use
Last updated: March 28, 2024
Introduction
Welcome to Imara.Tv, where entertainment meets education! We&#39;re thrilled to have you
join our platform and explore the array of services we offer. The following Terms of Service
outline the rules and guidelines for using our website and services. By accessing or using
Imara.Tv, you agree to abide by these Terms.

The Service

Imara.Tv is operated by Imara Digital Media Foundation Limited, and our mission is to host,
distribute, and monetize content created by talented individuals like you. We aim to provide
a platform where creativity thrives and knowledge is shared. By using our Service, you
become part of our vibrant community, contributing to positive change through engaging
content.

Copyright

We respect the rights of content creators and ensure that their work remains their own.
When you create content on Imara.Tv, you retain ownership unless agreed otherwise with a
sponsor. We charge a modest 10% management fee on the net revenue generated from your
content&#39;s production, distribution, and monetization revenue to maintain the platform.

Accounts

Creating an account with us is easy, and we ask that you provide accurate and up-to-date
information. Your account security is important to us, so please safeguard your password
and notify us immediately of any unauthorized access or security breaches.

Links To Other Web Sites

While using Imara.Tv, you may encounter links to third-party websites. We cannot control
the content or policies of these sites and advise you to review their terms and conditions.
We are not liable for any damages resulting from your use of third-party websites.

Termination

We reserve the right to terminate or suspend access to our Service for any reason, but we
hope it never comes to that. If you wish to terminate your account, you can simply stop
using our Service. Certain provisions of these Terms will survive termination to ensure a
fair and transparent process for all parties involved.

Governing Law

These Terms are governed by the laws of Kenya. Our commitment to upholding these Terms
remains steadfast, and any changes will be communicated to you with sufficient notice.

Affiliation

Imara.Tv is dedicated to promoting inclusivity and diversity. We do not tolerate bias or
discrimination based on political, religious, or gender differences in our content or user
interactions.

Changes

We may update these Terms periodically to reflect changes in the law or our services. We&#39;ll
notify you of any changes at least 30 days in advance. Your continued use of our Service
after changes are made constitutes acceptance of the modified Terms.

Contact Us

If you have any questions or concerns about these Terms, please don&#39;t hesitate to reach out
to us at info[at]Imara[dot]tv.
Thank you for choosing Imara.Tv; we&#39;re excited to embark on this journey with you!
`;

export default function PrivacyPolicy() {
    
    return (
        <>
            <Header />
            <main>
                <Container>
                    <div dangerouslySetInnerHTML={{ __html: marked(privacyPolicyContent) }} />
                </Container>
            </main>
            <Footer />
        </>
    );
}