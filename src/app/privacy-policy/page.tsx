import { marked } from 'marked';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import remark from 'remark';
import html from 'remark-html';

const privacyPolicyContent = `
# Privacy Policy
<br/>

## Last updated: March 28, 2024
<br/>

### Introduction
<br/>

At Imara.Tv, we are committed to protecting your privacy and ensuring the security of your information. This Privacy Policy outlines how we collect, use, and disclose your information when you use our Service. By using Imara.Tv, you agree to the terms of this Privacy Policy.
<br/>

### Interpretation and Definitions
<br/>

In this Privacy Policy, certain terms are defined to provide clarity:
<br/><br/>

- **-Account**: A unique account created for you to access our Service.
- **-Affiliate**: An entity that shares common ownership with us.
- **-Company**: Refers to Imara Digital Media Foundation Limited.
- **-Cookies**: Small files placed on your device to track browsing history.
- **-Country**: Refers to Kenya.
- **-Device**: Any device capable of accessing our Service.
- **-Personal Data**: Information relating to an identified or identifiable individual.
- **-Service**: Refers to the Imara.Tv website.
<br/><br/>

### Collecting and Using Your Personal Data
<br/>

We collect and use various types of data to improve and maintain our Service. This may include:
<br/>

- **-Personal Data**: Information such as your email address, first name, and last name.
- **-Usage Data**: Information about your device's interactions with our Service.
- **-Cookies**: Files stored on your device to enhance your browsing experience.
<br/>

### Tracking Technologies and Cookies
<br/>

We use cookies and similar technologies to track activity on our Service and improve user experience. These technologies include cookies, web beacons, and scripts. You can adjust your browser settings to manage cookie preferences.
<br/>

### Use of Your Personal Data
<br/>

We may use your Personal Data for various purposes, including:

- Providing and maintaining our Service.
- Managing your account and registration.
- Communicating with you about updates and promotions.
- Analyzing usage trends and improving our Service.

### Disclosure of Your Personal Data

We may share your personal information in certain situations, including:

- With service providers to facilitate our Service.
- During business transactions such as mergers or acquisitions.
- With affiliates and business partners to offer products or services.
- With your consent or as required by law.

### Retention of Your Personal Data

We retain your Personal Data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. We also retain usage data for internal analysis purposes.

### Transfer of Your Personal Data

Your information, including Personal Data, may be transferred to and processed in locations outside of your jurisdiction. We take steps to ensure your data is treated securely and in accordance with this Privacy Policy.

### Delete Your Personal Data

You have the right to request deletion of your Personal Data. You can manage your information through your account settings or by contacting us directly. Please note that we may need to retain certain information for legal purposes.

### Security of Your Personal Data

While we strive to protect your Personal Data, no method of transmission over the Internet is completely secure. We use commercially acceptable means to safeguard your information.

### Children's Privacy

Our Service is not intended for children under the age of 13 unless the account is created by a guardian of legal age, and we do not knowingly collect personal information from individuals under 13 years of age.

### Links to Other Websites

Our Service may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites and encourage you to review their policies.

### Changes to this Privacy Policy

We may update this Privacy Policy periodically to reflect changes in our practices. We will notify you of any changes by posting the updated policy on our website.

### Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at info[at]imara[dot]tv.

Thank you for entrusting us with your privacy. We appreciate your trust in Imara.Tv!
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