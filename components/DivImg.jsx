import Image from "next/image"



const DivImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="Bin Magdi Profile Pic"/>
    </div>
  )
}

export default DivImg
