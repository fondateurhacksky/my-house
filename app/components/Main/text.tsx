export default function Text() {
    return (
        <div className={'z-1'}>
            <p className='uppercase text-n font-black color-tcolor text-transparent font-light animate-textReveal'>
                <span className='inline-block relative overflow-hidden lg:text-m md:text-clamp after:translate-x-[-100%] 
                after:content-[""] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[#FFA500]
                after:animate-slideIn after:animate-slideOut
                 '>
                    Vous pouvez nous faire confiance.
                </span>
            </p>
            <p className='uppercase text-n font-black color-tcolor text-transparent animate-[textReveal_0s_1.25s_forwards]'>
                <span className='inline-block relative overflow-hidden lg:text-m md:text-clamp 
                after:translate-x-[-101%] after:content-[""] after:block after:absolute after:w-full after:h-full after:top-0 
                after:left-0 after:bg-[#008000] after:animate-[slideIn_0.75s_0.3s_ease-out_forwards] after:animate-[slideOut_0.75s_1.3s_ease-out_forwards]'>
                    Pour vous trouver la bonner affaire.
                </span>
            </p>
        </div>
    )
}