import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>D3Teams with Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="BBsTeams App!" />
        <p className="description">
        
                <h3>GROUP 4 INTERACTIVE VISUALZATION ASSESMENT</h3>
                <h4>  </h4>
                <h4>WHAT IS INTERACTIVE VISUALIZATION</h4>
                <h4></h4>
                <h4></h4>
                <h4></h4>
                
                
       <link rel="icon" href="https://docs.google.com/spreadsheets/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/edit?rtpof=true" /> 
    <a href="https://docs.google.com/spreadsheets/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/edit?rtpof=true"> Link to the dataset </a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
