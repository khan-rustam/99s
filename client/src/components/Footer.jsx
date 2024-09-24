/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer className="w-full pt-2 bg-opacity-60 backdrop-blur-sm bg-white/30 ">
                <div className="mx-auto max-w-10xl px-4 sm:px-2 lg:px-8">
                    {/* <!--Grid--> */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 gap-y-8 md:gap-8  max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                        <div className=" mb-10 lg:mb-0 p-4 flex  items-center flex-col">
                            <Link to="/" className="flex justify-center lg:justify-start w-[12rem]">
                                <img src={'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2Ffooterlogo-transparent.png?alt=media&token=15f6b616-db20-4c3b-8ef2-1991e1681b01'} alt="99s INDIA" className='w-full md:w-full' />
                            </Link>

                        </div>
                        {/* <!--End Col--> */}
                        <div className="lg:mx-auto text-left p-2">
                            <h4 className="text-lg text-gray-900 font-medium mb-4">Page</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-2"><Link to={'/'} className="text-gray-600 hover:text-gray-900">Home</Link></li>
                                <li className="mb-2"><Link to={'/about'} className=" text-gray-600 hover:text- gray-900">About</Link></li>
                                <li className="mb-2"><Link to={'/member'} className=" text-gray-600 hover:text-gray-900">Members</Link></li>
                                <li className="mb-2"><Link to={'/gallery'} className=" text-gray-600 hover:text-gray-900">Gallery</Link></li>
                            </ul>
                        </div>
                        {/* <!--End Col--> */}

                        <div className="lg:mx-auto text-left  p-2">
                            <h4 className="text-lg text-gray-900 font-medium mb-4">Support</h4>
                            <ul className="text-sm  transition-all duration-500">
                                {/* <li className="mb-2"><a href="" className="text-gray-600 hover:text-gray-900">Customer Support</a></li> */}
                                <li className="mb-2"><a href="https://drive.google.com/file/d/1QsjkSAGsy6s6YqHuVuvN5o545S9ToTXr/view?usp=sharing" className=" text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                                <li ><a target="_blank" href="https://drive.google.com/file/d/1ZzigYjkzOGHmogUPRUWad_DHVaK2lUQ4/view?usp=sharing" className=" text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                            </ul>
                        </div>
                        {/* <!--End Col--> */}
                        <div className="lg:mx-auto text-left p-2 ">
                            <h4 className="text-lg text-gray-900 font-medium mb-4">Donate</h4>
                            <p className="text-sm text-gray-500 leading-6 mb-7">Donate To make a "Smile".....</p>
                            <Link to="/donate" className="flex items-center justify-center gap-2 border border-blue-800 rounded-full py-3 px-6 w-fit lg:mx-0  text-sm text-blue-800 font-semibold transition-all duration-500 hover:bg-blue-100">Donate<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#1565c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </Link>
                        </div>
                    </div>
                    {/* <!--Grid--> */}
                    <div className="py-3 border-t border-gray-200">
                        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">NinetyNine</a> 2024, All rights reserved.</span>
                            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                                <a href="https://x.com/99sIndiaSection?t=q9EJ4RhxzA2q_4c8izPQkg&s=09" target="_blank" className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#33CCFF] hover:bg-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/99s_india_section?igsh=MWZ4d3dqczR1dmtkbA==" target="_blank" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[linear-gradient(45deg,#FEE411_6.9%,#FEDB16_10.98%,#FEC125_17.77%,#FE983D_26.42%,#FE5F5E_36.5%,#FE2181_46.24%,#9000DC_85.57%)]  hover:bg-gradient-to-b from-gray-900 to-gray-900  
                        ">
                                    <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.63434 7.99747C5.63434 6.69062 6.6941 5.63093 8.00173 5.63093C9.30936 5.63093 10.3697 6.69062 10.3697 7.99747C10.3697 9.30431 9.30936 10.364 8.00173 10.364C6.6941 10.364 5.63434 9.30431 5.63434 7.99747ZM4.35427 7.99747C4.35427 10.0108 5.98723 11.6427 8.00173 11.6427C10.0162 11.6427 11.6492 10.0108 11.6492 7.99747C11.6492 5.98418 10.0162 4.3522 8.00173 4.3522C5.98723 4.3522 4.35427 5.98418 4.35427 7.99747ZM10.9412 4.20766C10.9411 4.37615 10.991 4.54087 11.0846 4.681C11.1783 4.82113 11.3113 4.93037 11.4671 4.99491C11.6228 5.05945 11.7942 5.07639 11.9595 5.04359C12.1249 5.01078 12.2768 4.92971 12.3961 4.81062C12.5153 4.69153 12.5966 4.53977 12.6295 4.37453C12.6625 4.2093 12.6457 4.03801 12.5812 3.88232C12.5168 3.72663 12.4076 3.59354 12.2674 3.49988C12.1273 3.40622 11.9625 3.35619 11.7939 3.35612H11.7936C11.5676 3.35623 11.3509 3.44597 11.1911 3.60563C11.0313 3.76529 10.9414 3.98182 10.9412 4.20766ZM5.132 13.7759C4.43946 13.7444 4.06304 13.6291 3.81289 13.5317C3.48125 13.4027 3.24463 13.249 2.99584 13.0007C2.74705 12.7524 2.59305 12.5161 2.46451 12.1847C2.367 11.9348 2.25164 11.5585 2.22016 10.8664C2.18572 10.1181 2.17885 9.89331 2.17885 7.99752C2.17885 6.10174 2.18629 5.87758 2.22016 5.12866C2.2517 4.43654 2.36791 4.06097 2.46451 3.81035C2.59362 3.47891 2.7474 3.24242 2.99584 2.99379C3.24428 2.74515 3.48068 2.59124 3.81289 2.46278C4.06292 2.36532 4.43946 2.25004 5.132 2.21857C5.88074 2.18416 6.10566 2.17729 8.00173 2.17729C9.89779 2.17729 10.1229 2.18472 10.8723 2.21857C11.5648 2.25009 11.9406 2.36623 12.1914 2.46278C12.5231 2.59124 12.7597 2.74549 13.0085 2.99379C13.2573 3.24208 13.4107 3.47891 13.5398 3.81035C13.6373 4.06023 13.7527 4.43654 13.7841 5.12866C13.8186 5.87758 13.8255 6.10174 13.8255 7.99752C13.8255 9.89331 13.8186 10.1175 13.7841 10.8664C13.7526 11.5585 13.6367 11.9347 13.5398 12.1847C13.4107 12.5161 13.2569 12.7526 13.0085 13.0007C12.76 13.2488 12.5231 13.4027 12.1914 13.5317C11.9414 13.6292 11.5648 13.7444 10.8723 13.7759C10.1236 13.8103 9.89865 13.8172 8.00173 13.8172C6.10481 13.8172 5.88051 13.8103 5.132 13.7759ZM5.07318 0.941429C4.31699 0.975845 3.80027 1.09568 3.34902 1.27116C2.88168 1.45239 2.48605 1.69552 2.09071 2.09C1.69537 2.48447 1.45272 2.88049 1.27139 3.34755C1.0958 3.79882 0.975892 4.31494 0.941455 5.07068C0.90645 5.82761 0.898438 6.0696 0.898438 7.99747C0.898438 9.92534 0.90645 10.1673 0.941455 10.9243C0.975892 11.68 1.0958 12.1961 1.27139 12.6474C1.45272 13.1142 1.69543 13.5106 2.09071 13.9049C2.48599 14.2992 2.88168 14.542 3.34902 14.7238C3.80113 14.8993 4.31699 15.0191 5.07318 15.0535C5.83096 15.0879 6.0727 15.0965 8.00173 15.0965C9.93075 15.0965 10.1729 15.0885 10.9303 15.0535C11.6865 15.0191 12.2029 14.8993 12.6544 14.7238C13.1215 14.542 13.5174 14.2994 13.9127 13.9049C14.3081 13.5105 14.5502 13.1142 14.7321 12.6474C14.9077 12.1961 15.0281 11.68 15.062 10.9243C15.0964 10.1668 15.1044 9.92534 15.1044 7.99747C15.1044 6.0696 15.0964 5.82761 15.062 5.07068C15.0276 4.31489 14.9077 3.79853 14.7321 3.34755C14.5502 2.88077 14.3075 2.4851 13.9127 2.09C13.518 1.69489 13.1215 1.45239 12.655 1.27116C12.2029 1.09568 11.6865 0.975277 10.9308 0.941429C10.1735 0.907013 9.93132 0.898438 8.00229 0.898438C6.07327 0.898438 5.83096 0.906445 5.07318 0.941429Z" fill="white" />
                                    </svg>

                                </a>
                                <a href="https://facebook.com/groups/2405620646324248/" target="_blank" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF]  hover:bg-gray-900 ">
                                    <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z" fill="currentColor" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
