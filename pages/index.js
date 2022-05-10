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
        
                <h3 style="text-align: center;">GROUP 4 INTERACTIVE VISUALZATION ASSESMENT</h3>
                <h4 style="text-align: center;">  </h4>
                <h4 style="text-align: center;">WHAT IS INTERACTIVE VISUALIZATION</h4>
                <h4>The technique of developing interactive visualizations to comprehend patterns, variances, and derive useful and meaningful 
    insights from data is known as data visualization. Data visualization is primarily used for data cleansing, exploration, and discovery, as 
    well as for conveying outcomes to Business stakeholders. It can be used as a tool for data pre-processing as well as gaining insights into the data. 
    The key to effective communication of outcomes is having the correct selection of visuals for diverse data types and business scenarios. In this project, 
    we will be discussing business insights that can be drawn from the data gotten from a Superstore Giant in the United States of America.
    
    
    THE DATASET
    The Superstore dataset was gotten from  
    <a href="https://docs.google.com/spreadsheets/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/edit?rtpof=true"> Kaggle </a>
    (https://www.kaggle.com/datasets/vivek468/superstore-dataset-final ) and it about a 
    superstore giant looking to understand which product, categories, regions and customer segment they focus on or be wary of. 
    The dataset contains 9994 rows of records and 21 columns of attributes with no missing values.

    
    
    </h4>
                <h4></h4>
                <h4></h4>
                
                
    <a href="https://docs.google.com/spreadsheets/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/edit?rtpof=true"> Link to the dataset </a>
        </p>
      </main>

      <Footer />
    </div>
  )
}