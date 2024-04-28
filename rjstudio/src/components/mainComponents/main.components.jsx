
import React, {useEffect, useState} from 'react'
import left from '../../assets/images/Left.png'
import { SwiperComponent } from '../swiper/swiper.component'

export const MainComponent = () => {

    return (<main>

        <section className='about-us mb-5'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src={left} alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <div className='text-start d-flex flex-column gap-3'>
                            <span className='catg-title fa fa-bank text-uppercase'>About Us</span>
                            <div className='subhead text-capitalize fw-bold lh-base'>We're delighted to <br /> showcase our professional <br /> photography services</div>
                            <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className='d-flex gap-3 mt-3'>
                                <svg fill='#CECECE' width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                                <div className='d-flex flex-column'>
                                    <span className='h5 fw-bold'>High className Tools Used</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <svg fill='#CECECE' width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                                <div className='d-flex flex-column'>
                                    <span className='h5 fw-bold'>Best Team Work</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                                </div>
                            </div>
                            <a href="#" className="overlay-btn text-white text-uppercase d-flex align-items-center gap-2 ">Learn More<svg fill="#fff" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='why-choose mb-5'>
            <div className='container'>

                <div className='row'>
                    <div className='col-lg-6 ps-lg-0'>
                        <div className='text-start'>
                            <span className='catg-title text-white'>Why Choice Us</span>
                            <div className="subhead text-white text-capitalize fw-bold lh-sm mt-3">Our Photography Agency Service Are</div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='why-choice-content text-start'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-cards mt-5 p-4'>
                <div className="row">

                    <div className='col offset-lg-1'>
                        <div className="d-flex why-c-card text-start bg-white gap-3 ">
                            <div>
                                <svg fill="#CECECE" width="45" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg></div><div className="d-flex flex-column"><span className="h5 fw-bold">High className Camera</span><p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div></div>
                    </div>
                    <div className='col'>
                        <div className="d-flex why-c-card text-start bg-white gap-3 ">
                            <div>
                                <svg fill="#CECECE" width="45" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M211 7.3C205 1 196-1.4 187.6.8s-14.9 8.9-17.1 17.3l-15.8 62.5-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62-62.5 15.9c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45-46.2 45c-6.3 6-8.7 15-6.5 23.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5-15.9-62.5c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3l-45 46.2z" /></svg></div><div className="d-flex flex-column"><span className="h5 fw-bold">Completely Training</span><p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div></div>
                    </div>
                    <div className='col'>
                        <div className="d-flex why-c-card text-start bg-white gap-3">
                            <div>
                                <svg fill="#CECECE" width="45" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32h576V96c0-35.3-28.7-64-64-64zm512 192H0v192c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16m112 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16" /></svg></div><div className="d-flex flex-column"><span className="h5 fw-bold">Flexible Price</span><p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div></div>
                    </div>




                </div>
            </div>
        </section>

        <section className="my-gallery mb-5">
            <span className='catg-title text-center d-block'>Why Choice Us</span>
            <div className="subhead text-dark text-center text-capitalize fw-bold lh-sm mt-3">Lets Discover All Of My Work <br />
                Digital Prints</div>
            <div className="container">
                <div className="row">
                    <ul className="nav tabs d-flex justify-content-center gap-5 my-5" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"> wall art</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Calendar</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="product-tab" data-bs-toggle="tab" data-bs-target="#product" type="button" role="tab" aria-controls="product" aria-selected="false">All products</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                                <div className="col mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/3256/6458/74684cd0615bd82acfa6a33d49dd01d6?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kwmd70456zKquM4aI1qH-g~MqIoDVMTtBDYx2OPehb2qpe6Mmqca6wunqNgjlF0tjaiJykzNDaqpoDw-36KqinAb5CxFAO-8fSyS2dcA79h9-cI5ECXDgj-zhpJCF3YyJ8M7xS~lWkzTnlTf59oNp0uApikdKluBLxqFvdNFbXsbZmKptKHqGT8xzm5~7nZx0XiTi~TVyqwHB7Swwmtz9TraQeT~pbxXpMprc5piXsCgPx0WB9CYeO~AVAYfkf4TJwjRvPE6HEhfzQHXU-minqJ9Se46UN0NyhzGPlfiVIGvyvtCMg37gExacv1diSm-ByYe~I2GHUyKS5HNkUvBWA__" alt="" />
                                </div>
                                <div className="col mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/865f/b2bb/ac9453c22a1a29986d6bc80b3b530299?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O05GVgQjcodnsbBISbMF4a1-gtaTNEWLEf0V8~cpxqFkhmKe2svqHukda5oYYHUOAFk3QFhiDJymc2P8i4r-yrWMV9cjeJ0MOd7kCbSqScChzY48hYRc~-q7J~lFZi7TGMCUh~cUK5X1nCVpcLpMU6U1RNuknN4MTpQTzY4RA~j83zxRH2IDjb7b0pO51KClR2Q1Fq5stw4K-eEiBX15BDQ531uXjd~BSRTTeW4AIoWdJNjlot4oQIDFNrl9hS1-BtCPaV9wmsL84iE~~-L73MOln2ct6BxJMRSDUZDRRFqOCQOLzPZdzLJXvGYgHaN4rn-V6eU2s-unDdsM1LQbsA__" alt="" />
                                </div>
                                <div className="col-lg-5 mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/ba7f/bb62/cc665f3a68ca23cae6496cc00513777e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8BvrXLrjVWAdIboni00OmhXOaUzB2LHK2eO-wo3OnC~5T3eqm9EkTlovXB-o1Lr9eNtuI~Z0N22h0~-qhVb~RsOGz8zojOyiDk2x9u7-E6XnCvgKY5XcrRJgpxGQI--st~kPD-RfLilhb08TmxXirkhP8dHmV2hARDCxU-wVfGaQ5JfMDfs07smESHN6d5JkdbnKYG7FY~~hBHicgv6NtqIXUlMYyS3P6Qyq7IIS5mmcCMiSswKVcbp-l~DHZ2K5jE~j58UpP1vgKQ246ZXRyiMtURVUhrwQijRC6xb27gTxyg-Dp4unyE~wYmV9RKxSXlxMSe~uFz~j4CtJ6QVEA__" alt="" />
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/2f27/7b8a/70341fd1f187baaf2282aa9e9ae3e05b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBLDx7VT~72kTUJKRDcZRf-4IMvSrB~Pht4nxdg6DXg8aUttMXG~-kFy0nCakdLlL5sF9I5SAzxW~8TCR63zovkQw8Y6GKCDVI7xuWKYgYisUEmaqTEIXem3Fn3YHw83k3Iv433WwE2bsiG3oqS4pgcFPQjGeU8bLUgcHbViIzCZF-dullJcHpVzneOPK8hbj3zlkehecCxFOMgjiHrVk~Y6k-AGvU21wEZw51WZL2vmB-LKPZBgpNzJkV0yIYBCsVQZEt6yzimUKgQfIkK-TGYBjSDsyw9RcGp5idxcFgC5v~gXiMBajvhIW74OgnXXIS4xeAeParRg2I5g0pEBtg__" alt="" />
                                </div>
                                <div className='col-lg-3'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/07c6/8014/df391dd05b274dab61983a8eb9688876?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhCCqHtKOvJ4VBtcBpa~F63diXkcc5Gzr8Q00eOcFovJmb8uG26EKsCyLfiboZqx3Oyh06MkpVMzpjaoUDyRpea0FYjVFtZyYsBov8AJaWNQmB~qDLkSoOwic73JhSUxKQ-4utU3-n6kv3hZmJZM9GKaUimUts3r7hwlUjuG8eiMEKBcCYq7mqBsLdEZwep0B1oqIJuZvMujL6Dg3v4HB6-4ogFBSVh57j6LWciaq73ReJ-BQ5CPgJHljPQrSJIUfDh1gnYksRP9yWKSmtLT20mIj3dGvRhdVvdfUhMyEWReS2u~iukHCRwBU705NJSKwvtkir3j7iRILxtfxGyxPQ__" alt="" />
                                </div>
                                <div className='col'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/f8b3/5d0c/9aad727f5d86a1e071f8454c19c6f57c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxllLC9TmQdg0RteH~pNydDDgqKDw6uJtyhK5I1L9XHxUK5kh5hdsfyEJmGxCs-TJjf7utazVZJJpm4JVO1m4zFfHVky5Vk9SxxQUscjtpC2bTfERis49KtxGOip-BSFs1uEPyza4eP9B~udrZfzbHMoi95DzVmg~mHIx~c3DVplgX4O~RD7oEIodAWXQiWWSOaEEOPnDFPpJQOwc~nH9Smx1VzvLyEyYbEYonlOLN74-8Y3dLmg6~sh7EghW-x06NSIg92f0ubIuVh45aSQHdYa167OFsrDOjdFusA5b0DonakVjBADJAFRAeD91Tb5qg-1th1hd1U5uhhtdIW0TQ__" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row">
                                <div className="col mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/3256/6458/74684cd0615bd82acfa6a33d49dd01d6?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kwmd70456zKquM4aI1qH-g~MqIoDVMTtBDYx2OPehb2qpe6Mmqca6wunqNgjlF0tjaiJykzNDaqpoDw-36KqinAb5CxFAO-8fSyS2dcA79h9-cI5ECXDgj-zhpJCF3YyJ8M7xS~lWkzTnlTf59oNp0uApikdKluBLxqFvdNFbXsbZmKptKHqGT8xzm5~7nZx0XiTi~TVyqwHB7Swwmtz9TraQeT~pbxXpMprc5piXsCgPx0WB9CYeO~AVAYfkf4TJwjRvPE6HEhfzQHXU-minqJ9Se46UN0NyhzGPlfiVIGvyvtCMg37gExacv1diSm-ByYe~I2GHUyKS5HNkUvBWA__" alt="" />
                                </div>
                                <div className="col mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/865f/b2bb/ac9453c22a1a29986d6bc80b3b530299?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O05GVgQjcodnsbBISbMF4a1-gtaTNEWLEf0V8~cpxqFkhmKe2svqHukda5oYYHUOAFk3QFhiDJymc2P8i4r-yrWMV9cjeJ0MOd7kCbSqScChzY48hYRc~-q7J~lFZi7TGMCUh~cUK5X1nCVpcLpMU6U1RNuknN4MTpQTzY4RA~j83zxRH2IDjb7b0pO51KClR2Q1Fq5stw4K-eEiBX15BDQ531uXjd~BSRTTeW4AIoWdJNjlot4oQIDFNrl9hS1-BtCPaV9wmsL84iE~~-L73MOln2ct6BxJMRSDUZDRRFqOCQOLzPZdzLJXvGYgHaN4rn-V6eU2s-unDdsM1LQbsA__" alt="" />
                                </div>
                                <div className="col-lg-5 mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/ba7f/bb62/cc665f3a68ca23cae6496cc00513777e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8BvrXLrjVWAdIboni00OmhXOaUzB2LHK2eO-wo3OnC~5T3eqm9EkTlovXB-o1Lr9eNtuI~Z0N22h0~-qhVb~RsOGz8zojOyiDk2x9u7-E6XnCvgKY5XcrRJgpxGQI--st~kPD-RfLilhb08TmxXirkhP8dHmV2hARDCxU-wVfGaQ5JfMDfs07smESHN6d5JkdbnKYG7FY~~hBHicgv6NtqIXUlMYyS3P6Qyq7IIS5mmcCMiSswKVcbp-l~DHZ2K5jE~j58UpP1vgKQ246ZXRyiMtURVUhrwQijRC6xb27gTxyg-Dp4unyE~wYmV9RKxSXlxMSe~uFz~j4CtJ6QVEA__" alt="" />
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/2f27/7b8a/70341fd1f187baaf2282aa9e9ae3e05b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBLDx7VT~72kTUJKRDcZRf-4IMvSrB~Pht4nxdg6DXg8aUttMXG~-kFy0nCakdLlL5sF9I5SAzxW~8TCR63zovkQw8Y6GKCDVI7xuWKYgYisUEmaqTEIXem3Fn3YHw83k3Iv433WwE2bsiG3oqS4pgcFPQjGeU8bLUgcHbViIzCZF-dullJcHpVzneOPK8hbj3zlkehecCxFOMgjiHrVk~Y6k-AGvU21wEZw51WZL2vmB-LKPZBgpNzJkV0yIYBCsVQZEt6yzimUKgQfIkK-TGYBjSDsyw9RcGp5idxcFgC5v~gXiMBajvhIW74OgnXXIS4xeAeParRg2I5g0pEBtg__" alt="" />
                                </div>
                                <div className='col-lg-3'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/07c6/8014/df391dd05b274dab61983a8eb9688876?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhCCqHtKOvJ4VBtcBpa~F63diXkcc5Gzr8Q00eOcFovJmb8uG26EKsCyLfiboZqx3Oyh06MkpVMzpjaoUDyRpea0FYjVFtZyYsBov8AJaWNQmB~qDLkSoOwic73JhSUxKQ-4utU3-n6kv3hZmJZM9GKaUimUts3r7hwlUjuG8eiMEKBcCYq7mqBsLdEZwep0B1oqIJuZvMujL6Dg3v4HB6-4ogFBSVh57j6LWciaq73ReJ-BQ5CPgJHljPQrSJIUfDh1gnYksRP9yWKSmtLT20mIj3dGvRhdVvdfUhMyEWReS2u~iukHCRwBU705NJSKwvtkir3j7iRILxtfxGyxPQ__" alt="" />
                                </div>
                                <div className='col'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/f8b3/5d0c/9aad727f5d86a1e071f8454c19c6f57c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxllLC9TmQdg0RteH~pNydDDgqKDw6uJtyhK5I1L9XHxUK5kh5hdsfyEJmGxCs-TJjf7utazVZJJpm4JVO1m4zFfHVky5Vk9SxxQUscjtpC2bTfERis49KtxGOip-BSFs1uEPyza4eP9B~udrZfzbHMoi95DzVmg~mHIx~c3DVplgX4O~RD7oEIodAWXQiWWSOaEEOPnDFPpJQOwc~nH9Smx1VzvLyEyYbEYonlOLN74-8Y3dLmg6~sh7EghW-x06NSIg92f0ubIuVh45aSQHdYa167OFsrDOjdFusA5b0DonakVjBADJAFRAeD91Tb5qg-1th1hd1U5uhhtdIW0TQ__" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="row">
                                <div className="col mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/3256/6458/74684cd0615bd82acfa6a33d49dd01d6?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kwmd70456zKquM4aI1qH-g~MqIoDVMTtBDYx2OPehb2qpe6Mmqca6wunqNgjlF0tjaiJykzNDaqpoDw-36KqinAb5CxFAO-8fSyS2dcA79h9-cI5ECXDgj-zhpJCF3YyJ8M7xS~lWkzTnlTf59oNp0uApikdKluBLxqFvdNFbXsbZmKptKHqGT8xzm5~7nZx0XiTi~TVyqwHB7Swwmtz9TraQeT~pbxXpMprc5piXsCgPx0WB9CYeO~AVAYfkf4TJwjRvPE6HEhfzQHXU-minqJ9Se46UN0NyhzGPlfiVIGvyvtCMg37gExacv1diSm-ByYe~I2GHUyKS5HNkUvBWA__" alt="" />
                                </div>
                                <div className="col mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/865f/b2bb/ac9453c22a1a29986d6bc80b3b530299?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O05GVgQjcodnsbBISbMF4a1-gtaTNEWLEf0V8~cpxqFkhmKe2svqHukda5oYYHUOAFk3QFhiDJymc2P8i4r-yrWMV9cjeJ0MOd7kCbSqScChzY48hYRc~-q7J~lFZi7TGMCUh~cUK5X1nCVpcLpMU6U1RNuknN4MTpQTzY4RA~j83zxRH2IDjb7b0pO51KClR2Q1Fq5stw4K-eEiBX15BDQ531uXjd~BSRTTeW4AIoWdJNjlot4oQIDFNrl9hS1-BtCPaV9wmsL84iE~~-L73MOln2ct6BxJMRSDUZDRRFqOCQOLzPZdzLJXvGYgHaN4rn-V6eU2s-unDdsM1LQbsA__" alt="" />
                                </div>
                                <div className="col-lg-5 mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/ba7f/bb62/cc665f3a68ca23cae6496cc00513777e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8BvrXLrjVWAdIboni00OmhXOaUzB2LHK2eO-wo3OnC~5T3eqm9EkTlovXB-o1Lr9eNtuI~Z0N22h0~-qhVb~RsOGz8zojOyiDk2x9u7-E6XnCvgKY5XcrRJgpxGQI--st~kPD-RfLilhb08TmxXirkhP8dHmV2hARDCxU-wVfGaQ5JfMDfs07smESHN6d5JkdbnKYG7FY~~hBHicgv6NtqIXUlMYyS3P6Qyq7IIS5mmcCMiSswKVcbp-l~DHZ2K5jE~j58UpP1vgKQ246ZXRyiMtURVUhrwQijRC6xb27gTxyg-Dp4unyE~wYmV9RKxSXlxMSe~uFz~j4CtJ6QVEA__" alt="" />
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/2f27/7b8a/70341fd1f187baaf2282aa9e9ae3e05b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBLDx7VT~72kTUJKRDcZRf-4IMvSrB~Pht4nxdg6DXg8aUttMXG~-kFy0nCakdLlL5sF9I5SAzxW~8TCR63zovkQw8Y6GKCDVI7xuWKYgYisUEmaqTEIXem3Fn3YHw83k3Iv433WwE2bsiG3oqS4pgcFPQjGeU8bLUgcHbViIzCZF-dullJcHpVzneOPK8hbj3zlkehecCxFOMgjiHrVk~Y6k-AGvU21wEZw51WZL2vmB-LKPZBgpNzJkV0yIYBCsVQZEt6yzimUKgQfIkK-TGYBjSDsyw9RcGp5idxcFgC5v~gXiMBajvhIW74OgnXXIS4xeAeParRg2I5g0pEBtg__" alt="" />
                                </div>
                                <div className='col-lg-3'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/07c6/8014/df391dd05b274dab61983a8eb9688876?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhCCqHtKOvJ4VBtcBpa~F63diXkcc5Gzr8Q00eOcFovJmb8uG26EKsCyLfiboZqx3Oyh06MkpVMzpjaoUDyRpea0FYjVFtZyYsBov8AJaWNQmB~qDLkSoOwic73JhSUxKQ-4utU3-n6kv3hZmJZM9GKaUimUts3r7hwlUjuG8eiMEKBcCYq7mqBsLdEZwep0B1oqIJuZvMujL6Dg3v4HB6-4ogFBSVh57j6LWciaq73ReJ-BQ5CPgJHljPQrSJIUfDh1gnYksRP9yWKSmtLT20mIj3dGvRhdVvdfUhMyEWReS2u~iukHCRwBU705NJSKwvtkir3j7iRILxtfxGyxPQ__" alt="" />
                                </div>
                                <div className='col'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/f8b3/5d0c/9aad727f5d86a1e071f8454c19c6f57c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxllLC9TmQdg0RteH~pNydDDgqKDw6uJtyhK5I1L9XHxUK5kh5hdsfyEJmGxCs-TJjf7utazVZJJpm4JVO1m4zFfHVky5Vk9SxxQUscjtpC2bTfERis49KtxGOip-BSFs1uEPyza4eP9B~udrZfzbHMoi95DzVmg~mHIx~c3DVplgX4O~RD7oEIodAWXQiWWSOaEEOPnDFPpJQOwc~nH9Smx1VzvLyEyYbEYonlOLN74-8Y3dLmg6~sh7EghW-x06NSIg92f0ubIuVh45aSQHdYa167OFsrDOjdFusA5b0DonakVjBADJAFRAeD91Tb5qg-1th1hd1U5uhhtdIW0TQ__" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="product" role="tabpanel" aria-labelledby="product-tab">
                            <div className="row">
                                <div className="col mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/3256/6458/74684cd0615bd82acfa6a33d49dd01d6?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kwmd70456zKquM4aI1qH-g~MqIoDVMTtBDYx2OPehb2qpe6Mmqca6wunqNgjlF0tjaiJykzNDaqpoDw-36KqinAb5CxFAO-8fSyS2dcA79h9-cI5ECXDgj-zhpJCF3YyJ8M7xS~lWkzTnlTf59oNp0uApikdKluBLxqFvdNFbXsbZmKptKHqGT8xzm5~7nZx0XiTi~TVyqwHB7Swwmtz9TraQeT~pbxXpMprc5piXsCgPx0WB9CYeO~AVAYfkf4TJwjRvPE6HEhfzQHXU-minqJ9Se46UN0NyhzGPlfiVIGvyvtCMg37gExacv1diSm-ByYe~I2GHUyKS5HNkUvBWA__" alt="" />
                                </div>
                                <div className="col mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/865f/b2bb/ac9453c22a1a29986d6bc80b3b530299?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O05GVgQjcodnsbBISbMF4a1-gtaTNEWLEf0V8~cpxqFkhmKe2svqHukda5oYYHUOAFk3QFhiDJymc2P8i4r-yrWMV9cjeJ0MOd7kCbSqScChzY48hYRc~-q7J~lFZi7TGMCUh~cUK5X1nCVpcLpMU6U1RNuknN4MTpQTzY4RA~j83zxRH2IDjb7b0pO51KClR2Q1Fq5stw4K-eEiBX15BDQ531uXjd~BSRTTeW4AIoWdJNjlot4oQIDFNrl9hS1-BtCPaV9wmsL84iE~~-L73MOln2ct6BxJMRSDUZDRRFqOCQOLzPZdzLJXvGYgHaN4rn-V6eU2s-unDdsM1LQbsA__" alt="" />
                                </div>
                                <div className="col-lg-5 mb-4">
                                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/ba7f/bb62/cc665f3a68ca23cae6496cc00513777e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8BvrXLrjVWAdIboni00OmhXOaUzB2LHK2eO-wo3OnC~5T3eqm9EkTlovXB-o1Lr9eNtuI~Z0N22h0~-qhVb~RsOGz8zojOyiDk2x9u7-E6XnCvgKY5XcrRJgpxGQI--st~kPD-RfLilhb08TmxXirkhP8dHmV2hARDCxU-wVfGaQ5JfMDfs07smESHN6d5JkdbnKYG7FY~~hBHicgv6NtqIXUlMYyS3P6Qyq7IIS5mmcCMiSswKVcbp-l~DHZ2K5jE~j58UpP1vgKQ246ZXRyiMtURVUhrwQijRC6xb27gTxyg-Dp4unyE~wYmV9RKxSXlxMSe~uFz~j4CtJ6QVEA__" alt="" />
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/2f27/7b8a/70341fd1f187baaf2282aa9e9ae3e05b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBLDx7VT~72kTUJKRDcZRf-4IMvSrB~Pht4nxdg6DXg8aUttMXG~-kFy0nCakdLlL5sF9I5SAzxW~8TCR63zovkQw8Y6GKCDVI7xuWKYgYisUEmaqTEIXem3Fn3YHw83k3Iv433WwE2bsiG3oqS4pgcFPQjGeU8bLUgcHbViIzCZF-dullJcHpVzneOPK8hbj3zlkehecCxFOMgjiHrVk~Y6k-AGvU21wEZw51WZL2vmB-LKPZBgpNzJkV0yIYBCsVQZEt6yzimUKgQfIkK-TGYBjSDsyw9RcGp5idxcFgC5v~gXiMBajvhIW74OgnXXIS4xeAeParRg2I5g0pEBtg__" alt="" />
                                </div>
                                <div className='col-lg-3'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/07c6/8014/df391dd05b274dab61983a8eb9688876?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhCCqHtKOvJ4VBtcBpa~F63diXkcc5Gzr8Q00eOcFovJmb8uG26EKsCyLfiboZqx3Oyh06MkpVMzpjaoUDyRpea0FYjVFtZyYsBov8AJaWNQmB~qDLkSoOwic73JhSUxKQ-4utU3-n6kv3hZmJZM9GKaUimUts3r7hwlUjuG8eiMEKBcCYq7mqBsLdEZwep0B1oqIJuZvMujL6Dg3v4HB6-4ogFBSVh57j6LWciaq73ReJ-BQ5CPgJHljPQrSJIUfDh1gnYksRP9yWKSmtLT20mIj3dGvRhdVvdfUhMyEWReS2u~iukHCRwBU705NJSKwvtkir3j7iRILxtfxGyxPQ__" alt="" />
                                </div>
                                <div className='col'>
                                    <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/f8b3/5d0c/9aad727f5d86a1e071f8454c19c6f57c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxllLC9TmQdg0RteH~pNydDDgqKDw6uJtyhK5I1L9XHxUK5kh5hdsfyEJmGxCs-TJjf7utazVZJJpm4JVO1m4zFfHVky5Vk9SxxQUscjtpC2bTfERis49KtxGOip-BSFs1uEPyza4eP9B~udrZfzbHMoi95DzVmg~mHIx~c3DVplgX4O~RD7oEIodAWXQiWWSOaEEOPnDFPpJQOwc~nH9Smx1VzvLyEyYbEYonlOLN74-8Y3dLmg6~sh7EghW-x06NSIg92f0ubIuVh45aSQHdYa167OFsrDOjdFusA5b0DonakVjBADJAFRAeD91Tb5qg-1th1hd1U5uhhtdIW0TQ__" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <div className='swipe-container text-center py-5'>

            <span className='catg-title'>Testimonials</span>
            <div className="subhead text-white text-capitalize fw-bold lh-sm mt-3">Our Photography Agency <br /> Service Are</div>
            <SwiperComponent />

        </div>

        <section className="faq-sec mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-start">
                            <span className='catg-title'>Question Answer</span>
                            <div className="subhead text-dark text-capitalize fw-bold lh-sm my-3 mb-4">Frequently Asked Question</div>
                            <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/08e7/9396/d7a0def285adf4df8d49ebfd3838bd6c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q2WWjzQTvC7KyETgCHgde0M9LPsEQStFR0-1vsvCSeATkuSJUfUZjHIf-OIh-C1KjKuElM3QKmGvZcJ~Ypr238jZ0JXtmGZ9qb6w4iZkjoKCfsfa5wYrNny99LUK5uvUG9TEbgtUuvQZ2OWdTWmm4gDQoluA~uBbxgs0djw~a7STiniqrGjS6A4zZJKj~zuDzDNsQ19igoB7j1olCB17UwRUzVcUEifIfZ2fQhEQijx1O~yN~cQ1ls8OyuoCvpsd0khPz3BabR-n9YEJ~wFT5us7cA0JwIyFeNfy7jmIQcOcbNAV2yKEhw0eBKp3KMYsNRWBItT97BIx~cYjTWOzZA__" alt="" />
                        </div>

                    </div>
                    <div className="col-lg-6 text-start">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How to get consultation ?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How Long Working Time ?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Where The Office Work ?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Where The Office Work ?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
    </main>)

}