
import logo from '../../images/company-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faFacebookSquare, faInstagram, faPinterest , faTwitter} from '@fortawesome/free-brands-svg-icons';
const Footer = ()=>{
    const navigate = useNavigate();
    const clickHandler = (e)=>{
        navigate('/');
    }

    return (
        <>
            <div className='grid grid-cols-6 p-5 pt-20 pb-10 gap-4 justify-items-center bg-gray-100 '>
                <div className='flex flex-col gap-5 px-2' >
                    <div className='flex flex-col w-[70%]' >
                        <img src={logo} className='w-[80%] '/>
                    </div>
                    <div className='px-5'>
                        Dribble is the world's leading community for  creatives to share, grow, and get hired.
                    </div>

                    <div className='flex gap-3 px-5'> 
                        <div><FontAwesomeIcon icon={faGlobe} /></div>
                        <div><FontAwesomeIcon icon={faTwitter} /></div>
                        <div><FontAwesomeIcon icon={faFacebookSquare} /></div>
                        <div><FontAwesomeIcon icon={faInstagram} /></div>
                        <div><FontAwesomeIcon icon={faPinterest} /></div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 px-2'>
                    <div className='text-lg font-bold' >For designers</div>       
                    <div>Go Pro!</div>
                    <div>Explore Design Work </div>
                    <div>Design blog</div>
                    <div>Overtime Podcast</div>
                    <div>Playoffs</div>
                    <div>Weekly Warm-Up</div>
                    <div>Refer a Friend</div>
                    <div>Code of Conduct</div>
                </div>
                <div className='flex flex-col gap-5 px-2 :flex-row'>
                    <div className='flex flex-col gap-3 px-2 '>

                        <div className='text-lg font-bold'>Hire Designers</div>
                        <div>Post a Job opening</div>
                        <div>Post a Freelance Project</div>
                        <div>Search for designers</div>

                    </div>
                    <div className='flex flex-col gap-3 px-2 '>
                        <div className='text-lg font-bold'>Brands</div>
                        <div>Advertise with us</div>

                    </div>

                </div>
                <div className='flex flex-col gap-3 px-2'>
                    <div className='text-lg font-bold' > Company</div>
                    <div> About</div>
                    <div> Careers</div>
                    <div> Support</div>
                    <div> Media Kit</div>
                    <div> Testimonials</div>
                    <div> API</div>
                    <div> Terms of Service</div>
                    <div> Privacy policy</div>
                    <div> Cookie Policy </div>

                </div>
                <div className='flex flex-col gap-5 px-2 :flex-row'>
                    <div  className='flex flex-col gap-3 px-2'>
                        <div className='text-lg font-bold' > Directories</div>
                        <div> Design jobs</div>
                        <div> Designers for hire</div>
                        <div> Freelance designers for hire</div>
                        <div> Tags</div>
                        <div> Places</div>

                    </div>
                    <div  className='flex flex-col gap-3 px-2' >
                        <div className='text-lg font-bold' > Design assets</div>
                        <div> Dribble Marketplace</div>
                        <div> Creative Market</div>
                        <div> Fontspring</div>
                        <div> Font Squirrel</div>

                    </div>

                </div>
                <div className='flex flex-col gap-3 px-2'>   

                    <div className='text-lg font-bold' > Design Resources</div>
                    <div> Freelancing</div>
                    <div> Design Hiring</div>
                    <div> Design Portfolio</div>
                    <div> Design Education</div>
                    <div> Creative Process</div>
                    <div> Design Industry Trends</div>


                </div>
            </div>
        </>
    )
}

export default Footer;