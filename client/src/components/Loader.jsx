import { PulseLoader } from 'react-spinners'

const cssOverride = {
  display: 'block',
  margin: '0 auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export const Loader = () => {
  return (
    <PulseLoader
      color='#6366f1'
      loading
      cssOverride={cssOverride}
      size={16}
      aria-label='Loading Spinner'
    />
  )
}
