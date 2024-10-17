import React from 'react'

const FifthHero = () => {
  return (
    <div className='fifthhero'>
      <div className='fAQ'>
        <div className='left'>
          <header>Digital Marketing FAQs</header>
          <p>As a leading digital marketing agency, we are dedicated to providing comprehensive
            educational resources and answering frequently asked questions to help our clients.</p><br />
          <div className='lower'>
            <button style={{
              padding: '10px 29px 10px 29px',
              borderRadius: '50px',
              borderStyle: 'solid',
              borderWidth: '1px',
              color: 'black'
            }}>more question</button>

            <p style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '28.8px',
              textDecoration: 'underline',
              textAlign: 'left',
            }}>Contact us</p>
          </div>
        </div>
        <div className='right'>
          <table>
            <tbody>
              <tr>
                <td>
                  <p className='question'>Why is digital marketing important for my business?</p>
                  <p style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '28.8px',
                    textAlign: 'left'
                  }}>Digital marketing allows businesses to reach and engage with a wider audience,
                    generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted
                    marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.</p>
                </td>
                <td className='action' style={{justifyContent:'initial'}}><b>-</b></td>
              </tr>
              <tr>
                <td>
                <p className='question'>
                How can digital marketing help improve my website's visibility?
                </p>
                </td>
                <td className='action'><b>+</b></td>
              </tr>

              <tr>
                <td>
                  <p className='question'>How long does it take to see results from digital marketing efforts?</p>
                </td>
                <td className='action'><b>+</b></td>
              </tr>

              <tr>
                <td>
                <p className='question'>How do you measure the success of digital marketing campaigns?</p>
                </td>
                <td className='action'><b>+</b></td>
              </tr>


            </tbody>
          </table>

        </div>
      </div>
    </div>

  )
}

export default FifthHero