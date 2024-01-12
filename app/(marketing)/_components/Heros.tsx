import Image from "next/image";

const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
<Image fill alt="documents" src="/documents.png" className="object-contain dark:hidden"/>
<Image fill alt="documents" src="/documents-dark.png" className="object-contain hidden dark:block"/>

        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
<Image src="/reading.png" alt="raeding" fill className="object-contain dark:hidden"/>
<Image src="/reading-dark.png" alt="raeding" fill className="object-contain dark:block hidden"/>
</div>
    </div>
        </div>

  )
}

export default Heros
