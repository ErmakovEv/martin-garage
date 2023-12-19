type SpinnerMaskProps = {
  img?: string;
};

const SpinnerMask = ({ img }: SpinnerMaskProps) => {
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
      <svg width="200" height="200" viewBox="0 0 200 200">
        {img ? (
          <image href={img} width="200" height="200" mask="url(#mask)" />
        ) : null}
      </svg>
    </div>
  );
};

export default SpinnerMask;
