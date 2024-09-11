import spinnerImg from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img src={spinnerImg} alt='Loading ...' width={180} className='text-center mx-auto' />
    </div>
  )
}

export default Spinner