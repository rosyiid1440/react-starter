import {useState, React, useEffect} from 'react'
import Button from '../../components/Button';

const Home = () => {

  return (
    <>
      <div className="container">
        <section id="head">
            <div className="row" style={{ minHeight:'80vh' }}>
            <div className="col-md-6 d-flex justify-content-left align-items-center">
                <div>
                    <p style={{ color:'#8BAC3E', fontSize: '64px', fontFamily:'rubik', fontWeight:'500' }}>Good Food Us<br></br> Good Mood</p>
                    <p style={{ fontFamily:'rubik', fontSize:'18px', color:'#757575', fontWeight:'400' }}>I would think that conserving our natural resources<br></br> should be a conservative position: Not to waste food, and<br></br> not to throw away a lot of the food that we buy.</p>
                    <button class="mt-4" style={{ fontFamily:'rubik', backgroundColor: '#8BAC3E', color: 'white', borderRadius: '100px', padding: '10px 18px 10px 18px', border: 'none',boxShadow: '0px 8px 32px 0px #666BE259' }}>Daftar Sekarang</button>
                    <button class="mt-4" style={{ fontFamily:'rubik', fontWeight: '500', backgroundColor: '#F2F2F2', color: 'black', borderRadius: '100px', padding: '10px 18px 10px 18px', border: 'none', marginLeft:'16px' }}>About Us</button>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src="../images/image.png" style={{ border:'50px solid rgba(196, 196, 196, .2)', borderRadius: '50%' }}/>
            </div>
            </div>
        </section>
      </div>

        <div className="pt-5 pb-5 mb-5" id="trending" style={{ backgroundColor:'white', minWidth:'100%' }}>
            <div className="container">
                <p style={{ fontSize:'38px', fontFamily:'rubik', fontWeight:'500', color:'rgba(51, 51, 51, 1)' }}
                >Browser Our Category<br></br><span style={{ fontSize:'38px', fontFamily:'rubik', fontWeight:'500', color:'rgba(139, 172, 62, 1)' }}>Receipt</span></p>

                <div className="row">
                    <div className="col-md-2">
                        <div className="cardCategory">
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor:'rgba(240, 254, 235, 1)'}}>
                                <div className="card-body text-center">
                                    <img src="../images/cupcake.png" style={{ width:'20%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'16px' }}>Cupcake <br></br><span style={{ fontFamily:'rubik', fontWeight:'400', fontSize:'14px' }}>22 items</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-2">
                        <div className='cardCategory'>
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor:'rgba(228, 242, 244, 1)' }}>
                                <div className="card-body text-center">
                                    <img src="../images/pizza.png" style={{ width:'20%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'16px' }}>Pizza <br></br><span style={{ fontFamily:'rubik', fontWeight:'400', fontSize:'14px' }}>25 items</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="float-end mt-5">
                    <button class="mt-4" style={{ fontFamily:'rubik', backgroundColor: '#8BAC3E', color: 'white', borderRadius: '100px', padding: '10px 18px 10px 18px', border: 'none', marginRight:'10px', fontSize:'16px' }}><img src="../images/prev.png"/> Prev</button>
                    <button class="mt-4" style={{ fontFamily:'rubik', backgroundColor: '#8BAC3E', color: 'white', borderRadius: '100px', padding: '10px 18px 10px 18px', border: 'none', fontSize:'16px' }}>Next <img src="../images/next.png"/></button>
                </div>
            </div>
            
        </div>

        <div className="pt-5 pb-5" id="trending" style={{ backgroundColor:'white', minWidth:'100%' }}>
            <div className="container">
                <p style={{ fontSize:'38px', fontFamily:'rubik', fontWeight:'500', color:'rgba(51, 51, 51, 1)' }}
                >Browser Our Trending<br></br><span style={{ fontSize:'38px', fontFamily:'rubik', fontWeight:'500', color:'rgba(139, 172, 62, 1)' }}>Receipt</span></p>

                <div className="row">
                    <div className="col-md-3">
                        <div className="cardTrending mb-4">
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor: 'rgba(230, 243, 245, 1)',boxShadow: '0px 11px 39px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="card-body">
                                    <img src="../images/gambarpizza.png" style={{ width:'50%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'26px' }}>Pizza Paperoni <br></br><span style={{ fontFamily:'rubik', fontWeight:'500', fontSize:'18px', color:'rgba(139, 172, 62, 1)' }}>Pizza</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cardTrending mb-4">
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor: 'rgba(230, 243, 245, 1)',boxShadow: '0px 11px 39px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="card-body">
                                    <img src="../images/gambarpizza.png" style={{ width:'50%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'26px' }}>Pizza Paperoni <br></br><span style={{ fontFamily:'rubik', fontWeight:'500', fontSize:'18px', color:'rgba(139, 172, 62, 1)' }}>Pizza</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cardTrending mb-4">
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor: 'rgba(230, 243, 245, 1)',boxShadow: '0px 11px 39px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="card-body">
                                    <img src="../images/gambarpizza.png" style={{ width:'50%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'26px' }}>Pizza Paperoni <br></br><span style={{ fontFamily:'rubik', fontWeight:'500', fontSize:'18px', color:'rgba(139, 172, 62, 1)' }}>Pizza</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cardTrending mb-4">
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor: 'rgba(230, 243, 245, 1)',boxShadow: '0px 11px 39px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="card-body">
                                    <img src="../images/gambarpizza.png" style={{ width:'50%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'26px' }}>Pizza Paperoni <br></br><span style={{ fontFamily:'rubik', fontWeight:'500', fontSize:'18px', color:'rgba(139, 172, 62, 1)' }}>Pizza</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="cardTrending mb-4">
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor: 'rgba(230, 243, 245, 1)',boxShadow: '0px 11px 39px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="card-body">
                                    <img src="../images/gambarpizza.png" style={{ width:'50%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'26px' }}>Pizza Paperoni <br></br><span style={{ fontFamily:'rubik', fontWeight:'500', fontSize:'18px', color:'rgba(139, 172, 62, 1)' }}>Pizza</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="cardTrending mb-4">
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor: 'rgba(230, 243, 245, 1)',boxShadow: '0px 11px 39px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="card-body">
                                    <img src="../images/gambarpizza.png" style={{ width:'50%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'26px' }}>Pizza Paperoni <br></br><span style={{ fontFamily:'rubik', fontWeight:'500', fontSize:'18px', color:'rgba(139, 172, 62, 1)' }}>Pizza</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="cardTrending mb-4">
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor: 'rgba(230, 243, 245, 1)',boxShadow: '0px 11px 39px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="card-body">
                                    <img src="../images/gambarpizza.png" style={{ width:'50%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'26px' }}>Pizza Paperoni <br></br><span style={{ fontFamily:'rubik', fontWeight:'500', fontSize:'18px', color:'rgba(139, 172, 62, 1)' }}>Pizza</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="cardTrending mb-4">
                            <div className="card" style={{ border:'none', borderRadius:'8px', backgroundColor: 'rgba(230, 243, 245, 1)',boxShadow: '0px 11px 39px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="card-body">
                                    <img src="../images/gambarpizza.png" style={{ width:'50%' }}/>
                                    <p className="mt-3" style={{ fontFamily:'rubik',fontWeight:'500', fontSize:'26px' }}>Pizza Paperoni <br></br><span style={{ fontFamily:'rubik', fontWeight:'500', fontSize:'18px', color:'rgba(139, 172, 62, 1)' }}>Pizza</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-5'>
                    <button class="mt-4" style={{ fontFamily:'rubik', backgroundColor: '#8BAC3E', color: 'white', borderRadius: '100px', padding: '10px 18px 10px 18px', border: 'none', fontSize:'16px' }}>All Receipt</button>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Home;