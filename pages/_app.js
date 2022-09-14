import '../styles/globals.css'
import Aside from '../components/aside'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='row'>
      <div className='col-md-3 col-lg-2'>
          <Aside />        
        </div>
        <div className='col-md-6 col-lg-7'>
          <Component {...pageProps} />          
        </div>
        <div className='col-md-3 col-lg-3'>
          <h1>Here is something</h1>
        </div>
     
       </div>
    </>
    
  );
}

export default MyApp
