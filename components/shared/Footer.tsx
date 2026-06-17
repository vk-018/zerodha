import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter,faSquareFacebook ,faSquareInstagram,faSquareLinkedin} from '@fortawesome/free-brands-svg-icons'

//stlye classes
import { icon,headings } from '@/styles/style' 
export default function Footer() {
  return (
  <div className='border border-[#eee] bg-[#fbfbfb] py-8'>
   <div className='px-5 w-full lg:w-8/10 mx-auto '>
     <div className='flex flex-col md:flex-row justify-between mb-16'>
        <div className='flex flex-col'>
            <Image
                src="/logo.svg"
                alt="logo"
                height={20}
                width={150}
                className='mb-6'
            >
            </Image>

            <p className='text-xs text-[#666] mb-6'>© 2010 - 2026, Zerodha Broking Ltd. <br></br>
            All rights reserved.</p>

            <div className='flex justify-around mb-6'>
                <FontAwesomeIcon icon={faXTwitter} className={icon}/>
                <FontAwesomeIcon icon={faSquareFacebook} className={icon}/>
                <FontAwesomeIcon icon={faSquareInstagram} className={icon}/>
                <FontAwesomeIcon icon={faSquareLinkedin} className={icon}/>
            </div>

            <hr className='text-[#666] opacity-10 mb-10'></hr>
            <div className='flex justify-around '>
                <Image src="/google-play-badge-light.svg" alt='google play' height={0} width={0} className='h-[40] w-auto'></Image>
                <Image src="/appstore-badge-light.svg" alt='google play' height={0} width={0} className='h-[40] w-auto'></Image>
            </div>
        </div>
        <div className='flex flex-col text-[#666] '>
            <p className={headings}>Account</p>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Open demat account</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Minor demat account</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>NRI demat account</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>HUF demat account</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Commodity</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Dematerialisation</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Fund transfer</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>MTF</Link>
        </div>
        <div className='flex flex-col text-[#666] '>
            <p className={headings}>Support</p>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Contact us</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Support portal</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>How to file a complaint?</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Status of your complaints</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Bulletin</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Circular</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Z-Connect blog</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Downloads</Link>
        </div>
        <div className='flex flex-col text-[#666] '>
            <p className={headings}>Company</p>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>About</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Philosophy</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Press & media</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Careers</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Zerodha Cares (CSR)</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Zerodha.tech</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Open source</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Referral program</Link>
        </div>
        <div className='flex flex-col text-[#666] '>
            <p className={headings}>Quick Links</p>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Upcoming IPOs</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Brokerage charges</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Market holidays</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Economic calendar</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Calculators</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Markets</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Sectors</Link>
            <Link href={"#"} className='py-2 text-sm hover:text-blue-500'>Gift Nifty</Link>
        </div>
     </div>
     <div>
        <p className='text-[#666] text-xs'>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF<br></br><br></br>
           Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br></br><br></br>
           Smart Online Dispute Resolution | Grievances Redressal Mechanism<br></br><br></br>
           Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br></br><br></br>
           Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br></br><br></br>
           India's largest broker based on networth as per NSE. NSE broker factsheet<br></br><br></br>
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.<br></br><br></br>
          *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.<br></br><br></br>
        </p>
     </div>
   </div>
  </div>
  )
}
