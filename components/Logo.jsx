import Link from 'next/link';
import Image from 'next/image';



const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.png' width={65} height={65} priority alt='Bin Magdi logo' className='color-primary' />
    </Link>
  )
}

export default Logo
