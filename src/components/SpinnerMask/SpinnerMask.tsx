// import logo1 from '/logo-black.png';

const SpinnerMask = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        top: 2,
        background: 'radial-gradient(#0e300e, #000000)',
      }}
    >
      {/* <svg width="200" height="200" viewBox="0 0 200 200">
        <image href={logo1} width="200" height="200" mask="url(#mask)" />
      </svg> */}
    </div>
  );
};

export default SpinnerMask;
