import {
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Link } from "@nextui-org/react";
import React from "react";
// import { Link } from 'react-router-dom';

const RefundPolicy = (ref) => {
  return (
    <>
      <div className="container_home">
        <section className="home">
          <div className="container">
            <Stack
              direction={["column"]}
              height={["100%"]}
              justifyContent={"center"}
              alignItems="center"
              spacing={["28"]}
            >
              <Heading
                fontSize={["2xl", "3xl", "3xl", "5xl"]}
                fontWeight="bold"
                className="heading_1"
                marginTop={"10"}
              >
                <span>Stockology </span> Securities Pvt. Ltd.
                <Text
                  fontSize={"sm"}
                  fontWeight="medium"
                  textAlign={"center"}
                  my="4"
                >
                  Protects data & information
                </Text>
              </Heading>
            </Stack>
            <Tabs
              borderRadius={"2xl"}
              colorScheme="green"
              w={"100%"}
              textColor="blue.700"
            >
              <TabList>
                <Tab fontWeight={"bold"} w={"50%"}>
                  Refund Policies
                </Tab>
                <Tab fontWeight={"bold"} w={"50%"}>
                  Privacy Policies
                </Tab>
                <Tab fontWeight={"bold"} w={"50%"}>
                  Terms and Conditions
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel px={"20"} textAlign="justify">
                  <Text fontSize={"sm"} my="4">
                    Thank you for choosing{" "}
                    <span className=" font-bold">Stockology</span> for your
                    educational needs. We are committed to providing you with
                    high-quality training and resources to enhance your
                    knowledge of the stock market. Please read and understand
                    our refund policy before enrolling in any of our courses or
                    programs.
                  </Text>
                  <Text fontSize={"sm"} my="4" fontWeight={"bold"}>
                    Refund Policy:
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    All payments made to{" "}
                    <span className=" font-bold">Stockology</span> for courses,
                    programs, workshops, or any other educational offerings are
                    non-refundable. By enrolling in our programs, you
                    acknowledge and accept our no refund policy.
                  </Text>
                  <Text fontSize={"sm"} my="4" fontWeight={"bold"}>
                    Reasons for Non-Refundable Policy:
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    <span className=" font-extrabold">1. </span>
                    The nature of our courses involves the immediate access to
                    valuable course materials and resources upon enrollment.{" "}
                    <br />
                    <span className=" font-extrabold">2. </span> Our instructors
                    invest significant time and effort in creating and
                    delivering content to provide a comprehensive learning
                    experience.
                    <br /> <span className=" font-extrabold">3. </span> Once
                    access to course materials is granted, it cannot be revoked
                    or reclaimed, ensuring that all students have equal access
                    to the resources. <br />{" "}
                    <span className=" font-bold">
                      Cancellation and Transfer:
                    </span>{" "}
                    <br />
                    The nature of our courses involves the immediate access to
                    valuable course materials and resources upon enrollment. Our
                    instructors invest significant time and effort in creating
                    and delivering content to provide a comprehensive learning
                    experience. Once access to course materials is granted, it
                    cannot be revoked or reclaimed, ensuring that all students
                    have equal access to the resources. Cancellation and
                    Transfer:
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    In exceptional cases, if you are unable to attend a course
                    due to unforeseen circumstances, you may request to transfer
                    your enrollment to a future offering of the same course,
                    subject to availability and at the discretion of{" "}
                    <span className=" font-bold">Stockology</span>. Such
                    requests must be made in writing before the course start
                    date.
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"bold"} my="4">
                    Contact Us:
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    If you have any questions or concerns about our refund
                    policy, please feel free to contact our support team at
                    contact support@stockologysecurities.com & +91 8349747038.
                    We are here to assist you.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    Your commitment to learning with{" "}
                    <span className=" font-bold">Stockology</span> is greatly
                    appreciated, and we are dedicated to delivering the best
                    educational experience possible.
                  </Text>
                </TabPanel>
                <TabPanel px={"20"} textAlign="justify">
                  <Text fontSize={"sm"} my="4">
                    STOCKOLOGY SECURITIES PVT LTD would like to thank you for
                    visiting our website. Respecting the Privacy and choices of
                    our online Customers and Visitors is important for us. We
                    hope that the information provided below will address any
                    questions or concerns you may have about Privacy issues.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    Generally, you may anonymously and obtain information about
                    our group Companies, products and services without providing
                    any personal information, such as your phone number or
                    postal or e-mail address.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    In a few sections of our website, we ask you to provide
                    information that will enable us to enhance your site visit
                    or to follow up with you after your visit. It is completely
                    optional for you to participate. For example, we request
                    information from you when you :
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    1. Register with STOCKOLOGY SECURITIES
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    2. Transact on the site.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    3. Provide feedback in an online survey.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    4. Participate in contests or games.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    5. Request your order status.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    6. Subscribe to a newsletter or a mailing list.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    In each of the above instances, we may ask for your name,
                    e-mail address, telephone number, address, login name,
                    password or password validation and other personal
                    information that is needed to register or subscribe you to
                    services or offers.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    The personal information you provide will be kept
                    confidential and used to support our customer relationship
                    with you. We may use the information you provide to inform
                    you of special offers, upgrades and other services that may
                    be of interest to you. We may selectively share your
                    information TradingBells affiliates or other companies may
                    selectively share your information with TradingBells
                    affiliates or other companies and organizations whose
                    products or services we think may be of interest to you. We
                    will, whenever called upon to do so, disclose your personal
                    information to any Government, Central or State, local or
                    public or regulatory authority such as the Securities and
                    Exchanges Board of India (SEBI), Reserve Bank of India (RBI)
                    or such other authority. If you do not want to receive
                    information about special offers, upgrades, newsletter,
                    mailing list from STOCKOLOGY SECURITIES or its affiliates,
                    you will be given the opportunity to “opt out” and we will
                    respect your wishes. The personal data of customers and web
                    site visitors is stored indefinitely and may be collected
                    and processed in one or more data bases maintained directly
                    or indirectly by STOCKOLOGY SECURITIES. By providing
                    personal information to STOCKOLOGY SFCURITIFS vou agree and
                    tinderstand that
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    STOCKOLOGY is not responsible for the privacy practices of
                    non- STOCKOLOGY sites to which STOCKOLOGY SECURITIES or any
                    other STOCKOLOGY SECURITIES website may link. We encourage
                    you to become familiar with the privacy practices of these
                    sites before you provide them with personal information.
                  </Text>
                  {/* <Heading ></Heading> */}
                  <Text fontSize={"sm"} my="4">
                    We may from time to time update this Policy. When we do so,
                    we will post notice of any revisions on this site. We
                    encourage you to review our Privacy Policy whenever you
                    visit our website.
                  </Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                </TabPanel>
                <TabPanel textAlign={"justify"}>
                  <Text fontSize={"sm"} my="4">
                    This section contains the Terms and Conditions of Use of
                    this website. By accessing this website and any of its
                    pages, you are agreeing to these Terms and Conditions. You
                    also agree that Stockology Securities Pvt Ltd can modify or
                    alter the terms and conditions of the use of this service
                    without any liability.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    If you have registered on the Stockology Securities Pvt Ltd
                    website by submitting your contact details, you are
                    authorizing Stockology Securities Pvt Ltd to contact you and
                    send promotional communication even though you may be
                    registered under the National Do Not Call Registry
                    established under the Telecom Unsolicited Commercial
                    Communications Regulations, 2007 or registered or may
                    register under the National Customer Preference Register
                    established under new regulation viz the Telecom Commercial
                    Communications Customer Preference Regulations, 2010.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    1. Stockology Securities Pvt Ltd or any of its affiliates
                    shall not be liable for any misrepresentation,
                    falsification, and deception or for any lack of availability
                    of services through the website, even if the same are
                    advertised on the website.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    2. No judgment or warranty or representation is made with
                    respect to the accuracy, timeliness, or suitability of the
                    content of other services or sites to which these screens
                    link, and Stockology Securities Pvt Ltd shall not be
                    responsible therefore.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    3. Stockology Securities Pvt Ltd shall not be liable if the
                    Customer downloads any information or software from this
                    website. Further, Stockology Securities Pvt Ltd shall not be
                    liable if the Customer makes a copy, modifies, uploads,
                    downloads, transmits, (re) publishes it or removes or
                    obscures any intellectual property, including trademarks,
                    copyright or other notices or legends contained in any such
                    information or otherwise distributes any service or content
                    from this website. Stockology Securities Pvt Ltd shall not
                    bear the responsibility if the Customer modifies or uses the
                    content or services he/she gets from this website for any
                    purpose other than those permitted, and in doing so violates
                    the intellectual property including trademarks, copyright
                    and other proprietary rights of Stockology Securities Pvt
                    Ltd
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    4. The content of the articles and the interpretation of
                    data are solely the personal views of the contributors and
                    do not in any way reflect the views of Stockology Securities
                    Pvt Ltd. Users are advised to read carefully the articles
                    and other data in the website only for their information and
                    to rely on their own judgment when making investment
                    decisions. The investments discussed or recommended may not
                    be suitable for all investors. Stockology Securities Pvt Ltd
                    does not warranty the timeliness, accuracy or quality of the
                    electronic content.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    5. The website contains features of the services that are
                    currently being offered by Stockology Securities Pvt Ltd and
                    those intended to be offered in the future. Stockology
                    Securities Pvt Ltd intends to launch the services confirming
                    with the features listed on the website in total, however
                    due to business need and regulatory requirement the final
                    launch may contain variations. Notwithstanding anything
                    contained in the website regarding the services, Stockology
                    Securities Pvt Ltd may decide to postpone the offering of
                    the services or may even decide to withdraw the offering or
                    even a currently offered service altogether.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    6. Stockology Securities Pvt Ltd reserves the right at any
                    time and from time to time to modify or discontinue,
                    temporarily or permanently, the Service (or any part
                    thereof) with or without notice at any time. You agree that
                    Stockology Securities Pvt Ltd shall not be liable to you or
                    to any third party for any modification, suspension or
                    discontinuance of the Service.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    7. Registration: In order to use Stockology Securities Pvt
                    Ltd Service, you must have a valid Stockology Securities Pvt
                    Ltd ID (an “Account”). To be a Registered Member, you must
                    provide with certain personal information (“Registration
                    Data”). You will choose an Account name and password and
                    provide a contact email address during the Service’s
                    registration process. You are responsible for maintaining
                    the confidentiality of the password, and are fully
                    responsible for all activities that occur under your
                    password or Account. You agree to: (a) immediately notify
                    Stockology Securities Pvt Ltd of any unauthorized use of
                    your password or Account or any other breach of security,
                    and (b) ensure that you sign out and exit from your Account
                    at the end of each session. Stockology Securities Pvt Ltd
                    shall not be liable for any loss or damage arising from your
                    failure to comply with this. In consideration of use of this
                    Service, you agree to provide true, accurate, current and
                    complete information about yourself as prompted by the
                    Stockology Securities Pvt Ltd registration form. If you
                    provide any information that is untrue, inaccurate, not
                    current or incomplete, or Stockology Securities Pvt Ltd has
                    reasonable grounds to suspect that such information is
                    untrue, inaccurate, not current or incomplete, Stockology
                    Securities Pvt Ltd has the right to suspend or terminate
                    your Account and refuse any and all current or future use of
                    this service (or any portion thereof).
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    8. Privacy Policy: Registration Data and certain other
                    information about you is subject to{" "}
                    <Link
                      href="https://stockologysecurities.com/"
                      target={"_blank"}
                    >
                      https://stockologysecurities.com
                    </Link>{" "}
                    . Please read this policy carefully.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    9. You are responsible for maintaining the security of your
                    Account and any information you provide on Stockology
                    Securities Pvt Ltd, and you are fully responsible for all
                    activities that occur under the Account and any other
                    actions taken in connection with the Discussion Board. You
                    agree to immediately notify Stockology Securities Pvt Ltd of
                    any unauthorized uses of the Account or any other breaches
                    of security. Stockology Securities Pvt Ltd cannot and will
                    not be liable for any loss or damage from your failure to
                    comply with this security obligation. You acknowledge and
                    agree that under no circumstances will Stockology Securities
                    Pvt Ltd be liable, in any way, for any acts or omissions by
                    a Registered Member or any third party, including any
                    damages of any kind incurred as a result of such acts or
                    omissions.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    10. Content Submitted: Stockology Securities Pvt Ltd does
                    not claim any ownership of the Content you place on the
                    discussion board or in any forum on or within the Site.
                    However, by submitting Content to Stockology Securities Pvt
                    Ltd for inclusion on any forum on or within the Site (a
                    “Forum”), you grant Stockology Securities Pvt Ltd a
                    worldwide, irrevocable, perpetual, royalty-free,
                    non-exclusive license to reproduce, modify, adapt and
                    publish such Content. Additionally, by submitting Content to
                    Stockology Securities Pvt Ltd for inclusion in any Forum,
                    you permit anyone to copy, distribute, display and perform
                    your Content, royalty-free, on the condition that they
                    credit your authorship each time they do so.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    11. You agree and acknowledge that you are responsible for
                    maintaining the security of your password and other Account
                    access information, and furthermore that any action taken or
                    Content posted, uploaded or transmitted using your Account
                    shall be deemed made by you for the purpose of accrual of
                    this indemnity obligation. Each user, viewer and Registered
                    Member is solely responsible for his or her actions, costs
                    and expenses when using the Service, including, but not
                    limited to, costs incurred for internet access.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    12. The entire “news and markets data” is sourced from “An
                    external data content agency” and Stockology Securities Pvt
                    Ltd is not responsible for its “integrity / availability” of
                    the same.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    13. Additional Software: With respect to any additional
                    software that may be made available by Stockology Securities
                    Pvt Ltd in connection with the Service, if you elect to
                    download or access such additional software, you understand
                    that you may have to agree to additional terms and
                    conditions before and as a condition of your use of such
                    software.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    14. Stockology Securities Pvt Ltd is not responsible for the
                    content of any of the linked sites. By providing access to
                    other web-sites, Stockology Securities Pvt Ltd is neither
                    recommending nor endorsing the content available in the
                    linked websites.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    15. You understand that the technical processing and
                    transmission of the Service, including your Content, may
                    involve (a) transmissions over various networks; and (b)
                    changes to conform and adapt to technical requirements of
                    connecting networks or devices.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    16. Trademarks and Copyright: The content and information
                    contained within our website or delivered to you in
                    connection with your use of our website is the property of
                    Stockology Securities Pvt Ltd and any other third party
                    (where applicable). The trademark, trade names and logos
                    (the “Trade Marks”) that are used and displayed on our
                    website include registered and unregistered Trade Marks of
                    Stockology Securities Pvt Ltd and other third parties.
                    Nothing on our website should be construed as granting any
                    license or right to use any Trade Marks displayed on our
                    website. We retain all proprietary rights on our website.
                    Users are prohibited from using the same without written
                    permission of Stockology Securities Pvt Ltd of such or such
                    other parties. The materials on this website are protected
                    by copyright and no part of such materials may be modified,
                    reproduced, stored in a retrieval system, transmitted (in
                    any form or by any means), copied, distributed, used for
                    creating derivative works or used in any other way for
                    commercial or public purposes without the Bank’s prior
                    written consent.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    17. The content of the website cannot be copied, reproduced,
                    republished, uploaded, posted, transmitted or distributed
                    for any non-personal use without obtaining prior permission
                    from Stockology Securities Pvt Ltd. The company reserves the
                    right to terminate the accounts of subscribers/customers,
                    who violate the proprietary rights, in addition to necessary
                    legal action. These terms and conditions shall be applicable
                    to any person visiting/accessing the website and/or a
                    Customer entering into an agreement related to availing of
                    the Service offered by Stockology Securities Pvt Ltd. 18. By
                    signing up on this website or sharing my number with
                    Stockology Securities Pvt Ltd, I hereby authorise Stockology
                    Securities Pvt Ltd (registered AP of CHOICE BROKING), its
                    group companies and their agents/representatives to contact
                    me via telephone calls/SMSs/Whatsapp/emails/post etc.
                    including but not limited to promotional communications,
                    from time to time, irrespective of whether I am registered
                    as a Do No Disturb customer with TRAI or any Telecom Service
                    Provider. If you do not agree to any of the terms mentioned
                    in this agreement, you should exit the site. Important : By
                    accessing this website and any of its pages you are agreeing
                    to the terms set out above.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    18. TERM AND TERMINATION: a. This Agreement shall take
                    effect and become binding upon the Parties immediately after
                    the party has register in to the website and/or application.
                    b. This Agreement may be terminated by company immediately
                    without any reason thereof, if the user misuses the website
                    and/or application/application or does not comply with the
                    terms and conditions of this agreement c. Upon termination
                    of this Agreement for whatever reason, all the rights and
                    obligations of the Parties hereunder shall cease.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    19. RIGHT TO CANCELLATION BY THE COMPANY IN CASE OF INVALID
                    INFORMATION FROM THE USER: a. The USER expressly undertakes
                    to provide to the Company only correct and valid information
                    while requesting for any services under this agreement, and
                    not to make any misrepresentation of facts at all. Any
                    default on part of the User would vitiate this agreement and
                    shall disentitle the User from availing the services from
                    the Company. b. In case if the Company discovers or has
                    reasons to believe at any time during or after receiving a
                    request for services from the USER that the request for
                    services is either unauthorized or the information provided
                    by the USER or any of them is not correct or that any fact
                    has been misrepresented by them, the Company in its sole
                    discretion shall have the unrestricted right to take any
                    steps against the User(s), including cancellation of the
                    transactions, etc. without any prior intimation to the User.
                    In such an event, the Company shall not be responsible or
                    liable for any loss or damage that may be caused to the USER
                    or any of them as a consequence of such cancellation of
                    transaction or services.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    20. PRIVACY AND SECURITY: The user hereby consents,
                    expresses and agrees that they have read and fully
                    understands the Privacy Policy of the Company contained in
                    the Company website and/or applications and hereby consents
                    that the terms and contents of such Privacy Policy are
                    acceptable to them.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    21. DISCLAIMER OF WARRANTY: a. The Company and its Providers
                    make no warranty of any kind regarding the website and/or
                    application, Content, Products or Services, all of which are
                    provided on an "as is" basis. The Company and its Providers
                    expressly disclaim any representation or warranty that the
                    website and/or application will be free from errors, viruses
                    or other harmful components, that communications to or from
                    the website and/or application will be secure and not
                    intercepted, that the Services and other capabilities
                    offered from the website and/or application will be
                    uninterrupted, or that its Content will be accurate,
                    complete or timely. The fact that the Company is including
                    or offering any Product or Service on the website and/or
                    application is not an endorsement or a recommendation of the
                    Product or Service. b. Other than those warranties which,
                    under the laws applicable to these terms, are implied by
                    laws, and are incapable of exclusion, restriction or
                    modification, the Company and its providers expressly
                    disclaim all warranties and conditions, including implied
                    warranties and conditions of merchantability, fitness for a
                    particular purpose, title, non-infringement, and those
                    arising by statute or otherwise in law or from a course of
                    dealing or usage of trade.
                  </Text>

                  <Text fontSize={"sm"} my="4">
                    Website Reference:-
                    <Link href="https://stockologysecurities.com/term-and-conditions/">
                      https://stockologysecurities.com/term-and-conditions/
                    </Link>
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

export default RefundPolicy;
