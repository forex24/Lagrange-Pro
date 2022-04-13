const Footer = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 'clamp(70px, 9.5138vw, 137px)'
        }}
        className="Footer"
      >
        <div
          style={{
            width: 'clamp(200px,26.3888vw, 380px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img
            style={{
              width: 'clamp(20px, 2.2222vw, 32px)',
              color: '#BCBCBC',
            }}
            src="/assets/d.png"
          />
          <img
            style={{
              width: 'clamp(20px, 2.2222vw, 32px)',
              color: '#BCBCBC',
            }}
            src="/assets/discord.png"
          />
          <img
            style={{
              width: 'clamp(20px, 2.2222vw, 32px)',
              color: '#BCBCBC',
            }}
            src="/assets/telegram.png"
          />
          <img
            style={{
              width: 'clamp(20px, 2.2222vw, 32px)',
              color: '#BCBCBC',
            }}
            src="/assets/twitter.png"
          />
        </div>
        <div 
          style={{
            fontFamily: 'Roboto', 
            fontSize: 'clamp(14px, 1.25vw, 18px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px 0 0 0'
           }}>
          All rights reserved 2022
        </div>
      </div>
    </>
  )
}

export default Footer
